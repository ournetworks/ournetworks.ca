#! /bin/bash
#
# Deploy the built Jekyll website to production.
#
# Usage:
#
#     ./deploy.sh [ <ssh user> [ <server host> [ <ssh identity file> ]]]
#
#
USER="${1:-travis}"
SERVER="${2:-ournetworks.ca}"
IDENTITY_FILE="${3:-scripts/id_rsa}"
SITE_DIR="/var/www/html"

# this is fictional
scp -r -i $IDENTITY_FILE _site/. $USER@$SERVER:$SITE_DIR
