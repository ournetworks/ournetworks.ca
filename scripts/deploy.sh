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

# This is done to skip the fingerprint check on new connection
# - Skip the host fingerprint check
# - Don't save the fingerprint to known_hosts
scp -r \
  -i $IDENTITY_FILE \
  -o StrictHostKeyChecking=no \
  -o UserKnownHostsFile=/dev/null \
  _site/. $USER@$SERVER:$SITE_DIR
