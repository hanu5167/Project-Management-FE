import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div>
      <>
        <Navbar />
      </>
      <div>
        <main>{props.children}</main>
      </div>
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
