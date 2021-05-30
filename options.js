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
