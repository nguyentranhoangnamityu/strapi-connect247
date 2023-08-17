FROM node:16-alpine

WORKDIR /app
COPY . /app

RUN yarn install &&  \
    yarn build && \
    yarn cache clean  && \
    rm -rf /app/.git* /app/docker-compose-dev.yml /app/Dockerfile /app/.env.example  && \
    chgrp -R 0 /app/ && chmod -R g=u /app/ && chown -R 1000:0 /app/

USER 1000
VOLUME ["/app/"]

EXPOSE 1337
# Running the app
CMD "yarn" "start"

