#!/bin/bash

# Create po files for all supported languages

for l in en_US de es db_LB; do
mkdir -p locale/${l}/LC_MESSAGES/
msginit --input=./locale/templates/LC_MESSAGES/messages.pot \
      --output-file=./locale/${l}/LC_MESSAGES/messages.po \
      -l ${l}
done