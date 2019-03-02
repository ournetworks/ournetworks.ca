#! /bin/bash
#
# Deploy the built Jekyll website to production.
#
# Usage:
#
#     ./deploy.sh [ <ssh user> [ <ssh identity file> [ <server host> ]]]
#
#
USER="${1:-travis}"
IDENTITY_FILE="${2:-scripts/id_rsa}"
SERVER="${3:-ournetworks.ca}"
SITE_DIR="/var/www/html"

# This is done to skip the fingerprint check on new connection
# - Skip the host fingerprint check
# - Don't save the fingerprint to known_hosts
scp -r \
  -i $IDENTITY_FILE \
  -o StrictHostKeyChecking=no \
  -o UserKnownHostsFile=/dev/null \
  _site/* $USER@$SERVER:$SITE_DIR
