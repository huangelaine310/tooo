console.log('post new js running!');
const i18n = chrome.i18n;

/** HEADER SECTION */
// p.required.notice
$('p.required.notice').html(i18n.getMessage("required"));


/** TAGS SECTION (fieldset.work-meta) */
// header
$('fieldset.work.meta > legend').html(i18n.getMessage("tags"));
$('fieldset.work.meta > p.note').html(i18n.getMessage("tags_heading_note"));

// rating
$("label[for='work_rating_string']").html(i18n.getMessage("rating"));
$("option[value='Not Rated']").html(i18n.getMessage("rating_not_rated"));
$("option[value='General Audiences']").html(i18n.getMessage("rating_general"));
$("option[value='Teen And Up Audiences']").html(i18n.getMessage("rating_teen"));
$("option[value='Mature']").html(i18n.getMessage("rating_mature"));
$("option[value='Explicit']").html(i18n.getMessage("rating_explicit"));
