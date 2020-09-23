import React from 'react';

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
    if(level.contains('Secondary')){
        board=props.board;
        start= props.start;
    }
    const end=props.end;
    const percentage = props.percentage;
    let degree = null;
    if(!level.contains('Secondary')){
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
    ;

    return(
        <React.Fragment>
            <p><b>{level}</b></p>
            {degreeCode}
            {institute}
            {boardCode}
            {durationCode}
            {percentage}
        </React.Fragment>
    )

}

export default Education;