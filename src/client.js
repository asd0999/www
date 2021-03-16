import * as contenful from "contentful";
import env from "react-dotenv";

const client = contenful.createClient({
    space: env.REACT_APP_SPACE_ID,
    accessToken: env.REACT_APP_ACCESS_TOKEN,
});

export default client;