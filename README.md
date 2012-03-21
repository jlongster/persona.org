# Lugosi

## Installation instructions

Clone the repository

Install brew https://github.com/mxcl/homebrew

> brew install redis

> redis-server (location of this will vary on your system)

> curl http://npmjs.org/install.sh | sh

> cd lugosi

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