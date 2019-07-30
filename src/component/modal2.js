
import React from "react";
import { thisExpression } from "@babel/types";
import Menu from "./glav-menu";
class Modal extends React.Component {
// связать модалку с таблицей 
// чтобы она понимала когда функция работает и запускала свою
 
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.request = this.request.bind(this);
      }

      state = {
        name:'',
        pass:'',
        userID:'login',
        description:'',
        done:''
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
        const login = '/api/login';
        fetch(login, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
             body: JSON.stringify({name: this.state.name,password:this.state.pass})
            }).then(res => { 
          if(res.status !== 200) {
            return 
          }
          
        //  var userID = res;
        //   this.props.onLogin(userID);

          res.json().then((user) => {
            this.props.onLogin(user.userID);
          });
         
   
            

    }
    
            )}
        
      
    
    render(){
       
        return (
        <div className="modal fade" id="MODAL2" data-show="true">
                            <div className="modal-dialog modal-sm1 ">
                                <div className="modal-content color-blue">
                                    <div className="modal-header">
                                        <div>
                                        <h4 className="modal-title col-lg-12 offset-lg-0">Войдите в свой аккаунт</h4>
                                        <p className="offset-lg-0 col-lg-12 f13px">Введите Ник и пароль </p>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                     
                                        <form id="Lending1" name="Lending1" className="col-lg-10 offset-lg-1">
                                          <div className="form-group ">
                                            
                                            <input type="name" name="name" onChange={this.handleChange1}  className="form-control" id='name' aria-describedby="NameHelp" value={this.state.name} placeholder="Name *" style={{'borderRadius': '20px'}}
/>
                                          </div>
                                          <div className="form-group">
                                            
                                            <input type="password" name="password" onChange={this.handleChange2}  className="form-control" id='pass' value={this.state.password} placeholder="Pass *" style={{'borderRadius': '20px'}}
   
/>
                                          </div>

                                          
                                      
                                         <button type="button" onClick={this.request.bind(this)} className="btn1  offset-lg-1 col-md-3 col-lg-11 bold btn-orange btn-top">Авторизация</button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        );        
    }
}

export default Modal;