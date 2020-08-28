const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deal'
    }]
}, {
    timestamps: true,
    usePushEach: true
})

let Favorites = mongoose.model('favorite', favoriteSchema);

module.exports = Favorites;