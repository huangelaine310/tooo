/** This is the content script for translating the Works Search Page. */
function translate_search() {
  // list of selctors to translate
  let selectors = [
    "#main > h2.heading",
    "#main > ul > li:nth-child(1) > span",
    "#main > ul > li:nth-child(2) > a",
    "#main > ul > li:nth-child(3) > a",
    "#main > ul > li:nth-child(4) > a",
    "#new_work_search > fieldset:nth-child(2) > legend",
    "label[for='work_search_query']",
    "label[for='work_search_title']",
    "label[for='work_search_creators']",
    "label[for='work_search_revised_at']",
    "#new_work_search > fieldset:nth-child(2) > dl > dt:nth-child(9)",
    "label[for='work_search_complete_']",
    "label[for='work_search_complete_t']",
    "label[for='work_search_complete_f']",
    "#new_work_search > fieldset:nth-child(2) > dl > dt:nth-child(11)",
    "label[for='work_search_crossover_']",
    "label[for='work_search_crossover_f']",
    "label[for='work_search_crossover_t']",
    "label[for='work_search_single_chapter']",
    "label[for='work_search_word_count']",
    "label[for='work_search_language_id']",
    "#new_work_search > fieldset:nth-child(3) > legend",
    "label[for='work_search_fandom_names_autocomplete']",
    "label[for='work_search_rating_ids']",
    "#work_search_rating_ids > option[value='9']",
    "#work_search_rating_ids > option[value='10']",
    "#work_search_rating_ids > option[value='11']",
    "#work_search_rating_ids > option[value='12']",
    "#work_search_rating_ids > option[value='13']",
    "#new_work_search > fieldset:nth-child(3) > dl > dt:nth-child(5)",
    "label[for='warning_14']",
    "label[for='warning_17']",
    "label[for='warning_18']",
    "label[for='warning_16']",
    "label[for='warning_19']",
    "label[for='warning_20']",
    "#new_work_search > fieldset:nth-child(3) > dl > dt:nth-child(7)",
    "label[for='category_116']",
    "label[for='category_22']",
    "label[for='category_21']",
    "label[for='category_23']",
    "label[for='category_2246']",
    "label[for='category_24']",
    "label[for='work_search_character_names_autocomplete']",
    "label[for='work_search_relationship_names_autocomplete']",
    "label[for='work_search_freeform_names_autocomplete']",
    "#new_work_search > fieldset:nth-child(4) > legend",
    "label[for='work_search_hits']",
    "label[for='work_search_kudos_count']",
    "label[for='work_search_comments_count']",
    "label[for='work_search_bookmarks_count']",
    "#new_work_search > fieldset:nth-child(5) > legend",
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
    "#main > ul > li > a[href^='/works/search']"
  ];

  let tooltip_selectors = [
    "input[value='Search']",
  ];

  /** hovers don't work for select options; must include size of select for
      jquery to handle hover events. */
  let select_selectors = {
    "#work_search_rating_ids": 5,
    "#work_search_sort_column": 10,
    "#work_search_sort_direction": 2,
  };

  translate(selectors, tooltip_selectors, select_selectors);
}

translate_search();
