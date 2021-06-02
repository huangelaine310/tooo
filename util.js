const i18n = chrome.i18n;

/** Gets the translated message. */
function getMessage(selector) {
  try {
    return i18n.getMessage(selector_to_name_mapping[selector]);
  } catch(e) {
    console.log(e);
  }
}

/** Translates the given selctors. */
function translate(selectors) {
  for (const selector of selectors) {
    const translation = getMessage(selector);
    $(selector).contents().filter(function() {return this.nodeType == 3;})
    .first().replaceWith(translation);
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
function addStickyDragBox(selectors) {
  // create sticky box
  let box = $('<div>', {id: 'sticky_box'});
  let box_text = $('<div>', {id: 'sticky_box_text'});
  box.append(box_text);
  $('#main').append(box);
  dragElement(document.getElementById('sticky_box'));

  // on hover, show translation
  for (const selector of selectors) {
    $(selector).hover(
      () => {
        // hover mouse in
        box_text.html(getMessage(selector));
      },
      () => {
        // hover mouse out
        box_text.empty();
      }
    );
  }
}
