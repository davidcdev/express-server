import jwt from 'jsonwebtoken';
import 'dotenv/config';

const KEY = process.env.SECRET;

export function JWTValidation (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  };

  try {
    const decodedToken = jwt.verify(token, KEY);

    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  };
};