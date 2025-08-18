import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Unauthorized from "./components/common/Unauthorized";
import ProtectedRoute from "./components/common/ProtectedRoute";
const HomePage = lazy(() => import("./components/common/HomePage"));
const Login = lazy(() => import("./components/auth/Login"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));
const Project = lazy(() =>
  import("./components/pages/project-management/Project")
);
const ViewProjectDetails = lazy(() =>
  import("./components/pages/project-management/ViewProjectDetails")
);

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Page Loading ...</div>}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute roles={["Admin", "Member"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
          </Route>
          <Route element={<ProtectedRoute roles={["Admin"]} />}>
            <Route path="/viewProject/:id" element={<ViewProjectDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
