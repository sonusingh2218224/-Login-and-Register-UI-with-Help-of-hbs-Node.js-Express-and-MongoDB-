function logger(req, res, next) {
  console.log(
    `METHOD ${req.method} HOST=${req.hostname} URL=${req.baseUrl}`,

    next()
  );
}
export default logger;
