const express = require('express');
const dotenv = require('dotenv');

//Load config
dotenv.config({ path: './config.env' });

const app = express();

//Profile routes
//app.use - промежуточный обработчик
app.use('/api/v1/profile', require('./routes/profile'))

//Handle production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is listening in ${process.env.NODE_ENV} mode on port ${port}`);
});