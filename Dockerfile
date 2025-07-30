# Dockerfile for Node.js server
FROM node:18
WORKDIR /app
COPY server/ .
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
