
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export default function(){
    return (
    <CardContent >
        <Typography component="h5" variant="h5">
        You don't know the differences between llama and alpaca? Let me tell you!
        </Typography>
        <iframe style={{position:'relative', left:'10%', marginTop: '20px', marginBottom: '20px'}} width="80%" height="315" src="https://www.youtube.com/embed/ZAbFzZAPuOE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <Typography component="h4" variant="h4">
            1.Size
        </Typography>
        <Typography component="body1" variant="body1">
        Llamas are bigger than alpacas, weighing up to 400 pounds. Average alpacas only get to about 150 pounds. For that reason, llamas are used more as pack-carrying animals on backcountry trips since they can carry heavier loads.
        </Typography>
        <Typography component="h4" variant="h4">
            2.Face
        </Typography>
        <Typography component="body1" variant="body1">
        Llamas have long banana-shaped ears while alpacas have straight ears and they are smaller. Their faces are also a bit different with llamas having a longer face, while an alpaca's face looks smushed.                            </Typography>
        <Typography component="h4" variant="h4">
            3.Fur
        </Typography>
        <Typography component="body1" variant="body1">
        You may have heard about alpaca wool, which is much softer than a llama's double-layered, coarse outer coat over a softer inner coat. Alpaca fleece has finer fiber and more of it; it comes in 22 colors! There are two different breeds of alpaca used for wool: the Suri and the Huacaya. Alpacas also have a single coat and their hair is better for people who may be allergic to sheep wool guard hairs.                             
        </Typography>
    </CardContent>
    )
}
