'use strict';

/**
 * Module dependencies.
 */

const config = require('config');
const Bookshelf = require('bookshelf');
const knex = require('knex');

// Config.
const postgresConfig = config.get('postgres');

// Bookshelf.
const bookshelf = Bookshelf(knex(postgresConfig));

// Model registry plugin.
bookshelf.plugin('registry');

// Virtuals plugin.
bookshelf.plugin('virtuals');

// Log connection.
console.log(`Connecting to Postgres ${postgresConfig.connection.database} on ${config.get('env')} environment`);

/**
 * Export `bookshelf`.
 */

module.exports = bookshelf;
