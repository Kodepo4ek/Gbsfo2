import React from "react";
import Modal from "./component/modal2";
import Menu from "./component/glav-menu";

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: ''};
            this.handleChange1 = this.handleChange1.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
            this.request = this.request.bind(this);
          }
    
          state = {
            name:'',
            pass:''
          }
        handleChange1(event) {
            this.setState({name: event.target.value});
            console.log(event.target.value);
          }
          handleChange2(event) {
            this.setState({pass: event.target.value});
            console.log(event.target.value);
          }
          request(event){
            event.preventDefault();
            const peoples = '/api/register';
            fetch(peoples, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                 body: JSON.stringify({name: this.state.name,password:this.state.pass})
                }).then(res => {
              if(res.status !== 200) {
                //console.log(res);
               // localStorage.setItem('login','res');
                
                
                return;
              }
              res.json().then(function(res) {
              
                   }
                
                
    
            )}
            )}
    
        

    
    
    render(){
        
        
        
        
        
        
        
        return (
            
        <div className="modal fade" id="MODAL3">
                            <div className="modal-dialog modal-sm1 ">
                                <div className="modal-content color-blue">
                                    <div className="modal-header">
                                        <div>
                                        <h4 className="modal-title col-lg-12 offset-lg-0">Заполните форму</h4>
                                        <p className="offset-lg-0 col-lg-12 f13px">Удачной регистрации :)</p>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                       
                                        <form id="Lending1" name="Lending1" className="col-lg-10 offset-lg-1">
                                          <div className="form-group ">
                                            
                                            <input type="name" name="name" className="form-control" onChange={this.handleChange1} id="exampleInputName1" aria-describedby="NameHelp" placeholder="Ваше Name *" value={this.state.name} style={{'borderRadius': '20px'}}
    
/>
                                          </div>
                                          <div className="form-group">
                                            
                                            <input type="password" name="password" className="form-control" onChange={this.handleChange2} id="exampleInputPassword1" placeholder="Ваш Pass *" value={this.state.password} style={{'borderRadius': '20px'}}
   
/>
                                          </div>
                                          <div className="form-group">
                                            
                                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваш E-mail *" style={{'borderRadius': '20px'}}
    
/>
                                            <small id="emailHelp" className="form-text ">E-mail не обязателен</small>
                                          </div>
                                         <button onClick={this.request} type="button" className="btn1  offset-lg-1 col-md-3 col-lg-11 bold btn-orange btn-top">Регистрация</button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        ); 

    }
}


export default App;
















//<div class="modal fade" id="MODAL3">
//                            <div class="modal-dialog modal-sm1 ">
//                                <div class="modal-content color-blue">
//                                    <div class="modal-header">
//                                        <div>
//                                        <h4 class="modal-title col-lg-12 offset-lg-0">Заполните форму</h4>
//                                        <p class="offset-lg-0 col-lg-12 f13px">Удачной регистрации :)</p>
//                                        </div>
//                                    </div>
//                                    <div class="modal-body">
//                                       
//                                        <form method="post" id="Lending1" name="Lending1" class="col-lg-10 offset-lg-1" action="/about">
//                                          <div class="form-group ">
//                                            
//                                            <input type="name" name="name" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" placeholder="Ваше Name *" style="
//    border-radius: 20px;
//    
//">
//                                          </div>
//                                          <div class="form-group">
//                                            
//                                            <input type="Pass" name="Pass" class="form-control" id="exampleInputPass1" placeholder="Ваш Pass *" style="
//    border-radius: 20px;
//   
//">
//                                          </div>
//                                          <div class="form-group">
//                                            
//                                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ваш E-mail *" style="
//    border-radius: 20px;
//    
//">
//                                            <small id="emailHelp" class="form-text ">E-mail не обязателен</small>
//                                          </div>
//                                         <button href="" type="submit" data-remodal-target="" class="btn1  offset-lg-1 col-md-3 col-lg-11 bold btn-orange btn-top">Регистрация</button>
//                                        </form>
//                                        
//                                    </div>
//                                </div>
//                            </div>
//                            
//                        </div> 