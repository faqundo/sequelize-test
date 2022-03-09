const db = require('../database/models');
const sequelize = db.sequelize;

let controller  = {
    'list': (req,res) => {
        db.Movie.findAll().then(movies =>{
            res.render('moviesList',{movies})
        })
    } 
}