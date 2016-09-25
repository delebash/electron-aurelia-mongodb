export default class MongoService {
  constructor() {
    this.MongoClient = require('mongodb').MongoClient;
  }

  testConnection() {
    return new Promise((resolve, reject) => {
      this.MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
        if(!err) {
          resolve("We are connected");
        } else {
          reject(err);
        }
      });
    });
  }
}
