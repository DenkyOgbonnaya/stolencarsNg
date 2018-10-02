//required modules
let express = require('express');
let handleRequest = require('./controllers/handleRequest');

let app = express(); //fires express up
let port = process.env.PORT || 8080;

//sets the template engine and static files dir
app.set('views', __dirname +'/views' )
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));
handleRequest(app);

app.listen(port, function(){
    console.log(`Server listening on ${port}`);
}); 