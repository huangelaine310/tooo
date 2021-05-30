# TOOO (TO3)
Translators of Our Own


## About
This is a chrome extension for translating the webpages of [AO3](https://archiveofourown.org/).


## Supported Languages
Currently, only zh_TW (Traditional Chinese) is supported.

If you'd like to help support another language, please feel free to contribute!


## Contribution
### Workflow
#### Found a problem? Open an issue!
If you've found a problem, you can open an issue.

#### Want to help? Solve an issue!
If you'd like to help solve an issue, please fork the repository, open a pull request, and submit it when you're done making changes. After that, our admins will review your PR and get back to you.


### Common Contributions
#### Add support for another language
The `_locales` file is where all translated strings should be stored. To learn more about how the files should be structured, please read the [official instructions](https://developer.chrome.com/docs/extensions/reference/i18n/).

In particular, please make sure that when you add a new language, the locale code is listed in [Chrome's supported locales list](https://developer.chrome.com/docs/webstore/i18n/#localeTable).

`_locales/zh_TW/messages.json` is the master file you should refer to as template when creating a new one. Make sure you use all the same names, and put your translated string as value for the `message` property. You do not need to add the `description` field. It is only there as a reference.


#### Add translation support for another AO3 webpage
##### Step 1. Create a new content script
All content scripts should go under the `content_scripts` folder. Use snake_case to name your file.

Follow the same format as other existing content scripts.
- At the top of the file, add a comment on which page this script translates.
- Declare the list of selectors this page should translate. We use jQuery selectors.
- Use functions in `util.js` to pass in the list of selectors for translation.

##### Step 2. Add the new selectors to `messages.json`
If there are new strings that need to be translated, you must add them to a `messages.json` file. Since we're using zh_TW as the default language, try to always update the `zh_TW/messages.json` file first.

##### Step 3. Add the new selectors mapping to `selector_to_name.js`
After you have defined your new strings in `messages.json`, you need to add the `selector` to `name` mapping in `selector_to_name.js` file. The `name` is the key you defined in `messages.json`.

##### Step 4. Update the manifest.json file
Add your new content script in `manifest.json`. Please refer to previos examples, and remember to list the `js` files in the same order. Double check to make sure your `matches` values only work on the intended page(s).


## Code Structure
- `_locales`: folder for storing translations
- `content_scripts`: folder for all content scripts.
  - In general, each page should have a separate content script.
- `html_formats`: Notes for html formats. Only used as reference.
- `manifest.json`: The config file for chrome extensions.
- `selector_to_name.js`: The master mapping file that maps selectors to message names.
- `util.js`: Global functions used by various content scripts, where the translation logic actually happens.


## Updates
- May 29, 2021 - Supports translation of Post New Work and Post New Chapter pages to zh_TW.
