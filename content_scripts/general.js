/** This is the content script for general Ao3 components. */

// list of selctors to translate
const general_selectors = [
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(1) > span",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(2) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(3) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(4) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(5) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(6) > a",
  "#greeting > ul > li:nth-child(2) > a",
  "#greeting > ul > li:nth-child(2) > ul > li:nth-child(1) > a",
  "#greeting > ul > li:nth-child(2) > ul > li:nth-child(2) > a",
  "#greeting > ul > li:nth-child(3) > a",
  "#header > ul > li:nth-child(1) > a",
  "#header > ul > li:nth-child(1) > ul > li:nth-child(1) > a",
  "#medium_5 > a",
  "#medium_3 > a",
  "#medium_4 > a",
  "#medium_7 > a",
  "#medium_2 > a",
  "#medium_6 > a",
  "#medium_8 > a",
  "#medium_30198 > a",
  "#medium_1 > a",
  "#medium_476 > a",
  "#medium_9971 > a",
  "#header > ul > li:nth-child(2) > a",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(1) > a",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(2) > a",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(3) > a",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(4) > a",
  "#header > ul > li:nth-child(3) > a",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(1) > a",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(2) > a",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(3) > a",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(4) > a",
  "#header > ul > li:nth-child(4) > a",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(1) > a",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(2) > a",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(4) > a",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(5) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(1) > a",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(2) > span",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(3) > span",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(4) > span",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(5) > span",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(6) > span",
  "#header > ul > li:nth-child(1) > ul > li:nth-child(1) > span",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(1) > span",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(2) > span",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(3) > span",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(4) > span",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(1) > span",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(2) > span",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(3) > span",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(4) > span",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(1) > span",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(2) > span",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(4) > span",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(5) > span",
];

translate(general_selectors);