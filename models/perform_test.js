module.exports = function (sequelize, Sequelize) {

    var TableName = sequelize.define('perform_tests', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        accepted_test_id: {
            type: Sequelize.STRING(255), 
        },  
        test_id: {
            type: Sequelize.STRING(255), 
        },
        test_type: {
            type: Sequelize.STRING(255), 
        },

        data: {
            type: Sequelize.TEXT("long")
        }, 
        value_1: {
            type: Sequelize.TEXT("long")
        }, 
        value_2: {
            type: Sequelize.TEXT("long")
        },
        para_value: {
            type: Sequelize.TEXT("long")
        },
        status_approve: {
            type: Sequelize.STRING(255), 
        } ,   
        status_partial: {
            type: Sequelize.STRING(255), 
        } ,   
        status_full: {
            type: Sequelize.STRING(255), 
        },    
        status: {
            type: Sequelize.STRING(255), 
        }    
 

    }, {
        underscored: true,

        freezeTableName: true
    });

    return TableName;

}