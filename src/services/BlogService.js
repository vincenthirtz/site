import * as contentful from 'contentful';

const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN
})

const getPosts = () => {
   return client.getEntries().then(res => {
        return res.items;
    });
};


export default {
    getPosts
};
