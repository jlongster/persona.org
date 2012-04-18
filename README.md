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

> touch locale/templates/LC_MESSAGES/messages.pot

> export PATH=$PATH:node_modules/i18n-abide/bin

> ./bin/extract_po.sh

> ./bin/update_languages.sh

## Merge and compile

> merge_po.sh ./locale

> compile_mo.sh locale/

(Note: These instructions are from https://github.com/mozilla/i18n-abide/blob/master/README.md)

> node app.js

## Run the Tests

> make test