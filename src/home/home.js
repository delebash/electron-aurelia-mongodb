import {inject} from 'aurelia-framework';
import MongoService from './mongoService'

@inject(MongoService)
export class Home {
    constructor(db) {
      this.db = db;
      this.title = "Home";
      this.connectionResults = "";
    }

    activate() {
      this.db.testConnection()
        .then((promise) => this.connectionResults = promise)
        .catch((err) => this.connectionResults = err);
    }
}
