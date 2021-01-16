function Login() {
    return (<div>
        <form className="ui form">
            
                <div className="field">
                    <label>Username</label>
                    <input type="text" placeholder="Username"/>
    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password"/>
    </div>
                    
                    <button className="ui button" type="submit">Login</button>
                        </form>
            </div>)
  }
  
  export default Login;
  