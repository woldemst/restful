import express from "express";
import routes from './srs/routes/crm-routes'
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// body pareser setup 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

routes(app)

const uri = 'mongodb+srv://admin:WeinertW1480.@apitutorcluster.zb42w.mongodb.net/?retryWrites=true&w=majority&appName=apiTutorCluster';
mongoose
    .connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });




