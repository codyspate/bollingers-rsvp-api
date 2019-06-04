import { mergeSchemas } from 'graphql-tools';
import Mongo from './utils/mongo';
import UserSchema from './user/schema';
import SharedSchema from './shared/schema';
import InvitationSchema from './invitation/schema';
import GuestSchema from './guest/schema';
import MealSchema from './meal-option/schema';

Mongo.connect();

export default mergeSchemas({
    schemas: [
        SharedSchema,
        UserSchema,
        GuestSchema,
        InvitationSchema,
        MealSchema
    ]
});
