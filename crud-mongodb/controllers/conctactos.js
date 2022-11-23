const { findByIdAndUpdate } = require("../models/Contacto")
const Contacto = require("../models/Contacto")
const readContacto = async (_, res) => {
    try {
        const contactos = await Contacto.find({})
        if (contactos.length === 0) {
            return res.render("index", { ok: false })
        }
        return res.render("index", { ok: true, contactos: contactos })
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })
    }
}
const createContacto = async (req, res) => {
    console.log(req.body)
    try {
        const conctactoNUevo = new Contacto(req.body)
        await conctactoNUevo.save()
        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })

    }
}
const deleteContacto =async(req,res)=>{
    const id = req.params.id;
    try {
        
        await Contacto.findByIdAndDelete(id);
        return res.redirect("/")
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, msg: "erroe del servidor" })

    }
}
const updateConctacto= async(req,res)=>{
        const id = req.body.edit_id
        try {
            await Contacto.findByIdAndUpdate(id, req.body);
            return res.redirect("/")
        } catch (error) {
            console.log(error);
            return res.json({ ok: false, msg: "erroe del servidor" })
        }
}
module.exports = {
    readContacto,
    createContacto,
    updateConctacto,
    deleteContacto
}