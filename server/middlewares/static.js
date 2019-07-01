const publicPath = require("path").join(__dirname, "..", "..", "client", "public");
const publicPath2 = require("path").join(__dirname, "..", "..", "build");
const applyMiddleware = app => app.use(require("express").static(publicPath2));

module.exports = applyMiddleware;
