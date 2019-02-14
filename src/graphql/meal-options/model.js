import mongoose from 'mongoose';

const mealOptionSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('MealOption', mealOptionSchema);
