module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
		burger_name: DataTypes.STRING,
        devoured: {type: DataTypes.BOOLEAN, defaultValue: false}
        //id - auto-generated by sequelize
        //date (timestamp) - auto-generated by sequelize
    // }, {
    //     classMethods: {
    //         associate: function(models) {
    //             Burger.belongsTo(models.Customer);
    //         }
    //     }
    });
    return Burger;
}