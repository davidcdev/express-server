export function handleEditError (req, res, next) {
  const id = req.params;

  const { description, completed } = req.body;
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

  if (method === 'DELETE') {
    if (!id) {
      res.status(400).send('⛔ Missing id');
    } else {
      next();
    };
  };
};
