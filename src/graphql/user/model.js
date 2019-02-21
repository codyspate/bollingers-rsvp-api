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

userSchema.pre('save', next => {
    this.createdAt = Date.now();
    next();
});

export default mongoose.model('User', userSchema);
