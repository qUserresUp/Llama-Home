
import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import llamaGuardian from '../../../assets/llamaGuardian.jpg';

export default function(){
    return (
    <Fragment >
        <CardMedia 
            image={llamaGuardian}
            title="left img"
            style={{position: 'relative', left:'10%', width: '70%', height: '300px', margin:'30px'}}
        />
        <CardContent >
            <Typography component="body1" variant="body1">
            Llamas make excellent guards for herds of small animals. They are very social and will ‘adopt’ a group of sheep or goats as their own herd. Then they will protect the herd by chasing off coyotes and other predators.
            </Typography>
        </CardContent>
    </Fragment>
    )
}
