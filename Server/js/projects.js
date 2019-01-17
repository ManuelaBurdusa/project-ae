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

var Project = sequelize.define('projects', {

    id_project: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    project_code: Sequelize.STRING,
    project_name: Sequelize.STRING,
    duration: Sequelize.STRING,
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

router.post('/newProject', (req, res) => {
    Project.create({
        project_code: req.body.project_code,
        project_name: req.body.project_name,
        duration: req.body.duration,
        created_at: new Date(),
        updated_at: new Date()
    }).then((createdObject) => {
        res.status(201).send(createdObject);
    })
})

router.put('/updateProject', (req, res) => {
    Project.update(
        {
            project_code: req.body.project_code,
            project_name: req.body.project_name,
            duration: req.body.duration,
            updated_at: new Date()
        },
        { where: { id_project: req.body.id_project } }
    )
        .then(result =>
            res.send(result)
        )
        .catch(err =>
            res.send(err)
        )
})

router.get('/projects', (req, res) => {
    Project.findAll().then(function (usersObj) {
        res.status(200).send(usersObj);
    }).catch((errorMsg) => {
        res.send(errorMsg);
    })
});

router.get('/getProjectById/:id_project', (req, res) => {
    Project.findById(req.params.id_project).then(project => {
        res.send(project);
    })
})

router.delete('/removeProject/:id_project', (req, res) => {
    Project.destroy({
        where: {
            id_project: req.params.id_project
        }
    }).then(deletedElement => {

        res.sendStatus('ok')

    }, function (err) {
        res.send(err);
    });
});

module.exports = router;
