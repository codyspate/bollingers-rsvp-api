import User from './model';
import { sign, decode } from '../utils/jwt';

export default {
    signUp: async (_, { username, password, email }) => {
        const token = sign(password);
        await User.create({
            username,
            password: token,
            email
        });
        return sign({ token }, { expiresIn: '30d' });
    },
    signIn: async (_, { username, password }) => {
        let user;
        try {
            user = await User.find().or([{ username }, { email: username }]);
        } catch (e) {
            throw e;
        }
        if (!user) throw new Error('User not found');
        const token = sign(password);
        if (user.password !== token)
            throw new Error('Invalid username or password');
        return sign({ token }, { exipresIn: '60d' });
    },
    signInWithToken: async (_, { username, token }) => {
        const user = await User.find({ username });
        if (!user) throw new Error('User not found');
        const { token: decodedToken, exp } = decode(token);
        if (exp < Date.now()) throw new Error('Token is expired');
        if (user.password !== decodedToken) throw new Error('Invalid token');
        return sign({ token: decodedToken }, { exipresIn: '60d' });
    }
};
