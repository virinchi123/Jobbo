import React from 'react';
import {connect} from 'react-redux';
import * as dashboardActions from '../../store/actions/allActions';
import classes from './Dashboard.module.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchResults from '../SearchResults/SearchResults';
import Resume from '../Resume/Resume';
import {Route,Switch,NavLink} from 'react-router-dom';

const Dashboard = props=>{
    console.log(props)
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        if (props.showDrawer) {
            props.closeDrawer()
        }
        else {
            props.openDrawer()
        }
    };

    const dashboardSender = event =>{
        props.history.push('/dashboard')
    }

    const profileSender = event =>{
        console.log('here')
        props.history.push('/profile')
    }

    const jobSender = event=>{
        props.history.push('/jobs')
    }


    const list = (
        <List>
            <ListItem button onClick ={toggleDrawer()}>
                <ListItemText inset primary='Close' style={{fontWeight:'bolder'}} />
            </ListItem>
            <Divider/>
            <ListItem button onClick={dashboardSender}>
                <ListItemText inset primary='Dashboard'/>
            </ListItem>
            <ListItem button onClick={jobSender}>
                <ListItemText inset primary='Search Jobs'/>
            </ListItem>
            <Divider/>
            <ListItem button onClick={profileSender}>
                <ListItemText inset primary='Profile'/>
            </ListItem>
            <ListItem button>
                <ListItemText inset primary='Sign Out' />
            </ListItem>
        </List>
    )

    /*let buttonCode = null;
    if(!props.showDrawer){
        buttonCode = <Button onClick={toggleDrawer()}>open</Button>
    }*/

    return(
        <div className={classes.container}>
            <AppBar title='Jobbo' style={{height: '60px'}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick = {props.openDrawer}>
                        <MenuIcon />
                    </IconButton>
                
                    <Divider orientation='vertical' style={{
                        height: 28, 
                        marginLeft: 4,
                        backgroundColor:'#CCCCCC',
                        boxSizing:'border-box'
                    }} light variant='fullWidth'/>
                </Toolbar>
            </AppBar>
            <Drawer variant='temporary' anchor='left' open={props.showDrawer} onClose={props.closeDrawer}>
                {list}
            </Drawer>
            <div className={classes.sideDrawer}>
            </div>
            <div className={classes.workspace}>
                <Switch>
                    <Route path='/profile' exact component={Resume}/>
                    <Route path='/jobs' exact component={SearchResults}/>
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
    return {
        showDrawer: state.dashboard.showDrawer
    };
}

const mapDispatchToProps = dispatch=>{
    return {
        openDrawer: () => dispatch(dashboardActions.openDrawer()),
        closeDrawer: () => dispatch(dashboardActions.closeDrawer())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);