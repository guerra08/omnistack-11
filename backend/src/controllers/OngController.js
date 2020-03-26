const con = require('../database/connections')
const crypto = require('crypto')

module.exports = {
    async create(req, res) {

        const { name, email, whatsapp, city, uf } = req.body

        const id = crypto.randomBytes(4).toString('HEX')

        await con('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return res.json({ id })
    },

    async index(req, res) {
        const orgs = await con('ongs').select('*')

        return res.json(orgs)
    },

    async delete(req,res){
        const { id } = req.body

        const op = await con('ongs').where('id', '=', id).del()

        return res.json(op)
    }
}