// Parameters (props): { navItems }
const Navbar = ({ brandName = 'CarCo' }) => {
  // In a real app, navItems would likely be passed as props or managed by a router.
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{brandName}</h1>
      </div>
      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">Car Listing</a>
        <a href="#">Order</a>
      </div>
    </nav>
  );
};

export default Navbar;