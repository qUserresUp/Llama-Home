import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({

    card: {
        position: 'relative',
        width: '80%',
        left: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#FF8E53',
        marginTop: '30px',
        
    },
    title: {
        position: 'relative',
        width: '90%',
        background: 'pink',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleImg: {
        height: 100,
        width: 100,
    },
    content: {
        background: '#FF8E53',
        width: '90%',
    }
    
}));

const FunFactsPage = props => {
    const classes = useStyles();
    let mediaQ = useMediaQuery('(min-width:600px)');

    const mediaStyle = mediaQ ? null : {width: '98%', left: '1%'}
    return (
        <Fragment>

                <Card className={classes.card} raised style={mediaStyle}>
                    <div className={classes.title}>
                        <CardMedia 
                            className={classes.titleImg}
                            image={props.lImg}
                            title="left img"
                        />
                        <CardContent>
                            <Typography component="h3" variant="h3">
                                {props.title}
                            </Typography>

                        </CardContent>
                        <CardMedia 
                            className={classes.titleImg}
                            image={props.rImg}
                            title="right img"
                        />
                    </div>
                    <div className={classes.content}>
                        {props.children}
                    </div>
                </Card>

        </Fragment>
    )
}

export default FunFactsPage;