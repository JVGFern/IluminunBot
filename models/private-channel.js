const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    Category: {
        type: String
    },
    GuildID: String
});

 module.exports = mongoose.model('Categorys', CategorySchema);