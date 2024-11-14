import { addNewContact, deleteContactById, getAllContacts, getContactById, updateContact } from "../controllers/crm-controller";

const routes = (app) => {
    app.route('/contacts')
        .get((req, res, next) => {
            console.log(`Request from ${req.originalUrl}. Method:  ${req.method}`);
            next()
        }, getAllContacts)

        .post(addNewContact)


    app.route('/contact/:contactId')
        .get(getContactById)
        .put(updateContact)

        .delete(deleteContactById)

}

export default routes;