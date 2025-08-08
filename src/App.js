import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./components/common/HomePage"));
const Login = lazy(() => import("./components/auth/Login"));
const SignUp = lazy(() => import("./components/auth/SignUp"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Page Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
