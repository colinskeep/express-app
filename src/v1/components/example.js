const exampleModel = require('../models/example.js');

/**
 * @param {string} name - user name
 * @param {string} email - user email
*/
function log(name, email) {
  try {
    exampleModel({
      name,
      email,
    }).save();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`logger log. ${err}`);
  }
}

module.exports = {
  log,
};
