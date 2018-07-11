import React, { Component } from 'react';
import AuthActions from "../../Store/Actions/AuthActions";
import { connect } from "react-redux";

class SignUp extends Component
{
    constructor(props) {
        super(props);
        this.state = { emailInput: "", passInput: "", nameInput: "" ,registerButtonDisable:false};
      }
      inputHandler=(event)=> {
        this.setState({ [event.target.name]: event.target.value });
      }
      registerHandler=()=> {
        let userInfo = {
          name: this.state.nameInput,
          email: this.state.emailInput,
          pass: this.state.passInput
        };
        console.log(userInfo);
        this.props.createUser(userInfo)
        this.setstate = { emailInput: "", passInput: "", nameInput: "" ,registerButtonDisable:false}
      }
      componentWillReceiveProps(nextProps){
        console.log(nextProps)
          if(nextProps.user){
              this.props.history.replace('/home');
          }
      }
    render()
    {
        return(
            <div>
                <input type="text" placeholder="Name here" name="nameInput" value={this.state.nameInput} onChange={this.inputHandler}/><br /><br />
                <input type="email" placeholder="Email here" name="emailInput" value={this.state.emailInput} onChange={this.inputHandler}/><br /><br />
                <input type="password" placeholder="Password here" name="passInput" value={this.state.passInput} onChange={this.inputHandler}/><br /><br />
                <input type="submit" onClick={this.registerHandler}/>
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
      createUser: userObj => {
        return dispatch(AuthActions.signUpUser(userObj));
      }, 
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp);