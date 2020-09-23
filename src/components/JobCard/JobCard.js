import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './JobCard.module.css';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import SkillTag from '../SkillTag/Skilltag';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


const JobCard = props =>{

    let skillCode = null;
    if(props.job.skills.length>0){
        skillCode = props.job.skills.map(skill=>{
            return(
                <SkillTag skill={skill}/>
            )
        })
    }

    let requirementCode = null;
    if(props.job.requirements.length>0){
        requirementCode = props.job.requirements.map(req=>{
            return(
                <SkillTag skill={req}/>
            )
        })
    }

    const cardBoldText={
        fontSize:'1rem'
    }

    const cardGrayText={
        fontSize: '0.8rem',
        color:'#777777'
    }

    const handleExpandClick = (event) => {
        const job=props.job;
        props.toggle(job);
    };

    const classed = useStyles();

    return(
    <Card className={classes.card} style={{borderRadius:'20px',width:'100%',marginTop:'1%'}}>
        <CardContent style={{padding:0,display:'flex',alignItems:'center'}}>
            <Grid container>
                <Grid item md={11} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'space-evenly',
                    padding: '2% 5%'
                }}>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h4' style={cardBoldText}>{props.role}</Typography>
                        <Typography variant='h6' style={cardGrayText}>{props.company}</Typography>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h4' style={cardBoldText}>{props.location}</Typography>
                        <Typography variant='h6' style={cardGrayText}>Location</Typography>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h4' style={cardBoldText}>{props.salary}</Typography>
                        <Typography variant='h6' style={cardGrayText}>Monthly Salary</Typography>
                    </Box>
            </Grid>
            <Grid item md={1} style={{display:'flex'}}>
                <Divider orientation='vertical' style={{
                    height: 28,
                    marginLeft: 4,
                    backgroundColor: '#CCCCCC',
                    boxSizing: 'border-box',
                    marginTop:'27%'
                }} />
                        <ListItem button style={{ display: 'flex', aligItems: 'center', justifyContent: 'center' }} onClick={handleExpandClick} >
                            <ExpandMoreIcon className={clsx(classed.expand, {
                                [classed.expandOpen]: props.expanded,
                            })}/>
                </ListItem>
            </Grid>
            </Grid>
        </CardContent>
            <Collapse in={props.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Divider style={{marginBottom:'1%'}}/>
                    <Box style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                        <Typography variant='h5'>
                            About {props.company}
                        </Typography>
                        <Typography variant='h6' style={cardGrayText}>
                            {props.job.companyDescription}
                        </Typography>
                        <Typography variant='h5'>
                            About the job
                        </Typography>
                        <Typography variant='h6' style={cardGrayText}>
                            {props.job.jobDescription}
                        </Typography>
                        <Typography variant='h5'>
                            Skill(s) Required
                        </Typography>
                        <Box style={{display:'flex',flexWrap:'wrap'}}>
                            {skillCode}
                        </Box>
                        <Typography variant='h5'>
                            Candidate Requirements
                        </Typography>
                        <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {requirementCode}
                        </Box>
                    </Box>
                </CardContent>
            </Collapse>
    </Card>
    )
}

export default JobCard;