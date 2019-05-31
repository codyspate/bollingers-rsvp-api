import { mergeSchemas } from 'graphql-tools';
import UserSchema from './user/schema';
import SharedSchema from './shared/schema';
import InvitationSchema from './invitation/schema';
import GuestSchema from './guest/schema';
import Mongo from './utils/mongo';

Mongo.connect();

export default mergeSchemas({
    schemas: [SharedSchema, UserSchema, GuestSchema, InvitationSchema]
});