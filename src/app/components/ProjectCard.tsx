import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActions, CardMedia, Link, Typography } from "@mui/material";




type ProjectType = {
    id:number;
    title: string;
    body1: string;
    body2?: string;
    image: string;
    links: { text: string; url: string }[];
  };

const ProjectCard = (props:ProjectType) => {
  return (
  <Card sx={{ maxWidth: 400,  maxHeight:500}} className="p-4 border shadow-lg">
       <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <div className="flex justify-center">
    <CardMedia
      sx={{ height: 180, width:260}}
      image={props.image}
      title="project's image"
      className="rounded"
    />
    </div>
    <CardContent sx={{ maxHeight: '160px', overflowY: 'auto' }} className="text-start">
      <Typography variant="body2" color="text.secondary">
      {props.body1}
      </Typography>
      <Typography variant="body2" color="text.secondary" className="font-semibold">
      {props.body2}
      </Typography>
     
    </CardContent >
    <CardActions className="">
    {props.links.map((link) => (
            <div key={Math.random()}>
              < Button size="small"> <Link href={link.url} target="_blank"> 
                  {link.text}
              </Link>
              </Button>
            </div>
    ))
}
</CardActions>


     

  </Card>
);
};

export default ProjectCard;
