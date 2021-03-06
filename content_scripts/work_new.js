/** This is the content script for translating the Post New Work Page. */
function translate_post_new_work() {
  // list of selctors to translate
  let selectors = [
    "label[for='work_rating_string']",
    "label[for='co-authors-options-show']",
    "label[for='work_comment_permissions_disable_anon']",
    "label[for='series-options-show']",
    "label[for='work_freeform_autocomplete']",
    "fieldset.preface > legend",
    "option[value='Explicit']",
    "fieldset.work.text > legend",
    "label[for='work_fandom_autocomplete']",
    "label[for='work_parent_attributes_language_id']",
    "label[for='work_parent_attributes_author']",
    "label[for='work_archive_warning_strings_17']",
    "label[for='work_series_attributes_title']",
    "dd.fandom.required > p.footnote",
    "label[for='backdate-options-show']",
    "dt.category > label",
    "label[for='work_recipients_autocomplete']",
    "fieldset.privacy > legend",
    "label[for='work_work_skin_id']",
    "label[for='work_character_autocomplete']",
    "label[for='work_category_string_23']",
    "span.rtf-notes",
    "dt.permissions.comments",
    "fieldset.create > legend",
    "label[for='work_wip_length']",
    "label[for='work_parent_attributes_translation']",
    "label[for='published_at']",
    "label[for='work_category_string_21']",
    "p#parent-attributes-url-field-description",
    "a.rtf-link",
    "fieldset#associations > legend",
    "label[for='work_archive_warning_strings_18']",
    "label[for='work_moderated_commenting_enabled']",
    "label[for='work_relationship_autocomplete']",
    "fieldset.work.meta > legend",
    "label[for='parent-options-show']",
    "label[for='work_archive_warning_strings_14']",
    "label[for='work_restricted']",
    "option[value='General Audiences']",
    "label[for='work_archive_warning_strings_16']",
    "label[for='work_chapter_attributes_title']",
    "label[for='work_comment_permissions_enable_all']",
    "label[for='work_series_attributes_id']",
    "label[for='work_category_string_116']",
    "label[for='work_category_string_24']",
    "label[for='work_archive_warning_strings_20']",
    "fieldset.work.meta > p.note",
    "option[value='Mature']",
    "label[for='chapters-options-show']",
    "label[for='work_category_string_22']",
    "dd.skin > p.actions > a",
    "label[for='work_comment_permissions_disable_all']",
    "label[for='work_parent_attributes_title']",
    "label[for='end-notes-options-show']",
    "label[for='work_language_id']",
    "dt.warning.required > label",
    "option[value='Not Rated']",
    "p.required.notice",
    "label[for='front-notes-options-show']",
    "dd.skin > select#work_work_skin_id > option[value='229']",
    "label[for='work_summary']",
    "label[for='work_archive_warning_strings_19']",
    "label[for='work_category_string_2246']",
    "option[value='Teen And Up Audiences']",
    "label[for='work_title']",
    "label[for='work_collection_names_autocomplete']",
    "fieldset.preface > dl > dt.notes",
  ];

  let tooltip_selectors = [
    "fieldset.create > ul > li:nth-child(1) > input",
    "fieldset.create > ul > li:nth-child(2) > input",
    "fieldset.create > ul > li:nth-child(3) > input"
  ];

  /** hovers don't work for select options; must include size of select for
      jquery to handle hover events. */
  let select_selectors = {
    "#work_rating_string": 5,
  };

  translate(selectors, tooltip_selectors, select_selectors);
}

translate_post_new_work();
