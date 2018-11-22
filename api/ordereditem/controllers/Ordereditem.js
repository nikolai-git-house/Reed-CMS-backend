'use strict';

/**
 * Ordereditem.js controller
 *
 * @description: A set of functions called "actions" for managing `Ordereditem`.
 */

module.exports = {

  /**
   * Retrieve ordereditem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.ordereditem.search(ctx.query);
    } else {
      return strapi.services.ordereditem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a ordereditem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.ordereditem.fetch(ctx.params);
  },

  /**
   * Count ordereditem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ordereditem.count(ctx.query);
  },

  /**
   * Create a/an ordereditem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ordereditem.add(ctx.request.body);
  },

  /**
   * Update a/an ordereditem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ordereditem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ordereditem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ordereditem.remove(ctx.params);
  }
};
