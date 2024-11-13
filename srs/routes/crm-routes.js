import { addNewContact } from "../controllers/crm-controller";

const routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            // middleware
            console.log(`Request from ${req.originalUrl}. Method:  ${req.method}`);
            res.send('GET request sucessful ! ')

        }
        )

        .post(addNewContact)

    app.route('/contact/:contactId')
        .put((req, res) => {
            res.send('PUT contact')
        })

        .delete((req, res) => {
            res.send('DELETE contact')
        })

}

export default routes;