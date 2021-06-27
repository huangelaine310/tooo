/** This is the content script for browsing by tags. */
function translate_browse() {
  // list of selctors to translate
  let selectors = [
    "label[for='work_search_sort_column']",
    "option[value='_score']",
    "option[value='authors_to_sort_on']",
    "option[value='title_to_sort_on']",
    "option[value='created_at']",
    "option[value='revised_at']",
    "option[value='word_count']",
    "option[value='hits']",
    "option[value='kudos_count']",
    "option[value='comments_count']",
    "option[value='bookmarks_count']",
    "label[for='work_search_sort_direction']",
    "option[value='asc']",
    "option[value='desc']",
    "label[for='work_search_query']",
    "label[for='work_search_language_id']",
    "label[for='work_search_crossover_'] > span:nth-child(3)",
    "label[for='work_search_crossover_f'] > span:nth-child(3)",
    "label[for='work_search_crossover_t'] > span:nth-child(3)",
    "label[for='work_search_complete_'] > span:nth-child(3)",
    "label[for='work_search_complete_t'] > span:nth-child(3)",
    "label[for='work_search_complete_f'] > span:nth-child(3)",
    "#main > div.navigation.actions.module > ul > li:nth-child(1) > span",
    "#main > div.navigation.actions.module > ul > li:nth-child(2) > a",
    "dt.include > h4.heading",
    "label[for='work_search_other_tag_names_autocomplete']",
    "dt.exclude > h4.heading",
    "label[for='work_search_excluded_tag_names_autocomplete']",
    "dt.more > h4.heading",
    "label[for='work_search_words_from']",
    "label[for='work_search_words_to']",
    "label[for='work_search_date_from']",
    "label[for='work_search_date_to']",
    "label[for='bookmark_search_sort_column']",
    "option[value='bookmarkable_date']",
    "label[for='bookmark_search_other_tag_names_autocomplete']",
    "label[for='bookmark_search_other_bookmark_tag_names_autocomplete']",
    "label[for='bookmark_search_excluded_tag_names_autocomplete']",
    "label[for='bookmark_search_excluded_bookmark_tag_names_autocomplete']",
    "label[for='bookmark_search_bookmarkable_query']",
    "label[for='bookmark_search_bookmark_query']",
    "label[for='bookmark_search_language_id']",
    "#bookmark-filters > fieldset > dl > dd.more.group > dl > dt.options",
    "#bookmark-filters > fieldset > dl > dd.more.group > dl > dd.options > ul > li:nth-child(1) > label > span:nth-child(4)",
    "#bookmark-filters > fieldset > dl > dd.more.group > dl > dd.options > ul > li:nth-child(2) > label > span:nth-child(4)",
    "#go_to_filters",
    "#main:not('.dashboard') > ul > li:nth-child(2) > span",
    "#main:not('.dashboard') > ul > li:nth-child(1) > a",
  ];

  /** selectors that should replace the last text node. */
  let select_last = [
    "dt.filter-toggle.rating > button",
    "dt.filter-toggle.warning > button",
    "dt.filter-toggle.category > button",
    "dt.filter-toggle.fandom > button",
    "dt.filter-toggle.character > button",
    "dt.filter-toggle.relationship > button",
    "dt.filter-toggle.freeform > button",
    "dt#toggle_work_crossover > button",
    "dt#toggle_work_complete > button",
    "dt#toggle_work_words > button",
    "dt#toggle_work_dates > button",
    "dt.filter-toggle.tag.tags > button",
  ]

  let tooltip_selectors = [
    "input[value='Favorite Tag']",
    "input[value='Sort and Filter']",
  ];

  /** hovers don't work for select options; must include size of select for
      jquery to handle hover events. */
  let select_selectors = {
    "#work_search_sort_column": 9,
    "#bookmark_search_sort_column": 2,
  };

  /** Selectors that only translate part of the string. */
  let partial_translate_selectors = [
    "dd.rating.tags > ul > li:nth-child(1) > label > span:nth-child(3)",
    "dd.rating.tags > ul > li:nth-child(2) > label > span:nth-child(3)",
    "dd.rating.tags > ul > li:nth-child(3) > label > span:nth-child(3)",
    "dd.rating.tags > ul > li:nth-child(4) > label > span:nth-child(3)",
    "dd.rating.tags > ul > li:nth-child(5) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(1) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(2) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(3) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(4) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(5) > label > span:nth-child(3)",
    "dd.category.tags > ul > li:nth-child(6) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(1) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(2) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(3) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(4) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(5) > label > span:nth-child(3)",
    "dd.warning.tags > ul > li:nth-child(6) > label > span:nth-child(3)",
  ];

  translate(selectors, tooltip_selectors, select_selectors, partial_translate_selectors, select_last);
}

translate_browse();
