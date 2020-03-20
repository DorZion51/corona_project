import React, {Component} from 'react';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect,useHistory} from "react-router-dom";

import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={userId:'',
            password:'',
        };

        this.classes =  makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };




    onSubmit (e){
        e.preventDefault();
        console.log(this.state.userId);
        console.log(this.state.password);

        axios.post('http://172.20.10.6:3000/users/login',{userId:this.state.userId,password:this.state.password})
            .then(response => {
                console.log(response);
                if(response.data){
                    window.location.href='http://localhost:3000/usertable';
                }
                else{
                    alert("userid or password incorrect");
                }
            })
            .catch(error => {
                console.log('get serviceProvider user details error ', error)
                return error;
            });
    }


    render(){
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={this.classes.paper}>
                    <Avatar className={this.classes.avatar}>

                    </Avatar>
                    <Typography component="h1" variant="h5">
                        QRona Management
                    </Typography>
                    <form className={this.classes.form} onSubmit={this.onSubmit} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userId"
                            label="UserId"
                            name="userId"
                            autoComplete="userId"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        );
    }

}


export default SignIn;
