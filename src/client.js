import * as contenful from "contentful";

const client = contenful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
});

export default client;