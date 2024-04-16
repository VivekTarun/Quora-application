const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/ping', (req, res) => {
    return res.json({messge : 'Quora application is alive'});
})

app.listen(3000, async () => {
    console.log(`server started at port 3000`)
})