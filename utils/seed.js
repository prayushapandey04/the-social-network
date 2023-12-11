const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { thoughtData, userData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection established!');

    const checkThoughts = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (checkThoughts.length) {
        await Thought.collection.drop();
    }

    const checkUser = await connection.db.listCollections({ name: 'users' }).toArray();
    if (checkUser.length) {
        await User.collection.drop();
    }

    await User.insertMany(userData);

    console.table(userData);
    console.info('Seeding is done~');
    connection.close();
})