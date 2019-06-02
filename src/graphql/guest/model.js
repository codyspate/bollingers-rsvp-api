import mongoose from 'mongoose';
import { LevenshteinDistance } from 'natural';

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

const GuestModel = mongoose.model('Guest', guestSchema);

// findByname
// uses natural language distance to search for guests by name
// and sorted by relevance.
// Returns an array of the top results.
GuestModel.findByName = async ({ firstName = '', lastName = '' }) => {
    const name = ({ firstName = '', lastName = '' }) =>
        `${firstName.trim()} ${lastName.trim()}`.toLowerCase();
    const searchName = name({ firstName, lastName });
    const distance = guest => LevenshteinDistance(searchName, name(guest));

    // Find guests by name, allowing partial
    // used to get initial set of data to sort through
    const foundGuests = await GuestModel.find({
        $or: [
            {
                firstName: RegExp(firstName, 'gi')
            },
            {
                lastName: RegExp(lastName, 'gi')
            }
        ]
    }).lean();

    // Determine likeness to search name and sort
    const sortedGuests = foundGuests
        .map(guest => ({ ...guest, dist: distance(guest) }))
        .sort((a, b) => a.dist - b.dist);

    return sortedGuests.splice(0, 3);
};

export default GuestModel;
