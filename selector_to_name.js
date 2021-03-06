const selector_to_name_mapping = {
  "label[for='work_parent_attributes_language_id']": "associations_parent_language",
  "label[for='work_moderated_commenting_enabled']": "privacy_comments_moderated",
  "#new_chapter > fieldset:nth-child(5) > dl > dt.notes": "nc_chapter_notes",
  "#new_chapter > fieldset:nth-child(7) > legend": "nc_chapter_post",
  "label[for='work_comment_permissions_disable_all']": "privacy_comments_permissions_disable_all",
  "dt.warning.required > label": "archive_warning",
  "label[for='work_wip_length']": "chaptered_wip_length",
  "p#parent-attributes-url-field-description": "associations_parent_url_note",
  "#new_chapter > fieldset.text > legend": "nc_chapter_text",
  "label[for='work_series_attributes_id']": "series_existing",
  "fieldset.preface > legend": "preface",
  "label[for='work_title']": "work_title",
  "label[for='work_archive_warning_strings_20']": "archive_warning_underage",
  "label[for='work_recipients_autocomplete']": "gift_this_work_to",
  "label[for='chapter_published_at']": "nc_chapter_published_at",
  "fieldset.work.meta > legend": "tags",
  "label[for='work_rating_string']": "rating",
  "option[value='Not Rated']": "rating_not_rated",
  "fieldset.work.meta > p.note": "tags_heading_note",
  "label[for='parent-options-show']": "associations_parent",
  "label[for='work_series_attributes_title']": "series_new",
  "label[for='end-notes-options-show']": "notes_end",
  "p.required.notice": "required",
  "label[for='work_language_id']": "language",
  "dd.skin > select#work_work_skin_id > option[value='229']": "skin_basic",
  "fieldset.work.text > legend": "work_text",
  "label[for='work_chapter_attributes_title']": "chaptered_wip_title",
  "option[value='Mature']": "rating_mature",
  "label[for='work_character_autocomplete']": "character",
  "label[for='front-notes-options-show']": "notes_beginning",
  "label[for='chapter_summary']": "nc_chapter_summary",
  "label[for='work_category_string_22']": "category_FM",
  "label[for='work_parent_attributes_author']": "author",
  "label[for='work_parent_attributes_translation']": "associations_parent_translation",
  "label[for='work_freeform_autocomplete']": "additional_tags",
  "option[value='Explicit']": "rating_explicit",
  "label[for='published_at']": "publication_date",
  "#new_chapter > fieldset:nth-child(5) > legend": "nc_chapter_preface",
  "fieldset.preface > dl > dt.notes": "notes",
  "label[for='work_category_string_24']": "category_Other",
  "label[for='chapter_position']": "nc_chapter_position",
  "dt.permissions.comments": "privacy_comments_permissions",
  "label[for='work_category_string_116']": "category_FF",
  "label[for='work_comment_permissions_enable_all']": "privacy_comments_permissions_all",
  "label[for='work_comment_permissions_disable_anon']": "privacy_comments_permissions_disable_anon",
  "label[for='work_category_string_21']": "category_Gen",
  "label[for='work_summary']": "summary",
  "option[value='General Audiences']": "rating_general",
  "label[for='co-authors-options-show']": "add_co_creators",
  "label[for='series-options-show']": "part_of_series",
  "dd.fandom.required > p.footnote": "fandom_footnote",
  "span.rtf-notes": "rich_text_notes",
  "label[for='work_work_skin_id']": "work_skin",
  "label[for='chapter_title']": "nc_chapter_title",
  "label[for='work_category_string_2246']": "category_Multi",
  "label[for='work_archive_warning_strings_18']": "archive_warning_death",
  "label[for='work_category_string_23']": "category_MM",
  "label[for='work_archive_warning_strings_17']": "archive_warning_graphic",
  "label[for='work_parent_attributes_title']": "associations_parent_title",
  "label[for='work_restricted']": "privacy_restriced",
  "label[for='work_fandom_autocomplete']": "fandom",
  "a.rtf-link": "rich_text",
  "label[for='work_archive_warning_strings_14']": "archive_warning_not_to_use",
  "fieldset.privacy > legend": "privacy",
  "label[for='backdate-options-show']": "backdate_options",
  "label[for='work_archive_warning_strings_19']": "archive_warning_rape",
  "label[for='chapter_wip_length']": "nc_chapter_of",
  "label[for='work_collection_names_autocomplete']": "post_to_collections_challenges",
  "label[for='work_relationship_autocomplete']": "relationship",
  "option[value='Teen And Up Audiences']": "rating_teen",
  "label[for='work_archive_warning_strings_16']": "archive_warning_no",
  "fieldset.create > legend": "post",
  "dd.skin > p.actions > a": "skin_public",
  "fieldset#associations > legend": "associations",
  "fieldset#chapter-ordering > legend": "nc_chapter_ordering",
  "dt.category > label": "category",
  "label[for='chapters-options-show']": "chaptered",
  "fieldset.create > ul > li:nth-child(1) > input": "preview_button",
  "fieldset.create > ul > li:nth-child(2) > input": "post_button",
  "fieldset.create > ul > li:nth-child(3) > input": "cancel_button",
  // post action buttons
  "fieldset:nth-child(7) > ul > li:nth-child(1) > input": "preview_button",
  "fieldset:nth-child(7) > ul > li:nth-child(2) > input": "post_button",
  "fieldset:nth-child(7) > ul > li:nth-child(3) > input": "cancel_button",
  // work search
  "#main > h2.heading": "work_search",
  "#main > ul > li:nth-child(1) > span": "ws_nav_work_search",
  "#main > ul > li:nth-child(2) > a": "ws_nav_people_search",
  "#main > ul > li:nth-child(3) > a": "ws_nav_bookmark_search",
  "#main > ul > li:nth-child(4) > a": "ws_nav_tag_search",
  "#new_work_search > fieldset:nth-child(2) > legend": "work_info",
  "input[value='Search']": "search",
  "label[for='work_search_query']": "ws_any_field",
  "label[for='work_search_title']": "ws_title",
  "label[for='work_search_creators']": "ws_creators",
  "label[for='work_search_revised_at']": "ws_date",
  "#new_work_search > fieldset:nth-child(2) > dl > dt:nth-child(9)": "ws_completion",
  "label[for='work_search_complete_']": "ws_completion_any",
  "label[for='work_search_complete_t']": "ws_completion_true",
  "label[for='work_search_complete_f']": "ws_completion_false",
  "#new_work_search > fieldset:nth-child(2) > dl > dt:nth-child(11)": "ws_crossovers",
  "label[for='work_search_crossover_']": "ws_crossovers_include",
  "label[for='work_search_crossover_f']": "ws_crossovers_exclude",
  "label[for='work_search_crossover_t']": "ws_crossovers_only",
  "label[for='work_search_single_chapter']": "ws_single_chapter",
  "label[for='work_search_word_count']": "ws_word_count",
  "label[for='work_search_language_id']": "ws_language",
  "#new_work_search > fieldset:nth-child(3) > legend": "ws_work_tags",
  "label[for='work_search_fandom_names_autocomplete']": "ws_fandoms",
  "label[for='work_search_rating_ids']": "ws_rating",
  "#work_search_rating_ids > option[value='9']": "rating_not_rated",
  "#work_search_rating_ids > option[value='10']": "rating_general",
  "#work_search_rating_ids > option[value='11']": "rating_teen",
  "#work_search_rating_ids > option[value='12']": "rating_mature",
  "#work_search_rating_ids > option[value='13']": "rating_explicit",
  "#new_work_search > fieldset:nth-child(3) > dl > dt:nth-child(5)": "ws_warnings",
  "label[for='warning_14']": "creator_chose_not_archive_warnings",
  "label[for='warning_17']": "archive_warning_graphic",
  "label[for='warning_18']": "archive_warning_death",
  "label[for='warning_16']": "archive_warning_no",
  "label[for='warning_19']": "archive_warning_rape",
  "label[for='warning_20']": "archive_warning_underage",
  "#new_work_search > fieldset:nth-child(3) > dl > dt:nth-child(7)": "category",
  "label[for='category_116']": "category_FF",
  "label[for='category_22']": "category_FM",
  "label[for='category_21']": "category_Gen",
  "label[for='category_23']": "category_MM",
  "label[for='category_2246']": "category_Multi",
  "label[for='category_24']": "category_Other",
  "label[for='work_search_character_names_autocomplete']": "character",
  "label[for='work_search_relationship_names_autocomplete']": "relationship",
  "label[for='work_search_freeform_names_autocomplete']": "additional_tags",
  "#new_work_search > fieldset:nth-child(4) > legend": "work_stats",
  "label[for='work_search_hits']": "hits_count",
  "label[for='work_search_kudos_count']": "kudos_count",
  "label[for='work_search_comments_count']": "comments_count",
  "label[for='work_search_bookmarks_count']": "bookmarks_count",
  "#new_work_search > fieldset:nth-child(5) > legend": "search",
  "label[for='work_search_sort_column']": "sort_by",
  "option[value='_score']": "best_match",
  "option[value='authors_to_sort_on']": "author",
  "option[value='title_to_sort_on']": "ws_title",
  "option[value='created_at']": "date_posted",
  "option[value='revised_at']": "date_updated",
  "option[value='word_count']": "ws_word_count",
  "option[value='hits']": "hits_count",
  "option[value='kudos_count']": "kudos_count",
  "option[value='comments_count']": "comments_count",
  "option[value='bookmarks_count']": "bookmarks_count",
  "label[for='work_search_sort_direction']": "sort_direction",
  "option[value='asc']": "ascending",
  "option[value='desc']": "descending",
  "#main > ul > li > a[href^='/works/search']": "edit_search",
  "dd.rating.tags > ul > li:nth-child(1) > label > span:nth-child(3)": "rating_teen",
  "dd.rating.tags > ul > li:nth-child(2) > label > span:nth-child(3)": "rating_general",
  "dd.rating.tags > ul > li:nth-child(3) > label > span:nth-child(3)": "rating_explicit",
  "dd.rating.tags > ul > li:nth-child(4) > label > span:nth-child(3)": "rating_mature",
  "dd.rating.tags > ul > li:nth-child(5) > label > span:nth-child(3)": "rating_not_rated",
  "#main > div.navigation.actions.module > ul > li:nth-child(1) > span": "works",
  "#main > div.navigation.actions.module > ul > li:nth-child(2) > a": "bookmarks",
  "input[value='Favorite Tag']": "favorite_tag",
  "input[value='Sort and Filter']": "sort_and_filter",
  "dt.include > h4.heading": "include",
  "dt.filter-toggle.rating > button": "ws_rating",
  "dt.filter-toggle.warning > button": "ws_warnings",
  "dt.filter-toggle.category > button": "category",
  "dt.filter-toggle.fandom > button": "ws_fandoms",
  "dt.filter-toggle.character > button": "character",
  "dt.filter-toggle.relationship > button": "relationship",
  "dt.filter-toggle.freeform > button": "additional_tags",
  "label[for='work_search_other_tag_names_autocomplete']": "other_tags_include",
  "dt.exclude > h4.heading": "exclude",
  "label[for='work_search_excluded_tag_names_autocomplete']": "other_tags_exclude",
  "dt.more > h4.heading": "more_options",
  "dt#toggle_work_crossover > button": "ws_crossovers",
  "dt#toggle_work_complete > button": "ws_completion",
  "dt#toggle_work_words > button": "ws_word_count",
  "label[for='work_search_words_from']": "word_count_from",
  "label[for='work_search_words_to']": "word_count_to",
  "dt#toggle_work_dates > button": "date_updated",
  "label[for='work_search_date_from']": "date_updated_from",
  "label[for='work_search_date_to']": "date_updated_to",
  "dd.category.tags > ul > li:nth-child(1) > label > span:nth-child(3)": "category_MM",
  "dd.category.tags > ul > li:nth-child(2) > label > span:nth-child(3)": "category_FM",
  "dd.category.tags > ul > li:nth-child(3) > label > span:nth-child(3)": "category_Gen",
  "dd.category.tags > ul > li:nth-child(4) > label > span:nth-child(3)": "category_Multi",
  "dd.category.tags > ul > li:nth-child(5) > label > span:nth-child(3)": "category_FF",
  "dd.category.tags > ul > li:nth-child(6) > label > span:nth-child(3)": "category_Other",
  "dd.warning.tags > ul > li:nth-child(1) > label > span:nth-child(3)": "archive_warning_no",
  "dd.warning.tags > ul > li:nth-child(2) > label > span:nth-child(3)": "creator_chose_not_archive_warnings",
  "dd.warning.tags > ul > li:nth-child(3) > label > span:nth-child(3)": "archive_warning_graphic",
  "dd.warning.tags > ul > li:nth-child(4) > label > span:nth-child(3)": "archive_warning_death",
  "dd.warning.tags > ul > li:nth-child(5) > label > span:nth-child(3)": "archive_warning_underage",
  "dd.warning.tags > ul > li:nth-child(6) > label > span:nth-child(3)": "archive_warning_rape",
  "label[for='work_search_crossover_'] > span:nth-child(3)": "ws_crossovers_include",
  "label[for='work_search_crossover_f'] > span:nth-child(3)": "ws_crossovers_exclude",
  "label[for='work_search_crossover_t'] > span:nth-child(3)": "ws_crossovers_only",
  "label[for='work_search_complete_'] > span:nth-child(3)": "ws_completion_any",
  "label[for='work_search_complete_t'] > span:nth-child(3)": "ws_completion_true",
  "label[for='work_search_complete_f'] > span:nth-child(3)": "ws_completion_false",
  "dt.filter-toggle.tag.tags > button": "bookmarker_tag",
  "label[for='bookmark_search_sort_column']": "sort_by",
  "option[value='bookmarkable_date']": "date_updated",
  "label[for='bookmark_search_other_tag_names_autocomplete']": "other_work_tags_include",
  "label[for='bookmark_search_other_bookmark_tag_names_autocomplete']": "other_bookmarker_tags_include",
  "label[for='bookmark_search_excluded_bookmark_tag_names_autocomplete']": "other_bookmarker_tags_exclude",
  "label[for='bookmark_search_excluded_tag_names_autocomplete']": "other_work_tags_exclude",
  "label[for='bookmark_search_bookmarkable_query']": "search_within_results",
  "label[for='bookmark_search_bookmark_query']": "search_bookmarkers_tags_and_notes",
  "label[for='bookmark_search_language_id']": "work_language",
  "#bookmark-filters > fieldset > dl > dd.more.group > dl > dt.options": "bookmark_types",
  "#bookmark-filters > fieldset > dl > dd.more.group > dl > dd.options > ul > li:nth-child(1) > label > span:nth-child(4)": "recs_only",
  "#bookmark-filters > fieldset > dl > dd.more.group > dl > dd.options > ul > li:nth-child(2) > label > span:nth-child(4)": "only_bookmarks_with_notes",
  "#go_to_filters": "filters",
  "#main:not('.dashboard') > ul > li:nth-child(2) > span": "bookmarks",
  "#main:not('.dashboard') > ul > li:nth-child(1) > a": "works",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(1) > span": "my_dashboard",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(2) > a": "subscriptions",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(3) > a": "my_works",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(4) > a": "my_bookmarks",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(5) > a": "my_history",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(6) > a": "my_preferences",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(1) > a": "my_dashboard",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(2) > span": "subscriptions",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(3) > span": "my_works",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(4) > span": "my_bookmarks",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(5) > span": "my_history",
  "#greeting > ul > li:nth-child(1) > ul > li:nth-child(6) > span": "my_preferences",
  "#greeting > ul > li:nth-child(2) > a": "post",
  "#greeting > ul > li:nth-child(2) > ul > li:nth-child(1) > a": "new_work",
  "#greeting > ul > li:nth-child(2) > ul > li:nth-child(2) > a": "import_work",
  "#greeting > ul > li:nth-child(3) > a": "log_out",
  "#header > ul > li:nth-child(1) > a": "ws_fandoms",
  "#header > ul > li:nth-child(1) > ul > li:nth-child(1) > a": "all_fandoms",
  "#medium_5 > a": "anime_and_manga",
  "#medium_3 > a": "books_and_literature",
  "#medium_4 > a": "cartoons_and_comics_and_graphic_novels",
  "#medium_7 > a": "celebrities_and_real_people",
  "#medium_2 > a": "movies",
  "#medium_6 > a": "music_and_bands",
  "#medium_8 > a": "other_media",
  "#medium_30198 > a": "theater",
  "#medium_1 > a": "tv_shows",
  "#medium_476 > a": "video_games",
  "#medium_9971 > a": "uncategorized_fandoms",
  "#header > ul > li:nth-child(2) > a": "browse",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(1) > a": "works",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(2) > a": "bookmarks",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(3) > a": "tags",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(4) > a": "collections",
  "#header > ul > li:nth-child(3) > a": "search",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(1) > a": "works",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(2) > a": "bookmarks",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(3) > a": "tags",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(4) > a": "people",
  "#header > ul > li:nth-child(4) > a": "about",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(1) > a": "about_us",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(2) > a": "news",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(4) > a": "warngling_guidelines",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(5) > a": "donate_or_volunteer",
  "#header > ul > li:nth-child(1) > ul > li:nth-child(1) > span": "all_fandoms",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(1) > span": "works",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(2) > span": "bookmarks",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(3) > span": "tags",
  "#header > ul > li:nth-child(2) > ul > li:nth-child(4) > span": "collections",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(1) > span": "works",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(2) > span": "bookmarks",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(3) > span": "tags",
  "#header > ul > li:nth-child(3) > ul > li:nth-child(4) > span": "people",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(1) > span": "about_us",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(2) > span": "news",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(4) > span": "warngling_guidelines",
  "#header > ul > li:nth-child(4) > ul > li:nth-child(5) > span": "donate_or_volunteer",
  "#dashboard > ul:nth-child(2) > li:nth-child(1) > span": "dashboard",
  "#dashboard > ul:nth-child(2) > li:nth-child(1) > a": "dashboard",
  "#dashboard > ul:nth-child(2) > li:nth-child(2) > a": "profile",
  "#dashboard > ul:nth-child(2) > li:nth-child(2) > span": "profile",
  "#dashboard > ul:nth-child(2) > li:nth-child(3) > a": "my_preferences",
  "#dashboard > ul:nth-child(2) > li:nth-child(3) > span": "my_preferences",
  "#dashboard > ul:nth-child(2) > li:nth-child(4) > a": "skins",
  "#dashboard > ul:nth-child(2) > li:nth-child(4) > span": "skins",
  "#dashboard > ul:nth-child(6) > li:nth-child(2) > a": "statistics",
  "#dashboard > ul:nth-child(6) > li:nth-child(2) > span": "statistics",
  "#dashboard > ul:nth-child(6) > li:nth-child(3) > a": "my_history",
  "#dashboard > ul:nth-child(6) > li:nth-child(3) > span": "my_history",
  "#dashboard > ul:nth-child(6) > li:nth-child(4) > a": "subscriptions",
  "#dashboard > ul:nth-child(6) > li:nth-child(4) > span": "subscriptions",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(1) > a": "post_new",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(2) > a": "edit_works",
  "#main > div.user.home > div.primary.header.module > ul > li:nth-child(4) > a": "invitations",
  "#dashboard > ul:nth-child(4) > li:nth-child(1) > a": "works",
  "#dashboard > ul:nth-child(4) > li:nth-child(1) > span": "works",
  "#dashboard > ul:nth-child(4) > li:nth-child(2) > a": "drafts",
  "#dashboard > ul:nth-child(4) > li:nth-child(2) > span": "drafts",
  "#dashboard > ul:nth-child(4) > li:nth-child(3) > a": "series",
  "#dashboard > ul:nth-child(4) > li:nth-child(3) > span": "series",
  "#dashboard > ul:nth-child(4) > li:nth-child(4) > a": "bookmarks",
  "#dashboard > ul:nth-child(4) > li:nth-child(4) > span": "bookmarks",
  "#dashboard > ul:nth-child(4) > li:nth-child(5) > a": "collections",
  "#dashboard > ul:nth-child(4) > li:nth-child(5) > span": "collections",
  "#dashboard > ul:nth-child(6) > li:nth-child(1) > a": "inbox",
  "#dashboard > ul:nth-child(6) > li:nth-child(1) > span": "inbox",
  "#dashboard > ul:nth-child(8) > li:nth-child(1) > a": "sign_ups",
  "#dashboard > ul:nth-child(8) > li:nth-child(1) > span": "sign_ups",
  "#dashboard > ul:nth-child(8) > li:nth-child(2) > a": "assignments",
  "#dashboard > ul:nth-child(8) > li:nth-child(2) > span": "assignments",
  "#dashboard > ul:nth-child(8) > li:nth-child(3) > a": "claims",
  "#dashboard > ul:nth-child(8) > li:nth-child(3) > span": "claims",
  "#dashboard > ul:nth-child(8) > li:nth-child(4) > a": "related_works",
  "#dashboard > ul:nth-child(8) > li:nth-child(4) > span": "related_works",
  "#dashboard > ul:nth-child(8) > li:nth-child(5) > a": "gifts",
  "#dashboard > ul:nth-child(8) > li:nth-child(5) > span": "gifts",
};
