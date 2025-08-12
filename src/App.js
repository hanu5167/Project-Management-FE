import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./components/common/HomePage"));
const Login = lazy(() => import("./components/auth/Login"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Page Loading ...</div>}>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
