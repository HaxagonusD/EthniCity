import { Container } from "semantic-ui-react";

function LoginRegister() {
    return (<div>
        {/* This is the Login Register page */}
        <Container fluid className="signup secondary-banner">
            <div className="ui breadcrumb"><a className="section">Home</a><i aria-hidden="true" className="right angle icon divider"></i><a className="section">Login Register</a></div>
            <h1>Login Register</h1>
        </Container>

        <Container className="login-register-container col-grid pt-5">
            <div className="signin">
                <h3>Sign In</h3>

                <form className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <button className="ui basic button" type="submit">Sign In</button>
                </form>
            </div>
            <div className="register">
                <h3>Create an Account</h3>
                <div>
                    {/* <div className="ui attached message">
                        <div className="content">
                            <div className="header">
                                Welcome to our site!
                        </div>

                            <p>Fill out the form below to sign-up for a new account</p>
                        </div>
                    </div> */}

                    <form className="ui form attached fluid">
                        <div className="equal width fields">
                            <div className="field">
                                <label>First Name</label>

                                <div className="ui fluid input">
                                    <input type="text" placeholder="First Name" />
                                </div>
                            </div>

                            <div className="field">
                                <label>Last Name</label>

                                <div className="ui fluid input">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label>Username</label>

                            <div className="ui input">
                                <input type="text" placeholder="Username" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Email</label>

                            <div className="ui input">
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Password</label>

                            <div className="ui input">
                                <input type="password" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Confirm Password</label>

                            <div className="ui input">
                                <input type="password" />
                            </div>
                        </div>

                        <div className="inline field">
                            <div className="ui checkbox">
                                <input type="checkbox" className="hidden" readonly="readonly" tabindex=
                                    "0" /><label>You accept our Terms and Conditions and Privacy Policy</label>
                            </div>
                        </div><button className="ui blue button">Register New</button>
                    </form>

                    {/* <div className="ui warning bottom attached message">
                    Already signed up? <a href="#">Login here</a> instead.
                    </div> */}
                </div>
            </div>
        </Container>

    </div>);
}

export default LoginRegister;
