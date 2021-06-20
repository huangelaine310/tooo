/** This is the content script for user pages. */

// list of selctors to translate
const selectors = [
  "#dashboard > ul:nth-child(2) > li:nth-child(1) > span",
  "#dashboard > ul:nth-child(2) > li:nth-child(1) > a",
  "#dashboard > ul:nth-child(2) > li:nth-child(2) > a",
  "#dashboard > ul:nth-child(2) > li:nth-child(2) > span",
  "#dashboard > ul:nth-child(2) > li:nth-child(3) > a",
  "#dashboard > ul:nth-child(2) > li:nth-child(3) > span",
  "#dashboard > ul:nth-child(2) > li:nth-child(4) > a",
  "#dashboard > ul:nth-child(2) > li:nth-child(4) > span",
  "#dashboard > ul:nth-child(6) > li:nth-child(2) > a",
  "#dashboard > ul:nth-child(6) > li:nth-child(2) > span",
  "#dashboard > ul:nth-child(6) > li:nth-child(3) > a",
  "#dashboard > ul:nth-child(6) > li:nth-child(3) > span",
  "#dashboard > ul:nth-child(6) > li:nth-child(4) > a",
  "#dashboard > ul:nth-child(6) > li:nth-child(4) > span",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(1) > a",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(2) > a",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(4) > a",
];

/** selectors that should replace the last text node. */
const select_last = [
]

const tooltip_selectors = [
];

/** hovers don't work for select options; must include size of select for
    jquery to handle hover events. */
const select_selectors = {
};

/** Selectors that only translate part of the string. */
const partial_translate_selectors = [
  "#dashboard > ul:nth-child(4) > li:nth-child(1) > a",
  "#dashboard > ul:nth-child(4) > li:nth-child(1) > span",
  "#dashboard > ul:nth-child(4) > li:nth-child(2) > a",
  "#dashboard > ul:nth-child(4) > li:nth-child(2) > span",
  "#dashboard > ul:nth-child(4) > li:nth-child(3) > a",
  "#dashboard > ul:nth-child(4) > li:nth-child(3) > span",
  "#dashboard > ul:nth-child(4) > li:nth-child(4) > a",
  "#dashboard > ul:nth-child(4) > li:nth-child(4) > span",
  "#dashboard > ul:nth-child(4) > li:nth-child(5) > a",
  "#dashboard > ul:nth-child(4) > li:nth-child(5) > span",
  "#dashboard > ul:nth-child(6) > li:nth-child(1) > a",
  "#dashboard > ul:nth-child(6) > li:nth-child(1) > span",
  "#dashboard > ul:nth-child(8) > li:nth-child(1) > a",
  "#dashboard > ul:nth-child(8) > li:nth-child(1) > span",
  "#dashboard > ul:nth-child(8) > li:nth-child(2) > a",
  "#dashboard > ul:nth-child(8) > li:nth-child(2) > span",
  "#dashboard > ul:nth-child(8) > li:nth-child(3) > a",
  "#dashboard > ul:nth-child(8) > li:nth-child(3) > span",
  "#dashboard > ul:nth-child(8) > li:nth-child(4) > a",
  "#dashboard > ul:nth-child(8) > li:nth-child(4) > span",
  "#dashboard > ul:nth-child(8) > li:nth-child(5) > a",
  "#dashboard > ul:nth-child(8) > li:nth-child(5) > span",
];

translate(selectors, tooltip_selectors, select_selectors, partial_translate_selectors, select_last);
