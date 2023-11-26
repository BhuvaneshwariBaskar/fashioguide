module.export = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pincode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone_no: {
            type: DataTypes.STRING,
            validate: {
                min: 13, max: 13
            },
        },
        gender:{
        type: DataTypes.STRING,
        allowNull: true
        },
        order: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
        wishlist: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
        history: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
        recent_search_word: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
        bag: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: []
        },
       

    }
    )
}