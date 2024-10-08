FROM node:22-alpine

WORKDIR /usr/local/frontend

COPY . .
RUN yarn install && yarn build

CMD [ "yarn", "workspace", "frontend", "dev" ]