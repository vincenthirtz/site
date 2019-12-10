import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dg from "img/dg.png";
import l from "img/lemarchand.png";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
});
const Portfolio = () => {
    const classes = useStyles();
    const cards = [
        {
            key: 1,
            title: "Denis Godefroy",
            image: dg,
            description: "Site artiste peintre",
            link: "http://denisgodefroy.fr",
        },
        {
            key: 2,
            title: "Lemarchand",
            image: l,
            description: "Site vitrine entreprise normande",
            link: "https://www.lemarchand-sas.plateforms.fr/",
        }
    ]

    return (
        <React.Fragment>
            {cards && cards.map(card => (
                <Card key={card.key} className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={card.image}
                            title={card.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a target="_blank" rel="noopener noreferrer" href={card.link}>Voir</a>
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </React.Fragment>
    );
}

export default Portfolio;
