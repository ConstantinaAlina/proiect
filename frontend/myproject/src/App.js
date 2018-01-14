import React, { Component } from 'react';
import './App.css';
import c1 from './c1.jpg'
import axios from 'axios';

  
class Users extends Component{
  render(){
     
 return (
   <div class="divUser">
 
 {this.props.users.map(user=>(
     <p> {user.id} - {user.nume} - {user.prenume} - {user.email}  </p>))}
       </div>
  )
  }
}




class Books extends Component{
  render(){
     
 return (
   <div class="uluser">
   
 {this.props.books.map(book=>(
     <p>  - {book.id_carte} - {book.titlu} - {book.nr_pagini} </p>))}
       </div>
  )
  }
}


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id:0,
      nume:'',
      prenume:'',
      email:'',
      
    };

    this.handleChangeNume = this.handleChangeNume.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
     this.handleChangePrenume = this.handleChangePrenume.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeNume(event) {
    this.setState({nume: event.target.value});
  }
 handleChangeId(event) {
    this.setState({id: event.target.value});
  }
   handleChangePrenume(event) {
    this.setState({prenume: event.target.value});
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.nume + this.state.id + this.state.prenume+this.state.email);
    let api="https://proiect-tehweb-alinaconstantina.c9users.io/users"
 
   axios.post(api, {id: this.state.id, nume: this.state.nume, prenume:this.state.prenume, email:this.state.email}).catch(error=>{
       console.log(error)
   }) 
    event.preventDefault(0);
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit} class="myform" >
      <div class="f2">
      <label> Create a free account </label>
      <p>
        <label>
          Name:
          <input type="text" nume={this.state.value} onChange={this.handleChangeNume} />
        </label>
        </p>
        <p>
        <label>
          ID:
          <input type="number" nume={this.state.value} onChange={this.handleChangeId} />
        </label>
        </p>
        <p>
         <label>
          Prenume:
          <input type="text" nume={this.state.value} onChange={this.handleChangePrenume} />
        </label>
        </p>
        <p>
          <label>
          Email:
          <input type="email" nume={this.state.value} onChange={this.handleChangeEmail} />
        </label>
        </p>
        <input type="submit" value="Log in" />
        </div>
      </form>
      
    );
  }
}


class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id_carte:0,
      id_gen:Math.random()*10,
     id_biblioteca:Math.random()*30,
      titlu:'',
      autor:'',
      nr_pagini:Math.random()*100,
      editura:''
    };

    this.handleChangeTitlu = this.handleChangeTitlu.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
     this.handleChangeAutor= this.handleChangeAutor.bind(this);
      this.handleChangeEditura = this.handleChangeEditura.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitlu(event) {
    this.setState({titlu: event.target.value});
  }
 handleChangeId(event) {
    this.setState({id_carte: event.target.value});
  }
   handleChangeAutor(event) {
    this.setState({autor: event.target.value});
  }
  handleChangeEditura(event) {
    this.setState({editua: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.id_biblioteca + this.state.id_carte + this.state.id_gen+this.state.nr_pagini);
    let api="https://proiect-tehweb-alinaconstantina.c9users.io/books"
 
   axios.post(api, {id_carte: this.state.id_carte, 
   id_gen:this.state.id_gen,
   id_biblioteca: this.state.id_biblioteca, 
   titlu:this.state.titlu, 
   autor:this.state.autor,
   nr_pagini:this.state.nr_pagini, 
   editura:this.state.editura
   }).catch(error=>{
       console.log(error)
   }) 
    event.preventDefault();
  }

  render() {
    return (
      <div className="bookform" >
      <form onSubmit={this.handleSubmit} >
      
      <p>
        <label>
          ID:
          <input type="text" nume={this.state.value} onChange={this.handleChangeId} />
        </label>
        </p>
        <p>
        <label>
          Titlu:
          <input type="text" nume={this.state.value} onChange={this.handleChangeTitlu} />
        </label>
        </p>
        <p>
         <label>
          Autor:
          <input type="text" nume={this.state.value} onChange={this.handleChangeAutor} />
        </label>
        </p>
        <p>
          <label>
          Editura:
          <input type="text" nume={this.state.value} onChange={this.handleChangeEditura} />
        </label>
        </p>
        <input id="mylibrary" type="submit" value="Adauga" />
        
      </form>
      </div>
      
    );
  }
}

 

class App extends Component {
  constructor(props){
    super(props)
     
      this.state={
       Users:[],
       Books:[],
       idd:0
      
        
      }
     
      this.handleChangeIdStergere = this.handleChangeIdStergere.bind(this);
  }
  
    handleChangeIdStergere(event) {
    this.setState({idd: event.target.value});
    
  }

  
  
  
  AfisareUser() {

   let api="https://proiect-tehweb-alinaconstantina.c9users.io/users"
   
   axios.get(api).then((results) => {
     this.setState({Users:results.data})
   });
  }
  
    AfisareCarte() {

   let api="https://proiect-tehweb-alinaconstantina.c9users.io/books"
   
   axios.get(api).then((results) => {
     this.setState({Books:results.data})
   });
  
  }
  
  deleteUser(idd) {
    console.log(idd);
     let api="https://proiect-tehweb-alinaconstantina.c9users.io/users"
     
   
    axios.delete(api + '/' + idd)
    .then((res) => {
      console.log(res)
     })
  }
  

  render() {


  
    return (


      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Meet your next favorite book! </h1>
        </header>
        <p className="App-intro">
  
 </p>
 <ul class="ulmenu">
  <li  onClick={()=> this.AfisareUser()} ><a href="#home">Afisare Utilizatori</a></li>
  <li ><a href="#news">News</a></li>
  <li><a href="#mylibrary">My library</a></li>
  <li class="active"><a href="#login">Log In</a></li>
</ul>


   
  <Users users={this.state.Users}/>
      <Books books={this.state.Books} />
     
       <NameForm nameform={this.state.NameForm}/>
       <button  class="d1" onClick={()=> this.deleteUser(this.state.idd)}> Stergere user </button>
         <input class="d1" type="number" nume={this.state.value}  onChange={this.handleChangeIdStergere}  />
    
     
       <hr></hr>
       
      <BookForm bookform={this.state.BookForm}/>
     <img  id="img1" src={c1} alt="c1"/>
     
    
        <button  id="btnBook" onClick={()=> this.AfisareCarte()}> Afisare carti </button>
   
       
      </div>
       
      
     
   
      
      
    );
  }
}

export default App;
