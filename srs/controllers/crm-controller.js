import mongoose from "mongoose";
import Contact from '../models/crm-model'

export const addNewContact = async (req, res) => {

    try {
        let newContact = new Contact(req.body)

        const contact = await newContact.save()
        return res.status(200).json({ contact })

    } catch (error) {
        return res.status(500).send(error)
    }
}

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()

        return res.status(200).json({ contacts })
    } catch (error) {
        return res.status(500).send(error)

    }
}

export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId)
        return res.status(200).json({ contact })

    } catch (error) {
        return res.status(500).send(error)

    }
}