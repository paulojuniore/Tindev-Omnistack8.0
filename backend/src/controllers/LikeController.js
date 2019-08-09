const DeveloperModel = require('../models/Developer')

module.exports = {
    async store(req, res) {
        const { user } = req.headers
        const { devId } = req.params

        const loggedDev = await DeveloperModel.findById(user)
        const targetDev = await DeveloperModel.findById(devId)

        if (!targetDev) {
            return res.status(400).json({ erro: 'Dev not exists!' })
        }
        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('DEU MATCH')
        }

        loggedDev.likes.push(targetDev._id)

        await loggedDev.save()

        console.log("dev curtido: " + req.params.devId)
        console.log("quem curtiu: " + req.headers.user)
        return res.json(loggedDev)
    }
}