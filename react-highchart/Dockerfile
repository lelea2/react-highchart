FROM node:10.0 as build
COPY . /src
WORKDIR /src
RUN yarn install --pure-lockfile
RUN npm run build

EXPOSE 8080
ENV PORT=8080

USER node

CMD ["/usr/local/bin/npm", "run", "start"]
