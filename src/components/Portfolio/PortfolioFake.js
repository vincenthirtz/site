import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
    card: {
        width: 240,
        margin: 20,
    },
    media: {
        height: 250,
    },
});

const PortfolioFake = () => {
    const classes = useStyles();
    return (
        <Card key={Math.floor(Math.random() * 1000000)} className={classes.card}>
            <CardActionArea>
                <Skeleton variant="rect" className={classes.media} />
                <CardContent>
                    <Skeleton height={10} style={{ marginBottom: 6 }} />
                    <Skeleton height={10} width="80%" />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Skeleton height={10} style={{ marginBottom: 6 }} />
                <Skeleton height={10} width="80%" />
            </CardActions>

        </Card>
    )
}

export default PortfolioFake;