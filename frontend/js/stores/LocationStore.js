var alt = require('../alt');

var LocationActions = require('../actions/LocationActions');


class LocationStore {
  constructor() {
    this.bindActions(LocationActions);
    this.location = '';
  }

  locationChanged(newLoc) {
    this.location = newLoc;
  }
}

module.exports = alt.createStore(LocationStore);
