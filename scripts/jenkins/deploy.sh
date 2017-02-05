#!/bin/bash
set -e

SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

NODE_ENV="production"
AUTH_FINDAPRO_TOKEN="$AUTH_FINDAPRO_TOKEN"

. ${SCRIPTS_DIR}/_init.sh

echo "
RUN npm run build
RUN npm run deploy

EXPOSE 3050
CMD npm run forever
" >> Dockerfile

. ${SCRIPTS_DIR}/_docker.build.sh
. ${SCRIPTS_DIR}/_docker.push.sh
. ${SCRIPTS_DIR}/_deis.base.sh
