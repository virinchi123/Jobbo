import React from 'react';
import classes from './Project.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const Project = props =>{
    const title = props.title;
    const start = props.start;
    const end = props.end;
    const description = props.description;
    const link = props.link;

    let descriptionCode = null;
    let linkCode = null;

    if(description){
        descriptionCode=(<p>{description}</p>)
    }
    
    if(link){
        linkCode = (<a href={link}>{link}</a>)
    }

    const deleteHandler = event =>{
        props.delete(props.project);
    }

    return(
        <Grid container>
            <Grid item md={11}>
                <div className={classes.container}>
                    <p><b>{title}</b></p>
                    <p>{start}-{end}</p>
                    {descriptionCode}
                    {linkCode}
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

export default Project;