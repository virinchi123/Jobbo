import React from 'react';
import classes from './Job.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const Job = props =>{
    const profile = props.profile;
    const organisation = props.organization;
    const location = props.location;
    const start = props.start;
    const end = props.end;
    const description = props.description;
    let descriptionCode = null;
    if(description){
        descriptionCode = (<p>{description}</p>)
    }

    const deleteHandler = event =>{
        props.delete(props.job);
    }

    return(
        <Grid container>
            <Grid item md={11}>
                <div className={classes.container}>
                    <p><b>{profile}</b></p>
                    <p>{organisation}</p>
                    <p>{location}</p>
                    <p>{start}-{end}</p>
                    {descriptionCode}
                </div>
            </Grid>
            <Grid item md={1}>
                <IconButton onClick={deleteHandler}>
                    <DeleteIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Job;