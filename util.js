const i18n = chrome.i18n;

/** Translates the given selctors. */
function translate(selectors) {
  for (const selector of selectors) {
    const translation = i18n.getMessage(selector_to_name_mapping[selector]);
    $(selector).contents().filter(function() {return this.nodeType == 3;})
    .first().replaceWith(translation);
  }
}
