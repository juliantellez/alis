#!/bin/bash
set -e

docker build -t "$APP" --build-arg PLENTIFIC_ENV="$PLENTIFIC_ENV" --build-arg NODE_ENV="$NODE_ENV" --build-arg AUTH_FINDAPRO_TOKEN="$AUTH_FINDAPRO_TOKEN" --file Dockerfile .
