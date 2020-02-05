import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import FunFactsCard from '../FunFactsCard/FunFactsCard';
import ContentOne from '../Content/ContentOne';
import ContentTwo from '../Content/ContentTwo';
import ContentThree from '../Content/ContentThree';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import llama1 from '../../../assets/llama1.jpeg';
import llamaGuard from '../../../assets/llamaGuard.jpg';
import llamaSpit from '../../../assets/llamaSpit.jpg';

const useStyles = makeStyles(theme => ({

    paperContainer: {
        position: 'relative',
        width: '80%',
        left: '10%',
        background: 'linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%);',
        padding: '30px 0px',
        borderRadius: '0.5cm',
    },
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

    const mediaStyle = mediaQ ? null : {width: '98%', left: '1%', padding: '5px 0px'}

    return (
        <Fragment>

            <Paper className={classes.paperContainer} elevation={5} style={{...props.style, ...mediaStyle}}>
{/*  Card One */}
                <FunFactsCard
                    lImg={llama1}
                    title="Llama vs Alpaca"
                    rImg={llama1}
                >
                    <ContentOne />
                </FunFactsCard>
{/*  Card Two */}
                <FunFactsCard
                    lImg={llamaGuard}
                    title="Excellent Guards"
                    rImg={llamaGuard}
                >
                    <ContentTwo />
                </FunFactsCard>

{/*  Card Three */}
                <FunFactsCard
                    lImg={llamaSpit}
                    title="Llama Spitting!"
                    rImg={llamaSpit}
                >
                    <ContentThree />
                </FunFactsCard>


            </Paper>


        </Fragment>
    )
}

export default FunFactsPage;