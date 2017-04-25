require('normalize.css/normalize.css');
require ('styles/login.css');

 import React from 'react';

 class Login extends React.Component{
     getInitialState = ()=>{
         return{
             username:' ',
             password:' '
         };
     }
     handleChange = (e)=>{
        let newState ={};
        newState[e.target.name]=e.target.value;
        this.setState(newState);
     }
    
     handleOnclickReset =()=>{
         let newState={};
        this.setState(newState);
     }
    // 获取提交数据
    //   handleClick = ()=>{
    //      let data = {
    //          username:this.state.username,
    //          password:this.state.password
    //      }
    //  }
     //提交数据
    //  $.ajax({})
     render(){
         return(
             <div className="g_login" >
                 <div className="g_login_right" >
                    <div className="usrname" >
                        <input type="text"  placeholder="请输入你的名字" onChange={this.handleChange}/>
                        <label>{}</label>
                    </div>
                    <div className="password" >
                        <input type="password" placeholder="请输入你的密码" />
                    </div>
                    <div>
                        <input type="submit" value="确认" />
                        <input type="reset" value="重置" />
                    </div>
                </div> 
             </div>
         );
     }
 }
 export default Login;