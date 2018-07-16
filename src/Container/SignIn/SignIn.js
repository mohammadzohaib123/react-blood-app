import React, { Component } from 'react';
import AuthActions from "../../Store/Actions/AuthActions";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './SignIn.css';
import { withStyles } from 'material-ui/styles';
import green from '@material-ui/core/colors/green';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
},
btnWrapper: {
    display: "flex",
    justifyContent: 'space-between',
    marginTop: "40px"
},
button: {
    borderRadius: "3px"
},
paper: {
    width: '400px',
    height: '500px',
    margin: '30px auto',
    // padding: '30px'
},
input: {
    width: '100%',
    color: "#787575",
    borderStyle: 'none',
    borderBottom: '1px solid #787575',
    outline: 'none',
    paddingBottom: '5px',
    fontSize: '16px',
    marginTop: '30px'
},
textField: {
  flexBasis: 200,
},
  });
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  }) 
  
class SignIn extends Component
{
  state = {
    showPassword: false,
};
handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
};

handleMouseDownPassword = event => {
    event.preventDefault();
};

handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
};
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
      const { classes } = this.props;
        return(
            <div>  
            <div>
                <AppBar position="static" color="default" style={{ backgroundColor: '#266F07' ,width:'125%',marginLeft:-20,marginTop:-10 }}>
                  <Toolbar>
                    <Typography variant="title" color="inherit" style={{ color: "#FFF" ,fontSize:"32px",marginLeft:20}}>
                     Blood App
                    </Typography>
                  </Toolbar>
                </AppBar>
            </div>
          <Grid container direction="row" style={{ display: "flex", justifyContent: "space-around" }} >
            <Grid item xs={11} md={6} >
              <Paper className='paper' elevation={15}>
                <div>
                    <div>
                    <MuiThemeProvider theme={theme}> 
                    {/* <Email type="email" onChange={this.inputHandler} value={this.state.emailInput} name="emailInput"  LabelText="Email" placholderText="Email" />   */}
                    <TextField
                      style={{width:"100%", }}
                      label="Email"
                      placeholder="Email"
                      type="email" 
                      onChange={this.inputHandler}
                      value={this.state.emailInput} 
                      name="emailInput"
                      margin="normal"
                    />
                    </MuiThemeProvider>
                    <MuiThemeProvider theme={theme}>  
                      {/* <Password onChange={this.inputHandler} value={this.state.passInput} name="passInput" />  */}
                      <FormControl style={{width:"100%"}}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        onChange={this.inputHandler} value={this.state.passInput} name="passInput"
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                    </MuiThemeProvider>
                        <div className={classes.btnWrapper}>
                            <p style={{ fontSize: "13px", cursor: 'pointer', color: "#266F07" }} onClick={() => this.props.history.push("/signup")}>
                                Don't have an account?
                            </p>
                            <Button variant="contained" onClick={this.signInHandler} color="#266F07" className={classes.button}  >
                                <span style={{color:"#266F07"}}>SignIn</span>
                            </Button>
                        </div>
                    </div>
                </div>   
              </Paper> 
            </Grid>  
          </Grid>   
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

  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn));