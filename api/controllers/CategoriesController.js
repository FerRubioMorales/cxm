/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports =  {
    create: function(req, res){
        console.log("accept:", req.get('Accept'));
        if(req.method=="POST"){
            Categories.create({
                title: req.param("title"),
                description: req.param("description"),
                urlseo: req.param("urlseo"),
                navigation: (req.param("navigation")=="on") ? true : false,
                parent: 0
            }, function(err, mod) {
                if(err){
                    res.status(400);
                    res.json(err);
                }
                else
                    res.status(200).json('ok');
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
        var active = req.param("id") || 0;
        Categories.find().exec(function(err, data){
            res.view({
                active: active,
                categories: data
            })
        })
    }
};