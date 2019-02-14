import mongoose from 'mongoose';

const {
    Schema: { Types }
} = mongoose;

const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mealChoice: { type: Types.ObjectId, ref: 'MealOption' }
});

export default mongoose.model('Guest', guestSchema);
