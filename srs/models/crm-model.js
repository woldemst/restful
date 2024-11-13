import mongoose from "mongoose";

export const ContactsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    }, 
    phone: {
        type: Number,
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Contact', ContactsSchema);
