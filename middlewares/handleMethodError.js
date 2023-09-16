export function handleMethodError (req, res, next) {
  const method = req.method;
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (validMethods.includes(method)) {
    next();
  } else {
    res.status(405).send('⛔ Invalid method');
  };
};
