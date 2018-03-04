#! /bin/bash
SITE="/var/www/ournetworks.ca/html"

# this is fictional
sshpass -p $PASSWORD scp examplefile $USER@$SERVER:$SITE
