import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Welcome Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to TaskFlow
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your ultimate project management tool for organizing tasks,
          collaborating with your team, and boosting productivity.
        </Typography>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🗂️ Manage Projects
              </Typography>
              <Typography variant="body2">
                Create, update, and manage projects with clear milestones and
                deadlines.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                ✅ Track Tasks
              </Typography>
              <Typography variant="body2">
                Assign tasks, set priorities, and track progress in real-time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                💬 Collaborate
              </Typography>
              <Typography variant="body2">
                Communicate and share updates with your team directly within the
                app.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* About Section */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          About TaskFlow
        </Typography>
        <Typography variant="body1" color="textSecondary">
          TaskFlow is built with the MERN stack (MongoDB, Express.js, React.js,
          and Node.js). Our goal is to provide a user-friendly and efficient
          environment for project tracking, task assignment, and team
          collaboration.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
