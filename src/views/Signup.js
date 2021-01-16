function Login() {
    return (<div>
        <form class="ui form">
            <div class="three fields">
                <div class="field">
                    <label>First name</label>
                    <input type="text" placeholder="First Name" /></div>
                <div class="field">
                    <label>Middle name</label>
                    <input type="text" placeholder="Middle Name" /></div>
                <div class="field">
                    <label>Last name</label>
                    <input type="text" placeholder="Last Name" /></div>
            </div>

            <div class="inline fields">
                <label>Phone Number</label>
                <div class="field">
                    <input type="text" placeholder="(xxx)"/>
    </div>
                    <div class="field">
                        <input type="text" placeholder="xxx"/>
    </div>
                        <div class="field">
                            <input type="text" placeholder="xxxx"/>
    </div>
                        </div>
                        <div class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" tabindex="0" class="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button class="ui button" type="submit">Submit</button>


                        
                        </form>
                </div> )
  }
  
  export default Login;
  