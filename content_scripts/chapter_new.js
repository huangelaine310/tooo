/** This is the content script for translating the Post New Chapter Page. */

// list of selctors to translate
const selectors = [
  "p.required.notice",
  "#new_chapter > fieldset:nth-child(7) > legend",
  "#new_chapter > fieldset:nth-child(5) > legend",
  "label[for='chapter_published_at']",
  "fieldset#chapter-ordering > legend",
  "label[for='chapter_wip_length']",
  "#new_chapter > fieldset:nth-child(5) > dl > dt.notes",
  "#new_chapter > fieldset.text > legend",
  "label[for='chapter_title']",
  "label[for='chapter_position']",
  "label[for='chapter_summary']",
  "label[for='front-notes-options-show']",
  "label[for='end-notes-options-show']",
  "label[for='co-authors-options-show']",
  "a.rtf-link",
  "span.rtf-notes",
];

// call translate function from util.js
translate(selectors);
