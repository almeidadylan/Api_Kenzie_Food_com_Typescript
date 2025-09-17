FROM node:18

RUN apt-get update

ENV PORT - 3000

EXPOSE 3000

WORKDIR /app

COPY ["package.json", "package-lock.json"] .

USER node

RUN npm install 

COPY . .

CMD ["npm", "start"]