const Sequelize = require('sequelize');

class SequelizeConfig{

    static getConnection(){
        return new Sequelize('BD-PaginaPersonal','root','mysql',{
            host:'127.0.0.1',
            dialect: 'mysql',
            pool:{
                max: 5,
                min: 0,
                idle: 10000
            }
        });
    }
}


module.exports= SequelizeConfig;