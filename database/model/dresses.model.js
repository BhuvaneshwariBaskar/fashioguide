model.export = (sequelize, DataType) => {
    const Dresses = sequelize.define("users", {
        dress_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        dress_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adding_date: {
            type: DataTypes.STRING,
            allowNull: false
        }


    })
    // Dresses.sync({ force: true }).then(() => console.log('DRESSES MODEL CREATED')).catch((err) => console.log('ERROR ' + err))

    return Dresses;
}