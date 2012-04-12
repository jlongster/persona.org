# Persona.org

## Installation instructions

Clone the repository

> curl http://npmjs.org/install.sh | sh

Install node by using brew or through the website http://nodejs.org/#download

> cd persona.org

> cp settings.js-dist settings.js

> npm install

## L10n extraction/merge

> mkdir -p locale/templates/LC_MESSAGES

> cp node_modules/i18n-abide/bin/extract_po.sh bin/

> export PATH=$PATH:node_modules/i18n-abide/bin

> ./bin/extract_po.sh

> ./bin/update_languages.sh

## One-time l10n hack

Temporary fix:

> cd locale/templates/LC_MESSAGES

> change `"Content-Type: text/plain; charset=CHARSET\n"` to `"Content-Type: text/plain; charset=UTF-8\n"` and save.

## Merge and compile

> merge_po.sh ./locale

> compile_mo.sh locale/

(Note: These instructions are from https://github.com/mozilla/i18n-abide/blob/master/README.md)

> node app.js

## Run the Tests

> make test