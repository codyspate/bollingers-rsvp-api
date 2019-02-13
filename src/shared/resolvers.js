export default {
    Query: {
        hello: (_, { name = 'World' }) => {
            const obj = {
                message: `Hello ${name} via GraphQL`,
                num: 10,
                messages: ['Hello', name, 'via', 'GraphQL']
            };
            return { ...obj, obj };
        }
    }
};
