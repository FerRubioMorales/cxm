/**
 * Created by fer on 15/03/2015.
 */
var fs = require('fs');
module.exports = function(req, res, next) {
    console.log(fs.existsSync(sails.config.asset.js_dir_path + '/' + req.options.controller + '/js/' + req.options.action + '.js'));
    res.locals.scripts = [];
    res.locals.styles = [];
    if(fs.existsSync(sails.config.asset.js_dir_path + '/' + req.options.controller + '/js/common.js'))
        res.locals.scripts.push(sails.config.asset.js_public_path+ '/' + req.options.controller + '/js/common.js');
    if(fs.existsSync(sails.config.asset.css_dir_path + '/' + req.options.controller + '/css/common.css'))
        res.locals.styles.push(sails.config.asset.css_public_path+ '/' + req.options.controller + '/css/common.css');
    if(fs.existsSync(sails.config.asset.js_dir_path + '/' + req.options.controller + '/js/' + req.options.action + '.js'))
        res.locals.scripts.push(sails.config.asset.js_public_path+ '/' + req.options.controller + '/js/' + req.options.action + '.js');
    if(fs.existsSync(sails.config.asset.css_dir_path + '/' + req.options.controller + '/css/' + req.options.action + '.css'))
        res.locals.styles.push(sails.config.asset.css_public_path+ '/' + req.options.controller + '/css/' + req.options.action + '.css');
    next();
};