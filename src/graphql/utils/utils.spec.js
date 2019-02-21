import { sign, decode } from './jwt';

describe('webtoken', () => {
    process.env.SECRET = 'asd123qwe456zxc';
    it('Should encode', () => {
        const secret = 'mysecretstring';
        const encoded = sign(secret, { expiresIn: '60d' });
        const decoded = decode(encoded);
        expect(secret).toEqual(decoded);
    });
});
