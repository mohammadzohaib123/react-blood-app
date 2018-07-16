import React, { Component } from "react";
import { connect } from "react-redux";
import DatabaseActions from "../../Store/Actions/DatabaseActions";
import AuthActions from "../../Store/Actions/AuthActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import './Donor.css';
import Selector from '../../Component/Selector';
import TextField from 'material-ui/TextField';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
}) 

class Donor extends Component {
  constructor(props) {
    super(props);
    this.state = { emailInput:"",nameInput:"",numbInput: "", bloodGroupInput: "" };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.user) {
      this.props.history.replace("/");
    }
  }
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  buttonHandler = () => {
    console.log("1111111111111")
    let donorInfo = {
      uid: this.props.user.uid,
      name: this.props.user.displayName,
      email: this.props.user.email,
      phoneNumber: this.state.numbInput,
      bloodGroup: this.state.bloodGroupInput
    };
    console.log(donorInfo)
    this.props.pushDonor(donorInfo);
    this.setState({ numbInput: "", bloodGroupInput: "" });
  };
  render() {
  
    console.log(this.state.bloodGroupInput);
    return (
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
            <Grid container direction="row" style={{ display: "flex", justifyContent: "space-around" }} >
            <Grid item xs={11} md={6} >
                <div>
                    <div style={{marginTop:40}}>
                    <MuiThemeProvider theme={theme}> 
                    {/* <Email type="email" onChange={this.inputHandler} value={this.state.emailInput} name="emailInput"  LabelText="Email" placholderText="Email" />   */}
                    <TextField
                      style={{width:"100%",marginBottom:-12}}
                      label="Name"
                      placeholder="Name"
                      type="name" 
                      onChange={this.inputHandler}
                      value={this.props.user?this.props.user.displayName:""} 
                      name="nameInput"
                      margin="normal"
                      disabled={true}
                      required
                    />
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={theme}> 
                    {/* <Email type="email" onChange={this.inputHandler} value={this.state.emailInput} name="emailInput"  LabelText="Email" placholderText="Email" />   */}
                    <TextField
                      style={{width:"100%", }}
                      label="Email"
                      placeholder="Email"
                      type="email" 
                      onChange={this.inputHandler}
                      value={this.props.user?this.props.user.email:""} 
                      name="emailInput"
                      margin="normal"
                      required
                      disabled={true}

                    />
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={theme}> 
                    {/* <Email type="email" onChange={this.inputHandler} value={this.state.emailInput} name="emailInput"  LabelText="Email" placholderText="Email" />   */}
                    <TextField
                      style={{width:"100%",marginTop:-1}}
                      label="Contact No"
                      placeholder="Contact No"
                      type="number" 
                      onChange={this.inputHandler}
                      value={this.state.numbInput} 
                      name="numbInput"
                      margin="normal"
                    />
                    </MuiThemeProvider>
                    <Grid item xs={8} >
                      <Selector valueInput={this.state.bloodGroupInput} name={"bloodGroupInput"} changeHandler={this.inputHandler} />
                    </Grid>

                    </div>
                </div>   
            </Grid>  
          </Grid> 
          <Grid
          container
          direction="row"
          justify="center"
          style={{ padding:10,  }}>
          <Grid item xs={11} md={6}>
          <Button variant="contained" value="Donate Blood" onClick={this.buttonHandler} color="primary" style={{
            marginTop:10,
            backgroundColor: "#266F07"}}>
            Donate blood
            <Icon ></Icon>
          </Button>
          </Grid>
          </Grid>
          {/* <input type="text" name="nameInput" onChange={this.inputHandler} value={this.state.nameInput} />
          <input type="email" name="emailInput" onChange={this.inputHandler} value={this.state.emailInput} />
          <input type="number" name="numbInput" onChange={this.inputHandler} value={this.state.numbInput} />
          <input type="submit" value="Donate Blood" onClick={this.buttonHandler}  />  */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('donor')
  console.log(state);
  return {
    user: state.AuthReducers.user,
    donorList: state.DatabaseReducers.donorList,
    isLoading: state.DatabaseReducers.isLoading,
    isError: state.DatabaseReducers.isError,
    errorMsg: state.DatabaseReducers.errorMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pushDonor: donorPayload => {
      console.log('2222222222222222');
      return dispatch(DatabaseActions.addDonor(donorPayload));
    },
    signOutUser: () => {
      return dispatch(AuthActions.signOutUser());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Donor);
