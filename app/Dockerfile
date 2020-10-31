FROM node
COPY . /usr/src
WORKDIR /usr/src
RUN npm install
RUN ls /usr/src
ENV PORT=8080
EXPOSE 8080
CMD yarn start