import React from 'react';
import {connect} from 'react-redux';
import * as dashboardActions from '../../store/actions/allActions';
import classes from './Dashboard.module.css';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Dashboard = props=>{

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


    const list = (
        <List>
            <ListItem button onClick ={toggleDrawer()}>
                <ListItemText inset primary='Close' style={{fontWeight:'bolder'}} />
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText inset primary='Dashboard' />
            </ListItem>
            <ListItem button>
                <ListItemText inset primary='Search Jobs' />
            </ListItem>
            <ListItem button>
                <ListItemText inset primary='My Applications' />
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText inset primary='Profile' />
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
            <AppBar title='Jobbo'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick = {props.openDrawer}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer variant='temporary' anchor='left' open={props.showDrawer} onClose={props.closeDrawer}>
                {list}
            </Drawer>
            <div className={classes.sideDrawer}>
            </div>
            <div className={classes.workspace}>
                
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