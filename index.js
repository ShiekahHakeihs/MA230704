//load express for our backend

const express = require('express')


const app = express();
const mongoose = require('mongoose')
// create an app variable that stores results of the express function that initialize our express application and wllows us to access different methods that will make backend creation easy
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')

mongoose.connect('mongodb+srv://admin:202110435@sandbox.0qk2xgg.mongodb.net/sample_database?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('now connected to MongoDB Atlas.'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoutes)

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${ process.env.PORT || 4000}`)
});

