const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    GuildID: String, 
    warns: Number, default: 0,
    
    
  
    
});

module.exports = mongoose.model('userInfractions', guildSchema, 'usersInfractions');