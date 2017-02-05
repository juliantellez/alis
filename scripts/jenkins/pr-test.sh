#!/bin/bash
set -e

SCRIPTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

NODE_ENV="development"
PLENTIFIC_ENV="test"

. ${SCRIPTS_DIR}/_init.sh

echo "
RUN npm run flow
RUN npm run lint
RUN npm run test
" >> Dockerfile

. ${SCRIPTS_DIR}/_docker.build.sh
