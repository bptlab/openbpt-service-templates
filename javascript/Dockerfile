FROM node:20-alpine AS base

WORKDIR /usr/src/app
COPY package*.json ./
COPY src ./src
COPY lib ./lib
RUN npm install

# Testing image
FROM base AS testing

ENV NODE_ENV=development
COPY test ./test
COPY .env.development ./
COPY jest.config.js ./

ENTRYPOINT [ "npm", "test" ]

# Linting image
FROM base AS linting

ENV NODE_ENV=development
COPY .env.development ./
COPY eslint.config.mjs ./

ENTRYPOINT [ "npm", "run", "lint" ]

# Development image
FROM base AS development

ENV NODE_ENV=development
COPY nodemon.json ./
COPY .env.development ./

ENTRYPOINT [ "npm", "run", "dev" ]

# Production image
# Requires environment variables to run
FROM base AS production

ENV NODE_ENV=production
EXPOSE $PORT

ENTRYPOINT [ "node", "start" ]
