'use strict';

/**
 * Variant.js controller
 *
 * @description: A set of functions called "actions" for managing `Variant`.
 */

module.exports = {

  /**
   * Retrieve variant records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.variant.search(ctx.query);
    } else {
      return strapi.services.variant.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a variant record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.variant.fetch(ctx.params);
  },

  /**
   * Count variant records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.variant.count(ctx.query);
  },

  /**
   * Create a/an variant record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.variant.add(ctx.request.body);
  },

  /**
   * Update a/an variant record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.variant.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an variant record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.variant.remove(ctx.params);
  }
};
