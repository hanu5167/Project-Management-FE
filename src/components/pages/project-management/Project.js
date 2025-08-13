import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, getProjectById } from "../../../services/Projects";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const projectDetails = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects);
  }, [dispatch]);

  const handleViewDetails = (id) => {
    console.log("Selected Project ID:", id);
    dispatch(getProjectById(id));
  };

  return (
    <Grid container spacing={2}>
      {projectDetails?.projectsList?.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {project.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                👥 Total People: {project.members?.length}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleViewDetails(project._id)}
              >
                <Link to="/view-projects-details">View More Details</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
