import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../services/Projects";

export default function ProjectList() {
  const projectDetails = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects);
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {projectDetails?.projectsList?.map((project) => (
        <Grid item key={project._id} xs={12} sm={6} md={4}>
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
              <Link to={`/viewProject/${project._id}`}>View More Details</Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
