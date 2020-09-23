import React from 'react';
import classes from './Education.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

const Education = props =>{
    let level = null;
    switch (props.type){
        case 'secondary':
            level='Secondary(X)';
            break;
        case 'senior secondary':
            level='Senior Secondary(XII)';
            break;
        case 'undergrad':
            level='Undergraduate';
            break;
        case 'grad':
            level='Graduate';
            break;
        case 'diploma':
            level='Diploma';
            break;
        case 'pg':
            level='Post Graduation';
            break;
        case 'phd':
            level='Doctorate';
            break;
        default:
            level='Undergrad'
    }

    const institute = props.institute;
    let board = null;
    let start = null;
    if(level.includes('Secondary')){
        board=props.board;
        start= props.start;
    }
    const end=props.end;
    const percentage = props.percentage;
    let degree = null;
    if(!level.includes('Secondary')){
        degree=props.degree;
    }

    let degreeCode = null;
    if(degree){
        degreeCode = (<p>{degree}</p>);
    }

    let durationCode = (<p>Year of Completion:{end}</p>);
    if(start){
        durationCode=(<p>{start}-{end}</p>)
    }

    let boardCode= null;
        if(start){
            boardCode=(<p>{board}</p>)
        }
    
    const deleteHandler = event=>{
        props.delete(props.education)
    }

    return(
        <Grid container>
            <Grid item md={11}>
                <div className={classes.container}>
                    <p><b>{level}</b></p>
                    {degreeCode}
                    <p>{institute}</p>
                    {boardCode}
                    {durationCode}
                    <p>{percentage}%</p>
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

export default Education;