module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '1234',
    DB: 'Book_Directory',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}