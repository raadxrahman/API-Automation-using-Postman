const newman = require('newman');
require('dotenv').config();

newman.run({
    // collection: `https://api.postman.com/collections/42655650-beb2c6cb-7106-4fc1-8f90-03e62174e380?access_key=${process.env.access_key}`,
    collection: require('./dmoney-rest-api-collection/A2-dmoney-REST-api.postman_collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter:{
        htmlextra:{
            export: './report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});