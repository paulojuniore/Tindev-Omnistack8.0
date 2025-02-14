const axios = require('axios')
const DeveloperModel = require('../models/Developer')

module.exports = {
    async index(req, res) {
        const { user } = req.headers
        const loggedDev = await DeveloperModel.findById(user)
        const users = await DeveloperModel.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ],
        })

        return res.json(users)
    },

    async store(req, res) {
        const { username } = req.body
        const userExists = await DeveloperModel.findOne({ user: username })
        if (userExists) {
            return res.json(userExists)
        }
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar } = response.data
        const dev = await DeveloperModel.create({
            name,
            user: username,
            bio,
            avatar
        })
        return res.json(dev)
    }
}