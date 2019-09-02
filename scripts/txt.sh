#! /bin/bash
#
# Update TXT record for a domain managed by Digital Ocean.
#
# Usage:
#
#     export DO_TOKEN=<do_token>
#     ./txt.sh <domain> <name> <value>
#
# Example:
#
#     ./txt.sh ournetworks.ca ipfs-website "dnslink=/ipfs/QmbfXYeieYgXZs7KdomE5wHQwoLRCPkYywwWpo1C9gfC3f"
#
#
DOMAIN=$1
NAME=$2
VALUE=$3

# List existing records with $NAME under $DOMAIN
RESP_LIST=$(curl -sS -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $DO_TOKEN" "https://api.digitalocean.com/v2/domains/$DOMAIN/records")

# Delete existing records with $NAME
DELETES=$(echo $RESP_LIST | jq -c '.domain_records[] | select(.type == "TXT" and .name == "'"$NAME"'") | .id')
for id in $DELETES; do
  curl -sS -X DELETE -H "Content-Type: application/json" -H "Authorization: Bearer $DO_TOKEN" "https://api.digitalocean.com/v2/domains/$DOMAIN/records/$id" 
  echo "Deleted TXT record with id=$id on Digital Ocean"
done

# Create new record with $NAME and $VALUE
RESP_CREATE=$(curl -sS -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $DO_TOKEN" -d '{"type":"TXT","name":"'"$NAME"'","data":"'"$VALUE"'","priority":null,"port":null,"ttl":1800,"weight":null,"flags":null,"tag":null}' "https://api.digitalocean.com/v2/domains/$DOMAIN/records")
echo "Created TXT record $NAME.$DOMAIN -> $VALUE on Digital Ocean"
