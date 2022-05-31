import React, {Component} from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users';
import './App.css';

class App extends Component{
  
  
  constructor(props){
    super(props);
    this.deleteUser= this.deleteUser.bind(this);
    this.addUser= this.addUser.bind(this);
    this.state= {
      users: [
        {
          id: 1,
          name: "Zeynep Tırak",
          email: "zeyneptirak@gmail.com"
        },
        {
          id: 2,
          name: "Ayhan Gadirli",
          email: "ayhangad@gmail.com"
        },
        {
          id: 3,
          name: "Çağla Pekoğlu",
          email: "caglapekoglu@gmail.com"
        }
      ]
    }
  }
  addUser(newUser){
    let updatedUsers=this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users: updatedUsers
    });
  }
  deleteUser(id){
    let updatedUsers= this.state.users;
    updatedUsers = updatedUsers.filter(user =>user.id !== id);
    this.setState({
      users:updatedUsers
    })
  }
  //const title= "User App";
  //const isAuthorized = false;
  render(){
  return (
    /*<div className="container">
      <h5>{title}</h5>
      {isAuthorized ? <p>Authorized</p>: <p>Not Authorized</p>}
      <label htmlFor='name'>Name</label>
      <p className='lead'>This is sample test</p>
    </div>*/
    <div className='container'>
      <h4>User App</h4>
      <hr/>
    <AddUser addUser={this.addUser}/>
    <hr/>
    <Users deleteUser={this.deleteUser} users={this.state.users}/>
    </div>
  );}
}

export default App;
