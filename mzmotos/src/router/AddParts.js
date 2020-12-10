const { app } = require('electron');
const dbConnection = require('../database/dbPartConnection.js');

module.exports = app => {
    const connection = dbConnection();
    app.get('/', (req, res) => {
        var sql = 'SELECT * FROM news';
        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            }
            return result;
        });
    });
}