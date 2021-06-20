const i18n = chrome.i18n;

/** Gets the translated message. */
function getMessage(selector) {
  try {
    return i18n.getMessage(selector_to_name_mapping[selector]);
  } catch(e) {
    console.log(selector)
    console.log(selector_to_name_mapping[selector])
    console.log(e);
  }
}

/** Translates the given selctors. */
function translate_direct(selectors) {
  for (const selector of selectors) {
    const translation = getMessage(selector);
    $(selector).each(function(index) {
      $(this).contents().filter(function() {return this.nodeType == 3;})
      .first().replaceWith(translation);
    });
  }
}

/** Translates the given selctors. */
function translate_last(selectors) {
  for (const selector of selectors) {
    const translation = getMessage(selector);
    $(selector).each(function(index) {
      $(this).contents().filter(function() {return this.nodeType == 3;})
      .last().replaceWith(translation);
    });
  }
}

/** Add tool tip with translation. */
function addTooltipTranslation(selectors) {
  for (const selector of selectors) {
    const translation = getMessage(selector);
    $(selector).prop('title', translation);
  }
}

/** Helper function that drags the element. */
function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // stop drag when on mouse up
    document.onmouseup = closeDragElement;

    // bottom right corner is for resizing
    const border = 14;
    if (elmnt.offsetWidth - e.offsetX < border &&
        elmnt.offsetHeight - e.offsetY < border) {
      // resize
      document.onmousemove = resizeDrag;
      return;
    }
    // move event
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmousemove = elementDrag;
  }

  function resizeDrag(e) {
    elmnt.style.width = (e.clientX - elmnt.offsetLeft) + 'px';
    elmnt.style.height = (e.clientY - elmnt.offsetTop) + 'px';
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/** Add sticky box to show translation. */
function addStickyDragBox(selectors, select_selectors) {
  // check if sticky box already exists.
  if ($('#sticky_box').length <= 0) {
    // create sticky box
    let box = $('<div>', {id: 'sticky_box'});
    let box_text = $('<div>', {id: 'sticky_box_text'});
    box.append(box_text);
    $('#main').append(box);
    dragElement(document.getElementById('sticky_box'));
  }

  // for html select elements, must include size for hover to work.
  for (const [selector, size] of Object.entries(select_selectors)) {
    $(selector).hover(
      () => $(selector).attr('size', size),
      () => $(selector).removeAttr('size')
    );
  }

  // on hover, show translation
  for (const selector of selectors) {
    $(selector).hover(
      () => {
        // hover mouse in
        $('#sticky_box_text').html(getMessage(selector));
      },
      () => {
        // hover mouse out
        $('#sticky_box_text').empty();
      }
    );
  }
}

function translate_partial(selectors, stopChar='(') {
  for (const selector of selectors) {
    $(selector).each(function(index) {
      const originalText = $(this).text();
      const stopCharIndex = originalText.indexOf(stopChar);
      const textToKeep = ' ' + originalText.substring(stopCharIndex);
      const translation = getMessage(selector);
      $(this).contents().filter(function() {return this.nodeType == 3;})
      .first().replaceWith(translation+textToKeep);
    });
  }
}

/** Translates the selectors based on settings method. */
function translate(selectors=[], tooltip_selectors=[], select_selectors={}, partial_selectors=[], last_selectors=[]) {
  chrome.storage.sync.get('translate_method', (method) => {
    method = method['translate_method'];
    if (method == 'box') {
      addStickyDragBox(selectors.concat(tooltip_selectors).concat(partial_selectors).concat(last_selectors), select_selectors);
    } else if (method == 'tooltip') {
      addTooltipTranslation(selectors.concat(tooltip_selectors).concat(partial_selectors).concat(last_selectors));
    } else {
      //default - direct
      translate_direct(selectors);
      translate_last(last_selectors);
      addTooltipTranslation(tooltip_selectors);
      translate_partial(partial_selectors);
    }
  });
}
