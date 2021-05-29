console.log('post new js running!');
const i18n = chrome.i18n;
const DEFAULT_LOCALE = 'zh_TW';

// get lang locale
let lang = i18n.getUILanguage();
console.log(lang);
// change - charcater to _
lang = lang.replace('-', '_');


/** parses description field in messages.json to get jquery selector. **/
function parseDescription(description) {
  return description.substr(0, description.indexOf('|'));
}

/** iterates through messages.json objects and replaces with translation. */
function iterateMessagesToTranslate(json) {
  for (let key in json) {
    const value = json[key];
    const description = value['description'];
    const translated_str = value['message'];
    const selector = parseDescription(description);
    $(selector).contents().filter(function() {return this.nodeType == 3;})
    .first().replaceWith(translated_str);
  }
}

/** fetches the correct messaes.json according to language */
function fetchJson(tries=0) {
  console.log('fetch json');
  if (tries > 1) {
    console.log('Error: stopping script to avoid stack overflow.');
    return;
  }
  let url = chrome.runtime.getURL('_locales/'+lang+'/messages.json');
  console.log(url);
  fetch(url)
    .then((response) => {
      response.json().then((json) => {iterateMessagesToTranslate(json);});
    })
    .catch((error) => {
      console.log(error);
      lang = DEFAULT_LOCALE;
      fetchJson(tries+1);
    });
}

fetchJson();

// /** HEADER SECTION */
// // p.required.notice
// $('p.required.notice').html(i18n.getMessage("required"));
//
//
// /** TAGS SECTION (fieldset.work.meta) */
// // header
// $('fieldset.work.meta > legend').html(i18n.getMessage("tags"));
// $('fieldset.work.meta > p.note').html(i18n.getMessage("tags_heading_note"));
//
// // rating
// $("label[for='work_rating_string']").html(i18n.getMessage("rating"));
// $("option[value='Not Rated']").html(i18n.getMessage("rating_not_rated"));
// $("option[value='General Audiences']").html(i18n.getMessage("rating_general"));
// $("option[value='Teen And Up Audiences']").html(i18n.getMessage("rating_teen"));
// $("option[value='Mature']").html(i18n.getMessage("rating_mature"));
// $("option[value='Explicit']").html(i18n.getMessage("rating_explicit"));
//
// //archive warnings
