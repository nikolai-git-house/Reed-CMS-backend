'use strict';

/**
 * Resource.js controller
 *
 * @description: A set of functions called "actions" for managing `Resource`.
 */

module.exports = {

  /**
   * Retrieve resource records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.resource.search(ctx.query);
    } else {
      return strapi.services.resource.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a resource record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.resource.fetch(ctx.params);
  },

  /**
   * Count resource records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.resource.count(ctx.query);
  },

  /**
   * Create a/an resource record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.resource.add(ctx.request.body);
  },

  /**
   * Update a/an resource record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.resource.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an resource record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.resource.remove(ctx.params);
  }
};
