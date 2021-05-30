const i18n = chrome.i18n;

/** Gets the translated message. */
function getMessage(selector) {
  return i18n.getMessage(selector_to_name_mapping[selector]);
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
