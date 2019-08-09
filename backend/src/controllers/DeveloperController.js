const axios = require('axios')
const developerModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { username } = req.body
        const userExists = await developerModel.findOne({ user: username })
        if (userExists) {
            return res.json(userExists)
        }
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar } = response.data
        const dev = await developerModel.create({
            name,
            user: username,
            bio,
            avatar
        })
        return res.json(dev)
    }
}