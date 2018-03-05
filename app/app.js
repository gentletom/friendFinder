var express =require('express')

var app = express();

app.set('port', process.env.PORT || 8080);

require('./routing/htmlroutes')(app);
require('./routing/apiRoutes')(app);

app.listen(app.get('port'), function() {
	console.log('Listening on port', app.get('port'));
});

