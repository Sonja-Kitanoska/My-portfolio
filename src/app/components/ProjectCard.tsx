import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  CardActions,
  CardMedia,
  Link,
  Tooltip,
  Typography
} from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";

type ProjectType = {
  id: number;
  title: string;
  body1: string;
  body2?: string;
  image: string;
  links: { text: string; url: string }[];
};

const ProjectCard = (props: ProjectType) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Card
      sx={{ maxWidth: 400, maxHeight: 500 }}
      className="p-4 border shadow-lg"
      style={{
        backgroundColor: theme === "light" ? "white" : "#525B66",
        color: theme === "light" ? "black" : "white"
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <div>
        <CardMedia
          sx={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
            marginBottom: "10px"
          }}
          image={props.image}
          title="project's image"
          className="rounded"
        />
      </div>
      <CardContent
        sx={{ maxHeight: "160px", overflowY: "auto" }}
        className="text-start"
      >
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            backgroundColor: theme === "light" ? "white" : "#525B66",
            color: theme === "light" ? "black" : "white"
          }}
        >
          {props.body1}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          className="font-semibold"
        >
          {props.body2}
        </Typography>
      </CardContent>
      <CardActions className="">
        {props.links.map((link) => (
          <div key={Math.random()}>
            <Button size="small">
              {" "}
              <Link href={link.url} target="_blank">
                {link.text}
              </Link>
            </Button>
          </div>
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
