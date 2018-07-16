import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


export default class Selector extends Component{
    render(){
        return(
            <FormControl >
          <InputLabel htmlFor="bloodGroup">BloodGroup</InputLabel>
          <Select
            value={this.props.valueInput}
            onChange={this.props.changeHandler}
            input={<Input name={this.props.name} id="bloodGroup" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value={"B+"}>B+</MenuItem>
            <MenuItem value={"AB+"}>AB+</MenuItem>
            <MenuItem value={"A-"}>A-</MenuItem>
            <MenuItem value={"B-"}>B-</MenuItem>
            <MenuItem value={"AB-"}>AB-</MenuItem>
            <MenuItem value={"O-"}>O-</MenuItem>
          </Select>
          <FormHelperText>Select Blood Group carefully</FormHelperText>
        </FormControl>
        )
    }
}