import { useState } from "react";

export default function Login() {
  
const email = ref();
const password = ref()
  // const [enteredEmail , setEnteredEmail]  = useState('');
  // const [enteredPassword , setEnteredPassword]  = useState('');
  
  const [eneterValues , setEnterValues] = useState({
    email: '',
    password: ''
  })



  // function handleSubmit(event){
  //   event.preventDefault();
  // }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePaswordChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  // function handleInputChange(identifier,value){
  //     setEnterValues(preveValues => ({
  //       ...preveValues, 
  //       [identifier]: value
  //     }))
  //   }
  
  function handleSubmit(event){
    event.preventDefault()

    const enteredEmail = email.current.value
    const enteredPassword = email.current.value
  }



  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={email}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
