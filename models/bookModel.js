module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define("book", {
      
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        author: {
            type: DataTypes.STRING
        },

        category: {
            type: DataTypes.STRING
        },



        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
       

    })

    return Book

}