import React from "react";
import Menu from "./glav-menu";

// изменить state в done 
// прокинуть функцию checkboxClick в glav-menu, сделать функцию при нажатии на которой вызывается функция в glav-menu 
// я обновляю весь {}
// api task metod update



class Row extends React.Component {
    
    state = {
        ...this.props.One,
        //...this.props.Two,
        change: false,
        
        btn: false,
      //  _id:'chek,'
    }
    
            
    
    change(value) {
        
        this.setState({change: value});
       }
        
        
        //Удаление obj
           // 
           
        
        //сделать считывание value
        

         readInput(e){ // 
             console.log(e.target.value);
              this.setState({description: e.target.value}); 
              const txt = e.target.value;
             var t = this.props.One;
             this.props.readInput(txt,t);
            }
onClickDel(event) {
//    console.log(event);
    this.props.onDel(this.state._id);
}
checkboxClick(event) {
    //    console.log(event);
        this.props.checkboxClics(this.state._id);
        this.setState({done:true})
    }


    
    
    render(){
        // console.log(this.props)           
        const {change, description, done} = this.state;


        return(
            <tr>
      
      <td>{description}</td>
      <td><span onClick={this.onClickDel.bind(this)} >Удалить </span> | <span onClick={this.change.bind(this, !this.state.change)} > Изменить</span> </td>
      <td>
            <input type="checkbox" onChange={this.checkboxClick.bind(this)} checked={done}/>
            
                <div id="input">
                {change === true ? <input onChange={this.readInput.bind(this)} type="text" value={description} id="txt"/> : ''}
                </div>
                {change === true ?<button onClick={this.change.bind(this, !this.state.change)}>Свернуть</button> : ''}
                
                
      </td>
    </tr>

        
        );

 
}
}
export default Row;