import React from "react";
import Row from "./table1";
import Modal from './modal2';
import Start from "./Start";
import { request } from "http";

// Удаление по _id отправлять запрос на удаление по _id и отправлять запрос на изменение 
// description 


const testObj = {
    number: 1,
    description: 'Приехать домой',
    done: false,
}



const arr = [{
    name:"Вася",
    year: 1990,
    favireAnimal: "кот"
},
{
    name: "Петя",
    year: 1990,
    favireAnimal: "собака"
}]

  


class Menu extends React.Component {
    
    
                state = {
            result: [],
            
                        
 }

 readInputs(txt,t){ 
     console.log("start")
     setTimeout(()=>{ 
      
       const input = '/api/task/input';
fetch(input, {
   method: 'POST',
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({txt,t})
   }).then(res => {
       console.log("Start2");
   if(res.status !==200) {
           console.log("No");
           return;
}
       res.json().then((result) => {
          
          console.log(result)
})
})

      }, 3000);
   }
   del(idToRemove){// удаление []
//сначала удаление происходит на сервере затем новые масив приходит в html и обновляется
            const deletes = '/api/task';
            fetch(deletes, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                 body: JSON.stringify({_id:idToRemove})
                }).then(res => { 
              if(res.status !== 200) {
                return 
              }
              res.json().then((result) => {
              const filtered = this.state.result.filter((item) => item._id !== idToRemove);
              this.setState({result: filtered});
             // console.log(body)
               //  this.setState({result: body});
              });
    
        }
            
 )}
 checkboxClick(checkBoxID){
    // console.log(checkBoxID);
     
     const chek ='/api/task/checkbox';
     fetch(chek,{
         method:'POST',
         headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({_id:checkBoxID})
      }).then(res => {
             console.log("Start2");
         if(res.status !==200) {
                 console.log("No");
                 return;
 }
             res.json().then((result) => {
                
                console.log(result)
                
                // const filters = this.state.result.filter((item) => (item._id !== checkBoxID), item.done===true);
                
              //  this.setState();
      })
  })
 }
        

    onLogin(id) { //отправляет userID и получает ответ с description,done тд
        
        const tasks = `/api/task/${id}`;
        fetch(tasks, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(res => { 
          if(res.status !== 200) {
            return 
          }
          res.json().then((body) => {
            //newArray = body
            console.log(body);
            
            this.setState({result: body});
          });

    })
        
      //  return <Modal onLogin={this.request.bind(this)} />
    }
    
    newItem(login){
        const b = {                              
            userID: this.state.result[0].userID,
            description: 'Введите задачу',
            done: false,
        };

        const Item ='/api/task/newItem';
     fetch(Item,{
         method:'POST',
         headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({b})
      }).then(res => {
             console.log("Start2");
         if(res.status !==200) {
                 console.log("No");
                 return;
 }
             res.json().then((result) => {
                
                console.log(result)
      })
  })
        
        const result = [...this.state.result];
        result.push(b);
        // console.log(testArray);
        this.setState({result});
        
    }

    

    render(){
        const res = arr.map((arrs)=>{
        return {name: arrs.name,year: arrs.year};  
    });

        

        console.log(this.state);
        const newArray = this.state.result.map((item) => {
            return <Row key={item.number} One={item} onDel={this.del.bind(this)} checkboxClics={this.checkboxClick.bind(this)} readInput={this.readInputs.bind(this)}/>
              
    });
//     const newArray2 = this.state.result.map((item) => {
//            return <Row key={item.number} Two={item}cheks={this.checkbox.bind(this)} />
// });


    
        return (

 
    <div className="bg-dark header">
        <h1 className="text-light col-md-3">Задачи на день</h1>
        
                <button type="button" onClick={this.newItem.bind(this)} className="btn btn-outline-light offset-md-9 col-md-2 newItem">+</button>
        
        
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Задача</th>
                    <th scope="col">Действия</th>
                    <th scope="col">Выполнение</th>

                </tr>
            </thead>
    <tbody>
        <div>
                </div>
            {newArray}
                
            
    </tbody>
    </table>

    
    <Modal onLogin={this.onLogin.bind(this)}/>
        
    </div>

        );        
    }
}

export default Menu;