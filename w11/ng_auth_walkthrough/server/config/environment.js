var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Token Slinger',
  SAFE_TITLE: 'token-slinger',
  SECRET_KEY: 'notsosecretanymoreisityounaughtything'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
