const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    GuildID: {
        type: String,
        required: true, 
    },
    ChannelID: {
        type: String,
        required: true, 
    },
});

module.exports = mongoose.model('welcomechannel', welcomeSchema)


