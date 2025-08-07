import { Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import PageNotFound from "./components/common/PageNotFound";
import HomePage from "./components/common/HomePage";
import Layout from "./components/common/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
