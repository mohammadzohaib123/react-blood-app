import React, { Component } from "react";
import DatabaseActions from "../../Store/Actions/DatabaseActions";
import AuthActions from "../../Store/Actions/AuthActions";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Selector from '../../Component/Selector';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Needer extends Component
{
    constructor(props) {
        super(props);
        this.state = { bloodInput: "", renderArray: [] };
    }
    componentWillReceiveProps(nextProps) {
        // if (!nextProps.user) {
        //   this.props.history.replace("/");
        // }
    }
    inputHandler = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value });
      };
    componentDidMount() {
        this.props.getDonor();
    }
    findAvailableUser(Array) {
        let array = [];
        this.props.donorList.find(obj => {
            console.log(obj)
          Array.forEach(value => {
            value.forEach(val => {
              if (val == obj.bloodGroup) {
                array.push(obj);
              }
            });
          });
          this.setState({ renderArray: array });
        });
      }
    checkDonors = () => {
        
        let a = [];
        var b = this.state.bloodInput;
        switch (b) {
          case "A+":
          console.log("abc")
            a.push(["A+", "O+", "A-", "O-"]);
            this.findAvailableUser(a);
    
            break;
    
          case "B+":
            a.push(["B+", "O+", "B-", "O-"]);
            this.findAvailableUser(a);
            break;
    
          case "AB+":
            a.push(["AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-"]);
            this.findAvailableUser(a);
            break;
    
          case "O+":
            a.push(["O+", "O-"]);
            this.findAvailableUser(a);
            break;
    
          case "A-":
            a.push(["A-", "O-"]);
            this.findAvailableUser(a);
            break;
    
          case "B-":
            a.push(["B-", "O-"]);
            this.findAvailableUser(a);
            break;
    
          case "AB-":
            a.push(["AB-", "O-", "A-", "B-"]);
            this.findAvailableUser(a);
            break;
    
          case "O-":
            a.push(["O-"]);
            this.findAvailableUser(a);
            break;
        }
      };

    render()
    {
        return(
            <div>
                <AppBar position="static" color="default" style={{ backgroundColor: '#266F07' ,width:'125%',marginLeft:-20,marginTop:-10}}>
              <Toolbar>
                <Typography variant="title" color="inherit" style={{ color: "#FFF" ,fontSize:"32px",marginLeft:20}}>
                  Blood App
                <Button
                 style={{ float: "right",backgroundColor:"white",marginLeft:85,color:"#266F07"}}
                 color="inherit"
                 onClick={this.props.signOutUser}
                >
              SignOut
            </Button>
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid
          container
          direction="row"
          justify="center"
          style={{ padding: 10,marginTop:25}}
        >
        <Selector name="bloodInput" valueInput={this.state.bloodInput} changeHandler={this.inputHandler} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          style={{padding:50, }}
        >
          <Grid item xs={1}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ backgroundColor: "#4FE80F",fontWeight:"bold" }}
              onClick={this.checkDonors}
            >
              Find Donor
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          style={{padding:50, }}
        >
<Grid item xs={14} md={8}>
        <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Blood Group</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell numeric>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.renderArray.map((obj,index) => {
            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {obj.bloodGroup}
                </TableCell>
                <TableCell >{obj.name}</TableCell>
                <TableCell >{obj.email}</TableCell>
                <TableCell numeric>{obj.phoneNumber}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
</Grid>
</Grid>
    </div>
        );
    }  
}
const mapStateToProps = state => {
    console.log(state);
    return {
      user: state.AuthReducers.user,
      donorList: state.DatabaseReducers.donorList,
      isLoading: state.DatabaseReducers.isLoading,
      isError: state.DatabaseReducers.isError,
      errorMsg: state.DatabaseReducers.errorMsg
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      getDonor: () => {
        return dispatch(DatabaseActions.getDonor());
      },
      signOutUser: () => {
        return dispatch(AuthActions.signOutUser());
      }
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Needer);
  