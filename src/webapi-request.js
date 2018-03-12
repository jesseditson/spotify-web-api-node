'use strict';

var Request = require('./base-request');

var DEFAULT_HOST = 'api.spotify.com',
    DEFAULT_PORT = 443,
    DEFAULT_SCHEME = 'https',
    DEFAULT_PATH = '';

module.exports.builder = function(accessToken, apiURL) {
  return Request.builder()
      .withHost(apiURL.hostname || DEFAULT_HOST)
      .withPort(apiURL.port || DEFAULT_PORT)
      .withScheme(apiURL.protocol ? apiURL.protocol.replace(/:$/, '') : DEFAULT_SCHEME)
      .withBasePath(apiURL.path || DEFAULT_PATH)
      .withAuth(accessToken);
};
