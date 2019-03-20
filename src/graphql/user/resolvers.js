import User from './model';
import { sign } from '../utils/jwt';
import { createToken } from './utils';

export default {
    Query: {
        health: () => true
    },
    Mutation: {
        signUp: async (_, { firstname, lastname, password, email }) => {
            const token = sign(password);
            const user = await User.create({
                firstname,
                lastname,
                password: token,
                email,
                username: email
            });
            const authToken = createToken(user);
            user.password = undefined;
            return {
                token: authToken,
                user
            };
        },
        signIn: async (_, { email, password }, { user: usr }) => {
            try {
                const user = await (() => {
                    if (usr) return usr;
                    try {
                        return User.findOne({ email });
                    } catch (e) {
                        throw e;
                    }
                })();
                if (!user) throw new Error('User not found');
                if (!usr) {
                    const token = sign(password);
                    if (user.password !== token)
                        throw new Error('Invalid username or password');
                }
                const authToken = createToken(user);
                user.password = undefined;
                return {
                    token: authToken,
                    user
                };
            } catch (e) {
                throw e;
            }
        }
    }
};
