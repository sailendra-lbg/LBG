let connectionPool = require('../models/user_model');
class userController {

    async fetchAllUserData(req, res) {
        try {
            let responseData = await connectionPool.getListData();
            res.json(responseData);
        } catch (error) {
            console.log("fetchAllUserData controller error" + error);
        }
    }

    async insertUserData(req, res) {
        try {
            if (!!req.body.title && !!req.body.description) {
                let responseData = await connectionPool.insertUserData(req.body);
                if (responseData) {
                    res.status(200).send({ "message": "User Data successfully inserted" });
                } else {
                    res.status(500).send({ "message": "Oops some thing went wrong. Please try later" });
                }
            } else {
                res.status(500).send({ "message": "Please enter valid data" });
            }
        } catch (error) {
            console.log("insertUserData controller error" + error);
        }
    }

    async updateUserData(req, res) {
        try {
            let id = req.params.id ? req.params.id : '';
            if (id) {
                let responseData = await connectionPool.updateUserData(req.body, id);
                if (responseData) {
                    res.status(200).send({ "message": "User Data successfully updated" });
                } else {
                    res.status(500).send({ "message": "Oops some thing went wrong. Please try later" });
                }
            } else {
                res.status(500).send({ "message": "Invalid request" });
            }
        } catch (error) {
            console.log("updateUserData controller error" + error);
        }
    }

    async deleteUserData(req, res) {
        try {
            let id = req.params.id ? req.params.id : '';
            let responseData = await connectionPool.deleteUserData(id);
            if (responseData) {
                res.status(200).send({ "message": "User Data successfully deleted" });
            } else {
                res.status(500).send({ "message": "Oops some thing went wrong. Please try later" });
            }
        } catch (error) {
            console.log("deleteUserData controller error" + error);
        }
    }
}

module.exports = userController;