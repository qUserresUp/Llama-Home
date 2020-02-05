
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export default function(){
    return (
        <CardContent >
            <iframe style={{position:'relative',width: '80%',left:'10%',marginTop: '20px', marginBottom: '20px'}} width="60%" height="315" src="https://www.youtube.com/embed/-6P7e6tcSMU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Typography component="h3" variant="h3">
                Why Do Llamas Spit?
            </Typography>
            <Typography component="h5" variant="h5">
            1.Show of dominance over other llamas
            </Typography>
            <Typography component="body1" variant="body1">
                Spitting at a lower-ranked juvenile llama in the herd is also a form of hierarchical discipline. It is especially common when llamas are eating and want to keep others away from their food. A female llama can spit to show a male she's not interested in his mating advances, as well.
            </Typography>
            <Typography component="h5" variant="h5">
            2. Threatened by a predator
            </Typography>
            <Typography component="body1" variant="body1">
            A sufficiently vociferous spit attack is sometimes enough to scare off an assailant. Other methods of defense include kicking and charging.                            
            </Typography>
        </CardContent>
    )
}
