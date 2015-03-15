/**
 * Post_content.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        post: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        title: {
            type: 'string',
            required: true
        },
        secondTitle: 'string',
        description: 'string',
        content: 'string',
        media: {
                collection: 'post_media',
                via: 'owner'
        }
    }
};

