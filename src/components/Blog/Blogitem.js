import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import * as Markdown from 'react-markdown'
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 240,
        margin: 20,
    },
    media: {
        height: 250,
    },
});

const BlogItem = (props) => {
    const { fields } = props;
    console.log(fields)
    const { content, icon, path, date, title } = fields;
    console.log("date ", date)
    const classes = useStyles();

    return (
        <Card key={title} className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={icon}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Markdown source={content.split(" ").splice(0, 20).join(" ").concat('...')} />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    to={{
                        pathname: `/blog/${path}`,
                        state: { fields }
                    }}
                >
                    En savoir plus
                    </Link>
                {moment(date).format("L")}
            </CardActions>
        </Card>
    )


}

export default BlogItem

