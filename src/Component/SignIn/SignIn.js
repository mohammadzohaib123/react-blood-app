import React, { Component } from 'react';
import AuthActions from "../../Store/Actions/AuthActions";
import { connect } from "react-redux";
class SignIn extends Component
{
    constructor(props) {
        super(props);
        this.state = { emailInput: "", passInput: ""};
      }
      
      inputHandler=(event)=> {
        this.setState({ [event.target.name]: event.target.value });
      }
      componentDidMount() {
        this.props.checkUser();
      }
      signInHandler = () => {
        let userInfo = {
          email: this.state.emailInput,
          pass: this.state.passInput
        };
        console.log(userInfo);
        this.props.signInUser(userInfo);
        this.setState({ emailInput: "", passInput: "", signInButtonDisable: true });
      };
      componentWillReceiveProps(nextProps) {
          console.log(nextProps.user);
        if (nextProps.user) {
          this.props.history.replace("/home");
        }     
      }
    render()
    {
        return(
            <div>
                <input type="email" onChange={this.inputHandler} value={this.state.emailInput} name="emailInput" />
                <br /><br />
                <input type="password" onChange={this.inputHandler} value={this.state.passInput} name="passInput"/>
                <br /><br />
                <input type="submit" onClick={this.signInHandler} />
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return {
      user: state.AuthReducers.user,
      isLoading: state.AuthReducers.isLoading,
      isError: state.AuthReducers.isError,
      errorMsg: state.AuthReducers.errorMsg
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      signInUser: userPayload => {
        return dispatch(AuthActions.signInUser(userPayload));
      },
      checkUser: () => {
          console.log(AuthActions.checkUser());
        return dispatch(AuthActions.checkUser());
      }
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn);