import mongoose from 'mongoose';

const {
    Schema: { Types }
} = mongoose;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    createdAt: { type: Types.Date }
});

/* eslint-disable func-names */
userSchema.pre('save', function(next) {
    this.createdAt = Date.now();
    next();
});

export default mongoose.model('User', userSchema);
