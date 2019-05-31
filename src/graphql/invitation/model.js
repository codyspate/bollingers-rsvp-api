import mongoose from 'mongoose';

const {
    Schema: { Types }
} = mongoose;

const invitationSchema = new mongoose.Schema(
    {
        guests: [{ type: Types.ObjectId, ref: 'Guest' }],
        additionalGuests: { type: Types.Number, default: 0 }
    },
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

export default mongoose.model('Invitation', invitationSchema);
