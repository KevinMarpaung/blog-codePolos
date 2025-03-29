import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = (isDataAvaible) => {
  const navigate = useNavigate();
  const handleAddData = () => {
    navigate("/admin");
  };
  return (
    <div className="flex justify-between bg-black  text-white">
      <div className="flex items-center">
        <img className="w-20" src={logo} alt="Logo Blog" />
        <h1>CodePolos</h1>
      </div>
      {isDataAvaible && (
        <div className="flex items-center mx-10">
          <button
            onClick={handleAddData}
            className="bg-blue-500  rounded-md h-1/2 p-2 items-center"
          >
            tambah data
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
