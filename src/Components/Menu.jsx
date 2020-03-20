import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor(params){
        super(params);
        this.state={
            value:''
        }
        this.classes=makeStyles({
            root: {
                width: 500,
            },
        });
    }

    render() {
        return (
            <BottomNavigation
                value={this.state.value}
                onChange={(event, newValue) => {
                    this.setState({value:newValue});
                }}
                showLabels
                className={this.classes.root}
            >
                <Link to='/locationmanager'><BottomNavigationAction label="Manager of locations" icon={<SupervisorAccountIcon/>} /></Link>
                <Link to='/locations'><BottomNavigationAction label="Locations" icon={<LocationOnIcon />} /></Link>
                <Link to='/userpathlocation'><BottomNavigationAction label="Nearby" icon={<DirectionsWalkIcon />} /></Link>
                <Link to='/usertable'><BottomNavigationAction label="Users" icon={<PeopleIcon />} /></Link>
            </BottomNavigation>
        );
    }
}

export default Menu;
