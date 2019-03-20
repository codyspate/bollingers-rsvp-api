import { sign, decode } from '../utils/jwt';
import User from './model';

export const createToken = ({ _id, email }) => {
    return sign({ user: { _id, email } }, { expiresIn: '30d' });
};

export const getUserFromToken = token => {
    const { user: { _id } = {} } = decode(token);
    return User.findOne({ _id });
};
