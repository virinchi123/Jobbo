import React from 'react';
import classes from './Login.module.css';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import googleIcon from '../../assets/google-plus.svg';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as loginActions from '../../store/actions/allActions';


const Login = props =>{

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#0dca78',
            },
            secondary: {
                main: '#202020',
            },
        },
    });

    const emailHandler = event=>{
        console.log(loginActions)
        props.onChangeEmail(event.target.value);
    }

    const passwordHandler = event =>{
        props.onChangePassword(event.target.value);
    }

    return(
        <div className={classes.container}>
            <ThemeProvider theme={theme}>
            <div className={classes.leftBox}>
                <div className={classes.heading}>
                    <h1>Sign in to Account</h1>
                    <div className={classes.line} />
                </div>
                <div className={classes.alterSignIn}>
                    <div className={classes.icon}>
                        <img src={googleIcon} alt="google" />   
                    </div>
                </div>
                <p>or use your email account</p>
                    <form className={classes.form}>
                        <TextField style={{marginBottom: '1em'}} id={classes.password} label="Email" variant="outlined" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }} onChange={emailHandler}/>
                        <TextField id={classes.password} label="Password" type="password" variant="outlined" onChange={passwordHandler}/>
                    </form>
                    {/* <button type="button" className={classes.signin}>Sign In</button> */}
                    <Button style={{borderRadius: '2em',width: '10em', color: 'white'}} variant="contained" color="primary">Sign in</Button>
                    
            </div>
            <div className={classes.rightBox}>
                <div className={classes.rightBoxItem}>
                    <h1>Hello, Friend!</h1>
                </div>
                <div className={classes.rightBoxItem}>
                    <div className={classes.line} />
                </div>
                <div className={classes.rightBoxItem}>
                    <p>Sign up now and start your journey with us!</p>
                </div>
                <div className={classes.rightBoxItem}>
                    <Button style={{ borderRadius: '2em', width: '10em', color: 'white', border: '1.5px solid white',marginTop:'5em' }} variant="outlined" color="primary">Sign up</Button>
                </div>
            </div>
            </ThemeProvider>
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        email:state.login.email,
        password: state.login.password
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onChangeEmail:(email)=>dispatch(loginActions.setEmail(email)),
        onChangePassword:(password)=>dispatch(loginActions.setPassword(password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);