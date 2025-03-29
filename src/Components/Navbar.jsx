import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-black  text-white">
      <div className="flex items-center">
        <img className="w-20" src={logo} alt="Logo Blog" />
        <h1>CodePolos</h1>
      </div>
    </div>
  );
};

export default Navbar;
