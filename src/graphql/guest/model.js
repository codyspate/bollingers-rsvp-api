import mongoose from 'mongoose';
import { LevenshteinDistance } from 'natural';

export const guestSchema = new mongoose.Schema({
    firstName: { type: String, index: true },
    lastName: { type: String, index: true },
    mealChoice: { type: String },
    songRecommendation: String,
    attending: Boolean,
    additional: Boolean
});

const GuestModel = mongoose.model('Guest', guestSchema);

// findByname
// uses natural language distance to search for guests by name
// and sorted by relevance.
// Returns an array of the top results.
GuestModel.findByName = async ({ firstName = '', lastName = '' }) => {
    if (!firstName && !lastName) return [];
    const name = ({ firstName: fName = '', lastName: lName = '' }) =>
        `${fName.trim()} ${lName.trim()}`.toLowerCase();
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
