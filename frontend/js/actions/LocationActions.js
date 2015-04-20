var alt = require('../alt');

var BlogiApi = require('../util/BlogiApi');


class LocationActions {
  constructor() {
    this.generateActions(
      'locationChanged'
    );
  }
}

module.exports = alt.createActions(LocationActions);
