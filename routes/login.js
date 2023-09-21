import { Router } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { users } from '../data/users.js';

export const KEY = process.env.SECRET;

export const login = Router();

login.post('/', (req, res) => {
  const { email, password } = req.body;

  const currentUser = users.find(user => user.email === email);

  if (!email || !currentUser || password !== currentUser.password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  } else {
    const payload = {
      name: currentUser.name,
      email: currentUser.email
    }

    const token = jwt.sign(payload, KEY);
    res.status(200).json({token});
  };
});
