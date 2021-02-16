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
    Text: {
        type: String,
        required: false, 
    },

});

module.exports = mongoose.model('welcomechannel', welcomeSchema)


