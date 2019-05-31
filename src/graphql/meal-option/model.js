import mongoose from 'mongoose';

const MealOption = new mongoose.Schema({
    name: String
});

export default mongoose.model('MealOption', MealOption);
