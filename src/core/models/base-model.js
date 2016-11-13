'use strict';

/**
 * Module dependencies.
 */

const path = require('path');
const _ = require('lodash');
const bookshelf = require(path.resolve('src/core/database'));
const model = bookshelf.Model.prototype;
const uuid = require('node-uuid');

/**
 * `BaseModel`.
 */

class BaseModel {

  /**
   * Extend `Model`.
   */

  extend(properties, options) {
    properties = _.assign({
      hasTimestamps: ['createdAt', 'updatedAt'],
      initialize() {
        this.on('creating', () => {
          // Generate id for new entities.
          this.attributes.id = uuid.v1();
        });

        // Extend initialize method.
        if (options && options.initialize) {
          options.initialize.apply(this);
        }

        // Execute native initialize method for plugins to work.
        model.initialize.apply(this);
      }
    }, properties);

    return bookshelf.model(properties.tableName, properties, options);
  }
}

/**
 * Export `BaseModel`.
 */

module.exports = new BaseModel();
