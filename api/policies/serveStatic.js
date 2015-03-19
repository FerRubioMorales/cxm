/**
 * Created by fer on 15/03/2015.
 */
var fs = require('fs');
module.exports = function(req, res, next) {
    res.locals.scripts = [];
    res.locals.styles = [];

    if(fs.existsSync(sails.config.asset.js_dir_path + '/' + req.options.controller + '/common.js'))
        res.locals.scripts.push(sails.config.asset.js_public_path+ '/' + req.options.controller + '/common.js');
    if(fs.existsSync(sails.config.asset.css_dir_path + '/' + req.options.controller + '/common.css'))
        res.locals.styles.push(sails.config.asset.css_public_path+ '/' + req.options.controller + '/common.css');
    if(fs.existsSync(sails.config.asset.js_dir_path + '/' + req.options.controller + '/' + req.options.action + '.js'))
        res.locals.scripts.push(sails.config.asset.js_public_path+ '/' + req.options.controller + '/' + req.options.action + '.js');
    if(fs.existsSync(sails.config.asset.css_dir_path + '/' + req.options.controller + '/' + req.options.action + '.css'))
        res.locals.styles.push(sails.config.asset.css_public_path+ '/' + req.options.controller + '/' + req.options.action + '.css');
    next();
};