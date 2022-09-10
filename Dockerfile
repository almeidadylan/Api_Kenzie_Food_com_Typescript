FROM node:18

RUN apt-get update

ENV PORT - 3000

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "yarn.lock"] .

USER node

RUN yarn 

COPY . .

CMD ["yarn", "start"]