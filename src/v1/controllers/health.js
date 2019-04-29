
/**
 * Health Check
 * @param {string} req - The incoming request.
 * @param {string} res - The outcoming response.
 */
function getCheck(req, res) {
  const io = req.app.get('socketio'); // eslint-disable-line no-unused-vars
  res.status(200).send('OK');
}

module.exports = {getCheck};
