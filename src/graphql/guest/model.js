import mongoose from 'mongoose';

const {
    Schema: { Types }
} = mongoose;

export const guestSchema = new mongoose.Schema({
    firstName: { type: String, index: true },
    lastName: { type: String, index: true },
    mealChoice: { type: Types.ObjectId, ref: 'MealOption' },
    songRecommendation: String,
    attending: Boolean
});

export default mongoose.model('Guest', guestSchema);
