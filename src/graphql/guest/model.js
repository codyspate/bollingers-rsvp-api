import mongoose from 'mongoose';

const {
    Schema: { Types }
} = mongoose;

export const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mealChoice: { type: Types.ObjectId, ref: 'MealOption' },
    songRecommendation: String,
    status: { type: String, default: '' }
});

export default mongoose.model('Guest', guestSchema);
