import fs from 'fs';
import { printSchema } from 'graphql';
import schema from '../graphql/shared/schema';

describe('Schema Generation', () => {
    it('Should write a schema to file', done => {
        const schemaStr = printSchema(schema);
        expect(schemaStr).toBeTruthy();
        fs.writeFileSync('./schema.graphql', schemaStr);
        done();
    });
});
