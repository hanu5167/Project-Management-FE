import { useEffect, useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../services/Projects";
import { getAllTasks } from "../../services/Tasks";

const Dashboard = () => {
  const [stats, setStats] = useState({
    comments: 0,
    upcomingTasks: [],
  });
  const dispatch = useDispatch();

  const { projectsList } = useSelector((state) => state.projects);
  const { tasksList } = useSelector((state) => state.tasks);

  console.log("projectsList: ", projectsList);
  console.log("tasksList: ", tasksList);

  useEffect(() => {
    const mockTasks = [
      { id: 1, title: "Design Homepage", dueDate: "2025-08-20" },
      { id: 2, title: "Setup Backend API", dueDate: "2025-08-15" },
      { id: 3, title: "Create Landing Page", dueDate: "2025-09-01" },
    ];

    const mockComments = [
      { id: 1, text: "Need to update the wireframe" },
      { id: 2, text: "Backend endpoint is ready" },
      { id: 3, text: "Please review the pull request" },
    ];

    setTimeout(() => {
      setStats({
        comments: mockComments.length,
        upcomingTasks: mockTasks.filter(
          (task) => new Date(task.dueDate) > new Date()
        ),
      });
    }, 500);

    dispatch(getAllProjects);
    dispatch(getAllTasks);
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📊 Dashboard Overview
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Total Projects</Typography>
            <Typography variant="h4">{projectsList.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Total Tasks</Typography>
            <Typography variant="h4">{tasksList.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="h6">Comments</Typography>
            <Typography variant="h4">{stats.comments}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">⏳ Upcoming Deadlines</Typography>
        {stats.upcomingTasks.length > 0 ? (
          stats.upcomingTasks.map((task) => (
            <Paper key={task.id} sx={{ p: 2, my: 1 }}>
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body2">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </Typography>
            </Paper>
          ))
        ) : (
          <Typography>No upcoming deadlines</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
