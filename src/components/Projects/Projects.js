import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 395,
      marginBottom: 15
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
  };

function Projects(props)  {
    const { classes } = props;
    
    return(
        <div className="projects">
            <h2>Projects</h2>
            <div className={classes.cards}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="WdOpenMenu"
                            className={classes.media}
                            height="300"
                            image="https://i.ibb.co/mXXf6J0/Screen-Shot-2018-10-30-at-3-33-21-PM.png" 
                            title="OpenMenu"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                OpenMenu
                            </Typography>
                            <Typography component="p">
                                Custom menu/recipe maker. Built with React.js and Loopback/MongoDB
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/SparkDevTeams/wd_OpenMenu">
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </a>
                        <a href="https://openmenudemo.appspot.com/">
                            <Button size="small" color="secondary">
                                Check it Out
                            </Button>   
                        </a>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Shellhacks"
                            className={classes.media}
                            height="300"
                            image="https://i.ibb.co/XS9tkNy/shellhacks.png"
                            title="Shellhacks"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Shellhacks
                            </Typography>
                            <Typography component="p">
                                FIU Shellhacks Hackathon Website. Built with React.js
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/ShellHacksFIU/ShellHacks-Web">
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </a>
                        <a href="https://shellhacks.net/">
                            <Button size="small" color="secondary">
                                Check it Out
                            </Button>   
                        </a>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Captain Citizen"
                            className={classes.media}
                            height="300"
                            image="https://i.ibb.co/CBS12yR/captaincitizen.png"
                            title="Captain Citizen"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Captain Citizen
                            </Typography>
                            <Typography component="p">
                                Shellhacks project. Site intended to promote community involvement. Built with
                                React.js
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/ShellHacks2018/CaptainCitizen">
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </a>
                        <a href="https://www.captaincitizen.com/">
                            <Button size="small" color="secondary">
                                Check it Out
                            </Button>   
                        </a>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Piquis"
                            className={classes.media}
                            height="300"
                            image="https://i.ibb.co/gr3hj0X/piquis.png"
                            title="Piquis"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Piquis
                            </Typography>
                            <Typography component="p">
                                Yelp based mobile app intended to help foodies find restauarants that serve
                                their favorite dish. Built with React Native and Google Cloud Platform
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <a href="https://github.com/asalinasj/piquis">
                            <Button size="small" color="primary">
                                Github
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </div>
        </div>
        );
    
}

export default withStyles(styles)(Projects);