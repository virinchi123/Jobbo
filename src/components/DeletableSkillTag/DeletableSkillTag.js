import React from 'react';
import classes from './DeletableSkillTag.module.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const SkillTag = props => {
    const deleteHandler=event=>{
        props.delete(props.skill)
    }
    return (
        <div className={classes.container}>
            <p>{props.skill}</p>
            <IconButton onClick={deleteHandler} style={{padding:0}}>
                <ClearIcon/>
            </IconButton>
        </div>
    )
}

export default SkillTag;