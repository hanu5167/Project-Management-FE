
const navbarList = [
  { id: 1, navbName: "Home" },
  { id: 2, navbName: "Dashboard" },
  { id: 3, navbName: "Projects" },
  { id: 4, navbName: "About" },
  { id: 5, navbName: "Contact us" },
];

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center p-3">
      <div>
        <p className="mb-0 fw-bold">Logo</p>
      </div>
      <ul className="list-unstyled d-flex gap-4 mb-0">
        {navbarList.map(({ id, navbName }) => (
          <li key={id}>{navbName}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
