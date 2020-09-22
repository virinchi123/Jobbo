import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classes from './JobCard.module.css';
import Box from '@material-ui/core/Box';


const JobCard = props =>{
    return(
    <Card className={classes.card} style={{display:'flex',justifyContent:'space-between'}}>
        <CardContent>
            <Box>
                <Typography variant='display4'>{props.company}</Typography>
                <Typography variant='display6'>Company</Typography>
            </Box>
        </CardContent>
    </Card>
    )
}

export default JobCard;