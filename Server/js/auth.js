var express = require("express")
var Sequelize = require("sequelize")
var router = express.Router()


var sequelize = new Sequelize('project', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(function () {
    console.log('Success')
});

var User = sequelize.define('users', {

    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_name: Sequelize.STRING,
    user_email: Sequelize.STRING,
    user_password: Sequelize.STRING,
    role: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: true
    }
});

router.post('/newUser', (req, res) => {
    User.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        role: req.body.role,
        user_password: 'admin',
        phone_number: req.body.phone_number,
        created_at: new Date(),
        updated_at: new Date()
    }).then((createdObject) => {
        res.status(201).send(createdObject);
    })
})

router.put('/updateUser', (req, res) => {
    User.update(
        {
            user_name: req.body.user_name,
            user_email: req.body.user_email,
            role: req.body.role,
            phone_number: req.body.phone_number,
            updated_at: new Date()
        },
        { where: { id_user: req.body.id_user } }
    )
        .then(result =>
            res.send(result)
        )
        .catch(err =>
            res.send(err)
        )
})

router.get('/getUsersArray', (req, res) => {
    User.findAll().then(function (usersObj) {
        res.status(200).send(usersObj);
    }).catch((errorMsg) => {
        res.send(errorMsg);
    })
});

router.delete('/deleteUser/:id_user', (req, res) => {
    User.destroy({
        where: {
            id_user: req.params.id_user
        }
    }).then(deletedElement => {

        res.sendStatus('ok')

    }, function (err) {
        res.send(err);
    });
})

router.post('/login', (req, res) => {

    User.findOne({ where: { 'user_email': req.body.user_email } }).then(user => {
        console.log(user.dataValues)
        if (user == null) {
            res.json({
                user: null,
                message: 'Incorrect email'
            });
        } else {

            if (req.body.user_password != user.dataValues.user_password) {
                res.json({
                    user: null,
                    message: 'Incorrect password'
                });
            } else {

                res.json({ user: user.dataValues, message: '' });
            }
        }
    }).catch((err) => {
        res.send(err)
    })
})
module.exports = router;
