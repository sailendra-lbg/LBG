let connectionPool = require('./sql_conn_models');
let moment = require('moment');

function getListData() {
    return new Promise(async (resolve, reject) => {
        try {
            let connection = await connectionPool.getConnection();
            await connection.query("SELECT `id`, `title`, `describtion`, `create_date`, `update_date`, `owner` FROM strories", function (err, rows) {
                connection.release();
                if (!err) {
                    resolve(rows);
                }
            });
        } catch (Error) {
            console.log("error occured getListModel" + Error);
        }
    })
}

function insertUserData(data) {
    return new Promise(async (resolve, reject) => {
        try {
            let connection = await connectionPool.getConnection();
            await connection.query(`INSERT INTO strories (title, describtion, owner) VALUES ('${data.title}','${data.description}','${data.owner}')`, function (err, rows) {
                connection.release();
                if (!err) {
                    resolve(true);
                } else {
                    console.log(err);
                    resolve(false);
                }
            });
        } catch (Error) {
            console.log("error occured getListModel" + Error);
        }
    })
}

function updateUserData(data,id) {
    return new Promise(async (resolve, reject) => {
        try {
            let connection = await connectionPool.getConnection();
            let updateDate = moment().format('YYYY-MM-DD H:mm:ss');
            console.log(updateDate);
            await connection.query(`update strories set title='${data.title}',describtion='${data.description}',owner='${data.owner}',update_date='${updateDate}' where id=${id}`, function (err, rows) {
                connection.release();
                if (!err) {
                    resolve(true);
                } else {
                    console.log(err);
                    resolve(false);
                }
            });
        } catch (Error) {
            console.log("error occured updateUserData" + Error);
        }
    });
}
function deleteUserData(id) {
    return new Promise(async (resolve, reject) => {
        try {
            let connection = await connectionPool.getConnection();
            console.log(`DELETE FROM strories where id=${id}`)
            await connection.query(`DELETE FROM strories where id=${id}`, function (err, rows) {
                connection.release();
                if (!err) {
                    resolve(true);
                } else {
                    console.log(err);
                    resolve(false);
                }
            });
        } catch (Error) {
            console.log("error occured deleteUserData" + Error);
        }
    });
}


module.exports = {
    getListData,
    insertUserData,
    updateUserData,
    deleteUserData
}
