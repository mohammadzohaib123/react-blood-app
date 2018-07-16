import React, { Component } from 'react';
import AuthActions from "../../Store/Actions/AuthActions";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
            <AppBar position="static" color="default" style={{ backgroundColor: '#266F07' ,width:'125%',marginLeft:-20,marginTop:-10}}>
              <Toolbar>
                <Typography variant="title" color="inherit" style={{ color: "#FFF" ,fontSize:"32px",marginLeft:20}}>
                  Blood App
                  <Button
                    style={{ float: "right",backgroundColor:"white",marginLeft:95,color:"#266F07"}}
                    color="inherit"
                    onClick={this.props.signOutUser}
                  >
                    SignOut
                  </Button>
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container direction="row" justify="center" style={{ padding:10,  }}>
              <Grid item xs={11} md={12}>
                <Button variant="contained" value="Donate Blood" onClick={() => {
                  this.props.history.replace("/donor");
                  }} color="primary" style={{
                  marginTop:10,
                  backgroundColor: "#1cdbdb"}}>
                  Donor
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center" style={{ padding:10,  }}>
              <Grid item xs={11} md={12}>
                <Button variant="contained" value="Donate Blood" onClick={() => {
                this.props.history.replace("/needer");
                  }}
                  color="primary" 
                  style={{
                  marginTop:10,
                  backgroundColor: "#99098d"}}>
                  Needer
                </Button>
              </Grid>
            </Grid>
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


