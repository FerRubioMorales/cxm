/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var CategoriesController = {
    create: function(req, res){
        if(req.method=="POST"){
            Categories.create({
                title: req.param("title"),
                description: req.param("description"),
                urlseo: req.param("urlseo"),
                navigation: (req.param("navigation")=="on") ? true : false,
                parent: 0
            }).exec(function(err, model){
                if (err) {
                    res.send('Error:Sorry!Something went Wrong');
                }else {
                    res.redirect( 'categories/list/?id='+model.id);
                }

            });
        }else{
            Categories.find().exec(function(err, data){
                res.view({
                    categories: data
                });

            });
        }
    },

    list: function(req, res){
        console.log(req.options.controller);
        console.log(req.options.action);
        var active = req.param("id") || 0;
        Categories.find().exec(function(err, data){
            res.view({
                active: active,
                categories: data
            })
        })
    }
};

module.exports = CategoriesController;

