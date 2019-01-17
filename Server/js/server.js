var express = require("express")
var Sequelize = require("sequelize")
var router = express.Router()


var sequelize = new Sequelize('project', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})

sequelize.authenticate().then(function () {
    console.log('Success')
})

var Employees = sequelize.define('employees', {

    id_employee: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    department_role: Sequelize.STRING,
    project: Sequelize.STRING,
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
})

router.post('/addEmployee', (req, res) => {
    console.log(req.body.id_project);
    Employees.create({
        name: req.body.name,
        email: req.body.email,
        department_role: req.body.department_role,
        project: req.body.project,
        created_at: new Date(),
        updated_at: new Date()
    }).then((createdObject) => {
        res.status(201).send(createdObject);
    })
});

router.put('/updateEmployee', (req, res) => {
    Employees.update(
        {
            name: req.body.name,
            email: req.body.email,
            department_role: req.body.department_role,
            project: req.body.project,
            updated_at: new Date()
        },
        { where: { id_employee: req.body.id_employee } }
    )
        .then(result =>
            res.send(result)
        )
        .catch(err =>
            res.send(err)
        )

});

router.delete('/removeEmployee/:id_employee', (req, res) => {
    Employees.destroy({
        where: {
            id_employee: req.params.id_employee
        }
    }).then(deletedElement => {

        res.sendStatus('ok')

    }, function (err) {
        res.send(err);
    });
});

router.get('/employees', (req, res) => {
    Employees.findAll().then(function (employeesArray) {
        res.status(200).send(employeesArray)
    })
})


module.exports = router;
