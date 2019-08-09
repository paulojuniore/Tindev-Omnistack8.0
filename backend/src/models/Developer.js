const { Schema, model } = require('mongoose')

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'DeveloperSchema'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'DeveloperSchema'
    }]
}, {
    timestamps: true
})

module.exports = model('Dev', DeveloperSchema)