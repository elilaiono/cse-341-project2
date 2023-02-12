const validator = require('../helpers/validate');

const savePlayer = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    expLvl: 'required|string',
    favCourse: 'required|string',
    favDisc: 'required|string',
    throwStyle: 'required|string',
    longestShot: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveContact: savePlayer
};