// replace options.html with translated strings
const id_to_name_for_translation = {
  "translate_method_label": "settings_method",
  "translate_method_direct": "settings_method_direct",
  "translate_method_tooltip": "settings_method_tooltip",
  "translate_method_box": "settings_method_box",
};
for (const [k,v] of Object.entries(id_to_name_for_translation)) {
  document.getElementById(k).textContent = chrome.i18n.getMessage(v);
}

// initialize the options form with user's settings.
chrome.storage.sync.get({
  translate_method: 'translate_method_direct', // default translate method
}, (data) => {
  document.getElementById('translate_method').value = data.translate_method;
});

// method change
document.getElementById('translate_method').addEventListener('change', (event) => {
  let translate_method = document.getElementById('translate_method').value;
  chrome.storage.sync.set({
    translate_method: translate_method,
  });
  console.log(translate_method);
});
