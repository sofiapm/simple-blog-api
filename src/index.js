'use strict';

/**
 * Module dependencies.
 */

const koa = require('koa');

/**
 * Initialize the app.
 */

module.exports = () => {
  const app = koa();

  return app;
};
