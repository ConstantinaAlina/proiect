var express = require("express");
var Sequelize = require("sequelize");
var nodeadmin = require("nodeadmin");
var bodyParser=require("body-parser");


var sequelize = new Sequelize('Carti', 'root', '', {
    dialect:'mysql',
    host:'localhost'
});

sequelize.authenticate().then(function(){
    console.log('Success');
});


var Users = sequelize.define('users', {
    id: {type:Sequelize.INTEGER,primaryKey:true},
    nume: Sequelize.STRING,
    prenume: Sequelize.STRING,
    email: Sequelize.STRING,

},{
    timestamps:false
})
var Genres = sequelize.define('genres', {
    id_gen: {type:Sequelize.INTEGER,primaryKey:true},
    denumire: Sequelize.STRING

},
{
     timestamps:false
})
var Librarys = sequelize.define('librarys', {
    id_biblioteca: {type:Sequelize.INTEGER,primaryKey:true},
    descriere: Sequelize.STRING,
     id:Sequelize.INTEGER //id users

},
{
     timestamps:false
})



var Books = sequelize.define('books', {
    id_carte: {type:Sequelize.INTEGER,primaryKey:true},
    id_gen:Sequelize.INTEGER,
    id_biblioteca:Sequelize.INTEGER,
    titlu: Sequelize.STRING,
    autor: Sequelize.STRING,
    nr_pagini: Sequelize.INTEGER,
    editura: Sequelize.STRING
},
{
     timestamps:false
})


var app = express();
app.use('/nodeamin', nodeadmin(app));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


Books.belongsTo(Librarys,{foreignKey:"id_biblioteca",targetKey:"id_biblioteca"});

Books.belongsTo(Genres,{foreignKey:"id_gen",targetKey:"id_gen"});

Users.belongsTo(Librarys,{foreignKey:"id",targetKey:"id"});

//users
//read
app.get('/users', function(request, response) {
    Users.findAll().then(function(users){
        response.status(200).send(users)
    })
})

app.get('/users/:id', function(request, response) {
    Users.findOne({where: {id:request.params.id}}).then(function(id) {
        if(id) {
            response.status(200).send(id)
        } else {
            response.status(404).send()
        }
    })
})

//create
app.post('/users', function(request, response) {
    Users.create(request.body).then(function(id) {
        response.status(201).send(id)
    })
})

//update
app.put('/users/:id', function(request, response) {
    Users.findById(request.params.id).then(function(id) {
        if(id) {
            id.update(request.body).then(function(id){
                response.status(201).send(id)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.delete('/users/:id', function(request, response) {
    Users.findById(request.params.id).then(function(id) {
        if(id) {
            id.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


//genres
//read
app.get('/genres', function(request, response) {
    Genres.findAll().then(function(genres){
        response.status(200).send(genres)
    })
})


app.get('/genres/:id_gen', function(request, response) {
    Genres.findOne({where: {id_gen:request.params.id_gen}}).then(function(id_gen) {
        if(id_gen) {
            response.status(200).send(id_gen)
        } else {
            response.status(404).send()
        }
    })
})

//create
app.post('/genres', function(request, response) {
    Genres.create(request.body).then(function(id_gen) {
        response.status(201).send(id_gen)
    })
})

//update
app.put('/genres/:id_gen', function(request, response) {
    Genres.findById(request.params.id_gen).then(function(id_gen) {
        if(id_gen) {
            id_gen.update(request.body).then(function(id_gen){
                response.status(201).send(id_gen)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.delete('/genres/:id_gen', function(request, response) {
    Genres.findById(request.params.id_gen).then(function(id_gen) {
        if(id_gen) {
            id_gen.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})



//books
//read
app.get('/books', function(request, response) {
    Books.findAll().then(function(books){
        response.status(200).send(books)
    })
})


app.get('/books/:id_carte', function(request, response) {
    Books.findOne({where: {id_carte:request.params.id_carte}}).then(function(id_carte) {
        if(id_carte) {
            response.status(200).send(id_carte)
        } else {
            response.status(404).send()
        }
    })
})

//create
app.post('/books', function(request, response) {
    Books.create(request.body).then(function(id_carte) {
        response.status(201).send(id_carte)
    })
})

//update
app.put('/books/:id_carte', function(request, response) {
    Books.findById(request.params.id_carte).then(function(id_carte) {
        if(id_carte) {
            id_carte.update(request.body).then(function(id_carte){
                response.status(201).send(id_carte)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.delete('/books/:id_carte', function(request, response) {
    Books.findById(request.params.id_carte).then(function(id_carte) {
        if(id_carte) {
            id_carte.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})



//librarys
//read
app.get('/librarys', function(request, response) {
    Librarys.findAll().then(function(librarys){
        response.status(200).send(librarys)
    })
})


app.get('/librarys/:id_biblioteca', function(request, response) {
    Librarys.findOne({where: {id_biblioteca:request.params.id_biblioteca}}).then(function(id_biblioteca) {
        if(id_biblioteca) {
            response.status(200).send(id_biblioteca)
        } else {
            response.status(404).send()
        }
    })
})

//create
app.post('/librarys', function(request, response) {
    Librarys.create(request.body).then(function(id_biblioteca) {
        response.status(201).send(id_biblioteca)
    })
})

//update
app.put('/librarys/:id_biblioteca', function(request, response) {
    Librarys.findById(request.params.id_biblioteca).then(function(id_biblioteca) {
        if(id_biblioteca) {
            id_biblioteca.update(request.body).then(function(id_biblioteca){
                response.status(201).send(id_biblioteca)
            }).catch(function(error) {
                response.status(200).send(error)
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})


app.delete('/library/:id_biblioteca', function(request, response) {
    Librarys.findById(request.params.id_biblioteca).then(function(id_biblioteca) {
        if(id_biblioteca) {
            id_biblioteca.destroy().then(function(){
                response.status(204).send()
            })
        } else {
            response.status(404).send('Not found')
        }
    })
})



app.listen(process.env.PORT);