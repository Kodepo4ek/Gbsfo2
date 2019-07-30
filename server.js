console.log('start PORT: 3 0 0 3');
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
  //Подключение Mongodb

  /// отоброахить таски которые пришли с сервера в таблицу 
  // принять их и рендерить
    const MongoClient = require("mongodb").MongoClient; // npm i mongodb
    const ObjectID = require("mongodb").ObjectID

    const url = "mongodb://localhost:27017/";


    
    const mongoClient = new MongoClient(url, { useNewUrlParser: true });

    let http = require('http');
    let fs = require('fs');
//Считывания формы
var express = require('express');

// var bodyParser= require('body-parser'); // npm i body-parser (библиотека для считывание html информации,считывание формы)
// https://www.npmjs.com/package/body-parser

var app = express();

//  var router = express.Router()

//   var urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.route('/test').get(function (req, res) {
//     console.log(req.body);
//     res.json('wqewqeqwe1231231');
// });

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/', router)


app.set('view engine', 'ejs');
console.log("мы тут1");
// Настраиваем статическую файловую папку для маршрута по умолчанию.
app.use(express.static(__dirname + '/build')); // коренная папка с файлами (html, css, js) 
console.log("мы тут1");
// app.get('/', function(req, res){
//     res.sendFile(__dirname + "/index.html");
//     console.log("мы тут2")
// });

// app.get('/about', function(req, res){
//      res.sendFile(__dirname + "/views/about.ejs");
//     console.log(1);
// });

    //var check = document.name['category'];
   

    const userScheme = new Schema({
        userID: String,
        name: String,
        password: String,
        mail: String,
        время: String
    });

    const UserTable = new Schema({
        userID: String,
        description:String,
        done:Boolean
    });
        

        
      

    const Task = mongoose.model("Task", UserTable);
    const User = mongoose.model("User", userScheme);
    mongoose.connect("mongodb://localhost:27017/WebOKA", { useNewUrlParser: true });


//                            Регистрация пользователя

console.log("мы тут1");
    app.post('/api/register', function(req, res){
      console.log("мы тут3")
      
    
    
        if (!req.body) return res.sendStatus(400);
        const body = (req.body);
        
        var userName =  (req.body.name);
        var userPassword = (req.body.password);
        var userMail = (req.body.email);
        var data = Date();
        var user = {name: userName, password: userPassword, mail: userMail, время: data}; // создания переменной в которой инфа
        console.log(user); //вывод на экран инфу
         

            
        
        var userForBd = new User(user);
        userForBd.save().then(function(response, error) {
            
            var task = "Выполнить задачу";
            var ID = response._id;
        var goals = {userID:ID, description: task, done: false};
        console.log(goals);
        var tableForBd = new Task(goals);
        tableForBd.save().then(function() {
        });
            // console.log(result);
            
           
            console.log('Все ок!');
        });
        User.findOne(user, function(error, result){
                
                
            if(result === null){
              // console.log("No");
               res.json({
                   name: null
               });
            } else{ res.json({
                userID: result._id,
                name:result.name
                
            })
           
        }
        
            
        })
        
        

                       
        });           

                                // Вход в систему
           app.post('/api/login',(req, res) =>{
            
            if (!req.body) return res.sendStatus(400);
            const body = (req.body);// то что придет к нам на серв 
            // var ID = user._id;
            var userName =  (req.body.name);//name
            var userPassword = (req.body.password);// pass
            var user = {name: userName, password: userPassword};//user 
            
            var task = "Выполнить задачу";
            var ID = res._id;
            var goals = {userID:ID, description: task, done: false};
            
            
            
            // console.log(user);
            // res.json()
            // var userChek = {
            //     name: app.get(user.userName),
            //     Pass: app.get(user.userPassword)
            // };
            User.findOne(user,(error, result) =>{
                
                if(result === null){
                   console.log("No");
                   res.json({
                       userID: null
                   });
                } else{ res.json({
                    userID: result._id,
                   
                })
                }   
            })   
        });                                 
                                            //input

                                app.post('/api/task/input',(req,res) =>{
                                    console.log(req);
                                    console.log('Start');
                                    var txtID = req.body.t._id;
                                    var txt = req.body.txt;
                                    var textDescription  = {description:txt};
                                    Task.findOneAndUpdate({_id:txtID},
                                        textDescription).then((result) =>{
                                            console.log(result);
                                            if(result === null ){
                                                res.json([]);
                                            }else{
                                                //передает значение в html 
                                                res.json("Ok");
                                            }
                                        });
                                });



                 // Change
        app.post('/api/task/checkbox',(req,res) =>{
            console.log(req.body._id);
            console.log('Start');
            var doneID = req.body._id;
            var query = {done:true};
            // req.WebOKA._id = req.task._id;
            Task.findOneAndUpdate({_id:doneID}, 
                 query).then((result) => {
                     console.log(result);
                 
                 if(result === null ){
                    res.jsone([]);
                }else{
                    //записать в базу данных done =true
                    res.json('ok');
                    
                }
            });
                })

                app.post('/api/task/newItem',(req,res) =>{
                    
                    console.log(req);
                    console.log('Start');
            var ID = req.body.b.userID;
            var task = req.body.b.description;
        var goals = {userID:ID, description: task, done: false};
        console.log(goals);
        var tableForBd = new Task(goals);
        tableForBd.save().then((result)=> {
            if(result === null ){
                res.jsone([]);
            }else{
                res.json('ok');
            }
        });
                                

                    })
            // Task.findOneAndUpdate({_id:doneID, query, task) (err, doc)=>{
            //     if(!err) {
            //         Task.save((err) =>{
            //             if(!err) {
            //                 done:true;
            //                 console.log("Готово");
            //             }
            //             else {
            //                 console.log("Погнали");
            //             }
            //         });
            //     }
            // };
            
            
      
       


  app.get('/api/task/:userID',function(req,res){
    console.log(req.params.userID);
    var userIdToFind = req.params.userID;//переменная в которое засовуется пользователь
    // console.log(userIdToFind);
    Task.find({userID: userIdToFind },(err,docs)  =>{//все {} с данным userID 
        // console.log(docs);
        if(docs === null){
        //    console.log("No");
           res.json([]);
        } else{
            res.json(docs)// передача на хостинг 
//         console.log(result);
//         console.log(result.userID);

   }
})
})

// app.post('/api/del',function(req,res){
    
//     console.log(res);
//     var userIdToRemove = res._id;
//     console.log(userIdToRemove)
//     // var goals = {userID:ID};
//     // console.log(goals);
//     Task.find({_id: userIdToRemove},(err,docs)  =>{
//         console.log(docs);
//         if(docs === null){
//            console.log("No");
//            res.json([]);
//         } else{
//             res.json(docs)
// //         console.log(result);
// //         console.log(result.userID);

//    }
// })
// })



                                        ///Удаление {} с db 

        app.delete('/api/task',(req,res)=>{
            console.log(req);
            var taskIdToRemove = req.body._id;
        //    console.log(userIdToRemove);
              Task.deleteOne({_id: taskIdToRemove}).then((result) => {
                  
                  res.json('ok');
              });
            });
        

           
          
           
app.listen(3003); 

     
