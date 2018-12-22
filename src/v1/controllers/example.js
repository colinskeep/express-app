const exampleLog = require('../components/example.js');
/**
 * Function to execute when endpoint reached
 * @param {string} req - incoming request
 * @param {string} res - outgoing response
 */
async function postExample(req, res) {
  try {
    const name = req.body.name;
    const email = req.body.email;
    if (name) {
      exampleLog.log(name, email);
      res.status(200).json({data: true});
    }
  } catch (err) {
    res.status(400);
  }
}

module.exports = {
  postExample,
};
