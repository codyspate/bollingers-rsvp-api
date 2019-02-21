import jwt from 'jsonwebtoken';

export const sign = (payload, options) =>
    jwt.sign(payload, process.env.SECRET, options);
export const decode = payload => jwt.decode(payload, process.env.SECRET);
