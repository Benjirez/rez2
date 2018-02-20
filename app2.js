const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// 'mongodb://'+ dbcreds.user +':' + dbcreds.pw + '@ds051913.mlab.com:51913/rezdb'

// Connection URL 
const url = 'mongodb://rez:dbdbdb@ds051913.mlab.com:51913/rezdb';

// Database Name
const dbName = 'rezdb';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});