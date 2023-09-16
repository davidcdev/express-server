export function handleParamsError(req, res, next) {
  const status = req.query;

  if (status) {
    next();
  } else {
    res.status(400).send('⛔ Invalid params');
  };
};
