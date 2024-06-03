import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  let token = req.header('Authorization');

  if (token && token.startsWith('Bearer ')) {
    token = token.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};
