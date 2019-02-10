import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			REGISTER: false,
			STORE: false,
			Home:true,
			shows: false,
			Email:'',
			Password:'',
			isActive:true ,
			On:true,
			username:'',
			accountEmail:'',
			passOne:'',
			passTwo:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			logInEmail:'',
			logInPassword:'',
			contents:''
		};
	}
//// check if its online
componentDidMount(){
		if(sessionStorage.getItem('UserName') !== null){
			this.setState({isActive:'true'},alert(this.state.isActive))
		}
	}


	collectEmailLogin(e){
		this.setState({
			logInEmail:e.target.value
		})
 }
    collectPasswordLogin(e){
           this.setState({
						logInPassword:e.target.value
					 })
 }
   	collectSendLogin(e){
   const log = {
				email:this.state.logInEmail,
				password:this.state.logInPassword
	 }
		 axios.post('http://localhost:4000/logIn',log)
		 .then(results =>{
			   console.log(results)
		 })
		 console.log('done')
 }
	displayerHome(){
		this.setState({
			REGISTER: false,
			STORE: false,
			Home:true
		});
	}
	//display Register
	displayerREGISTER() {
		this.setState({
			REGISTER: true,
			STORE: false,
			Home:false
		});
	}

	/// display Store
	displayerSTORE() {
		this.setState({
			REGISTER: false,
			STORE: true,
			Home:false	
		});
	}
	//main Menu Displayer---- 
	change(e){
		if (this.state.shows === false) {
			this.setState({
				shows: true
			});
		} else {
			this.setState({
				shows: false
			});
    }
    console.log('done');
	}

 /// Btn CreateAccount

	  //collectors first === 
	   usernameCollector(e){
        this.setState({
           username:e.target.value
		})
	  }
	  
	   emailcollector(e){
           this.setState({
			    accountEmail:e.target.value
		   })
	  }
	   passwordCollector(e){
         this.setState({
			   passOne:e.target.value
		 })
	  }
	   secondpasswordCollector(e){
           this.setState({
			   passTwo:e.target.value
		   })
	  }
	  addresCollector(e){
		this.setState({
			address:e.target.value
		})  
	  }
      cityCollector(e){
		this.setState({
			city:e.target.value
		})
	  }
	  stateCollector(e){
		this.setState({
			state:e.target.value
		})
	  }
	  zipCollector(e){
		this.setState({
			zip:e.target.value
		})
	  }
	  ///Collect all and send via Ajax...
	 		CreateAccount(e){
			   e.preventDefault();
			  var AccountData = {
					  'username':this.state.username,
					  'email':this.state.accountEmail,
					  'password':this.state.passOne,
					  'password2':this.state.passTwo,
					  'city':this.state.city,
					  'state':this.state.state,
					  'zip':this.state.zip
				}  
			   // sending by axios....
				 axios.post('http://localhost:4000/createaccount',AccountData)
			   .then(results=>{
					  console.log(results);
					if(results.status === 200){
					  this.setState({
						 isActive:true,
						 contents:results.data.info
					  },()=>{
							this.setState({
								REGISTER: false,
								STORE: false,
								Home:true
							});
							sessionStorage.setItem("UserName", this.state.username);
					  })
					}else{
						 console.log('nothing comes back from server');
						 console.log(this.state.isActive);
					}
			   })

			}
	/// form changer ---- 
	changeForm(){
		if(this.state.On === true){
		  this.setState({
			   On:false
		  })
		}
	}
	secondChangeForm(){
		 if(this.state.On === false){
			   this.setState({
				     On:true
			   })
		 }
	}

	render() {
		const showd = (
			<div id="navDemo" className="w3-bar-block w3-white w3-show w3-hide-large w3-show-medium w3-large">
				<a onClick={this.displayerREGISTER.bind(this)} className="w3-bar-item w3-button w3-padding-large">
			  	REGISTER
			  </a>
			  
				<a onClick={this.displayerSTORE.bind(this)} className="w3-bar-item w3-button w3-padding-large">
				STORE
			   </a>
		 </div>
		);
		const hiddend = (
			<div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
				<a onClick={this.displayerREGISTER.bind(this)} className="w3-bar-item w3-button w3-padding-large">
					REGISTER
				</a>';
				<a onClick={this.displayerSTORE.bind(this)} className="w3-bar-item w3-button w3-padding-large">
					STORE
				</a>';
				{this.state.isActive === false?(null):<a className="w3-bar-item w3-button w3-padding-large">AddItems</a>}
			</div>
		);

  const HomeAdds = (		
	  <div className='imagesContainer'>
      <div className='slider'></div>
	     <div className='adds'></div> 
    </div>
	);
	const specials = (<div className='web2 container'>
	<div className='divider'>
		<div className='headers'></div>
	  </div>
		<div className='items-container'>
			   <div className='row-images'>
				 <div className='block1 b'></div>
				 <div className='blocl2 b'></div>
				 <div className='block3 b'></div>
				 <div className='block3 b'></div>
				 <div className='block3 b'></div>
				 <div className='block3 b'></div>
		  </div>
	   </div>

	 </div>);
	 const Store = (
		<div className='web2s'>
		<div className='divider'>
			<div className='headers'></div>
		  </div>
			<div className='items-containers'>
				   <div className='rows-images'>
					 <div className='block1 b'></div>
					 <div className='blocl2 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
					 <div className='block3 b'></div>
			  </div>
		   </div>
	
		 </div>
	 )
	  const welcomeUser =(
			<div className='log-container'>
				 <div className='second-log'>
				 <div className='createOrLog'>
				 <button className='Create done' onClick={this.changeForm.bind(this)}>Sing Up</button>
					<button className='done'>Log in</button>
			 </div>
						<h2 className='doingDisplayer'>Welcome Back!</h2>
						<div className="form-group z">
						<input onChange= {this.collectEmailLogin.bind(this)} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
					  </div>
					  <div className="form-group z">
						<input  onChange= {this.collectPasswordLogin.bind(this)} type="password" className="form-control"  placeholder="Password"/>
					  </div>
						<button  onClick= {this.collectSendLogin.bind(this)} className='sengindLog'>Log in</button>
			   </div>
			</div>
		)
		/// second log its the BTN.... 

	  const CreateUserForm = (
			<div className='log-container'>
		<div className='second-log'>
		<div className='createOrLog'>
		<button className='Create  done'>Sing Up</button>
	 <button onClick={this.secondChangeForm.bind(this)} className='done'>Log in</button>
	</div>
			   <h2 className='doingDisplayers'>Sign Up for Free</h2>
			   <div className="form-group z">
			   <input onChange={this.usernameCollector.bind(this)} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Username"/>
			 </div>
			   <div className="form-group z">
			   <input onChange={this.emailcollector.bind(this)} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
			 </div>
				<div className="form-group z">
				  <input onChange={this.passwordCollector.bind(this)}type="password" className="form-control"  placeholder="Password" />
						</div>
						<div className="form-group z">
						<input onChange={this.secondpasswordCollector.bind(this)} type="password" className="form-control" placeholder="Re-Enter-Password"/>
					</div>
	<div className="form-group z">
         <input type="text"  onChange={this.addresCollector.bind(this)} className="form-control" id="inputAddress" placeholder="1234 Main St" />
	   </div>
	   <div className='RowContainer'>
  <div className="form-row r">
    <div className="form-group col-md-6">
      <input onChange={this.cityCollector.bind(this)} type="text" className="form-control" id="inputCity" placeholder='City'/>
    </div>
    <div className="form-group col-md-3">
	   <input onChange={this.stateCollector.bind(this)} type="text" className="form-control" id="inputState" placeholder='state'/>
    </div>
    <div className="form-group col-md-3">
      <input onChange={this.zipCollector.bind(this)}  type="text" className="form-control" id="inputZip" placeholder='Zip'/>
    </div>
  </div>
  </div>
	<div className='createOrLog'>
 <button onClick={this.CreateAccount.bind(this)} className='sengindData'>Done</button>
</div>
	  </div>
   </div>
)
	  const footerDisplayer = ( 
			<footer className='footer container'>
			<div className='icons-collector'>
			    <a href="fb.com" className="fa fa-facebook"></a>
		  	  <a href="youtube.com" className="fa fa-youtube"></a>
			    <a href="instagram.com" className="fa fa-instagram"></a>
          <a href="pinterest.com" className="fa fa-pinterest"></a>
			</div>
		      
	      </footer>
	)
		return (
			<div className="App">
			  <div className='web'>
				<div className="w3-top container s">
					<div className="w3-bar w3-card w3-left-align w3-large c">
						<a
							className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large"
							onClick={this.change.bind(this)}
							title="Toggle Navigation Menu"
						>
							<i className="fa fa-bars" />
						</a>
						<a className="w3-bar-item w3-button w3-padding-large"
						onClick={this.displayerHome.bind(this)}
						>
							Home
						</a>
						<a
							id="mob"
							onClick={this.displayerREGISTER.bind(this)}
							className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
						>
							REGISTER
						</a>
						<a
							id="mob"
							onClick={this.displayerSTORE.bind(this)}
							className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
						>
							STORE
						</a>
					
					</div>
				{this.state.shows === true ? showd : hiddend}
							{
								//user Register
							}
							{
								this.state.REGISTER === true?this.state.On === true?welcomeUser:CreateUserForm:(null)
							}
					{
						// case Store its True--- display Store constant
					}
						
					{
						this.state.STORE === true?Store:(null)
				
						//News Images .. info .... and adds
					}
								{
								   this.state.Home === true? HomeAdds:(null)
								}
					   </div>
					   
				 </div>
				 {
					 /// New Shop Items .... 
				 }
	                 {
						 this.state.Home === true?specials:(null)
					 }

				  {
					/// footer 
				  }
						{
							this.state.REGISTER !== true?footerDisplayer:footerDisplayer
						}
			 
			</div>
		);
	}
}

export default App;
