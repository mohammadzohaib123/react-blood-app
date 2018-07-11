import React, { Component } from 'react';
import AuthActions from "../../Store/Actions/AuthActions";
import { connect } from "react-redux";

class Home extends Component
{
    componentWillReceiveProps(nextProps) {
        if (!nextProps.user) {
          this.props.history.replace("/");
        }
      }
    render(){
        return(
        <div>
            <h1>Welcome to home.js</h1>
            <input type="submit" onClick={this.props.signOutUser} value="Signout" />
        </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state)
    return{
        user: state.AuthReducers.user,
        isLoading: state.AuthReducers.isLoading,
        isError: state.AuthReducers.isError,
        errorMsg: state.AuthReducers.errorMsg
    };
};
const mapDispatchToProps = dispatch => {
    return {
      signOutUser: () => {
          console.log("signout calls")
        return dispatch(AuthActions.signOutUser());
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(Home);


