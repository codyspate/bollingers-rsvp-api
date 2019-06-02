import mongoose from 'mongoose';

export const mealOptionSChema = new mongoose.Schema({
    name: String
});

export default mongoose.model('MealOption', mealOptionSChema);
