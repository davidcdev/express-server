function handleEditError (req, res, next) {
  const { id, description, completed} = req.body;
  const method = req.method;

  if (method === 'POST') {
    if (!description) {
      res.status(400).send('⛔ Missing description');
    } else {
      next();
    };
  };

  if (method === 'PUT') {
    if (!id || !description && !completed) {
      res.status(400).send('⛔ Missing data');
    } else {
      next();
    };
  };
};

function handleMethodError(req, res, next) {
  const method = req.method;
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (validMethods.includes(method)) {
    next();
  } else {
    res.status(400).send('⛔ Invalid method');
  };
};

function handleParamsError(req, res, next) {
  const status = req.url;
  const validParams = ['/completed', '/pending'];

  if (validParams.includes(status)) {
    next();
  } else {
    res.status(400).send('⛔ Invalid params');
  };
};

module.exports = {
  handleEditError,
  handleMethodError,
  handleParamsError
}
