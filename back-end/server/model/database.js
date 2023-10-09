
const MongoClient = require('mongodb').MongoClient;

module.exports = function(app) {

	MongoClient.connect(app.get('DB_URL'), {useNewUrlParser: true, useUnifiedTopology: true}, function(e, client) {
		if (e){
			console.log(e);
		}	else{
			const db = client.db(app.get('DB_NAME'));
		// initialize all of us database collections 
		//modify the acc
      require('./accounts').init(db);
			log('mongo :: connected to database :: "'+app.get('DB_NAME')+'"');
		}
	});
}
