### builder
FROM node:lts-alpine as builder
LABEL org.opencontainers.image.source https://github.com/cgduncan7/lucyhelder.nl

WORKDIR /app

COPY src src
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY yarn.lock yarn.lock

RUN yarn install
RUN yarn build

### app
FROM node:lts-alpine as app
LABEL org.opencontainers.image.source https://github.com/cgduncan7/lucyhelder.nl

ENV NODE_ENV=production

WORKDIR /app
RUN chown node:node /app

USER node

COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/yarn.lock yarn.lock
COPY --chown=node:node ./private/credentials.json private/credentials.json

RUN cat private/credentials
RUN yarn install
CMD node dist/server.js