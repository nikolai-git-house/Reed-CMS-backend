'use strict';

/**
 * Productinbox.js controller
 *
 * @description: A set of functions called "actions" for managing `Productinbox`.
 */

module.exports = {

  /**
   * Retrieve productinbox records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productinbox.search(ctx.query);
    } else {
      return strapi.services.productinbox.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productinbox record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.productinbox.fetch(ctx.params);
  },

  /**
   * Count productinbox records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productinbox.count(ctx.query);
  },

  /**
   * Create a/an productinbox record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productinbox.add(ctx.request.body);
  },

  /**
   * Update a/an productinbox record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productinbox.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productinbox record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productinbox.remove(ctx.params);
  }
};
