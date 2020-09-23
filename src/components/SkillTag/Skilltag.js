import React from 'react';
import classes from './SkillTag.module.css';

const SkillTag=props=>{
    return(
        <div className={classes.container}>
            <p>{props.skill}</p>
        </div>
    )
}

export default SkillTag;