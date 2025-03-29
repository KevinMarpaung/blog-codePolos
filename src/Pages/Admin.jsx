import { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [judul, setJudul] = useState("");
  const [subJudul, setSubJudul] = useState("");
  const navigate = useNavigate();
  const [gambar, setGambar] = useState(null);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const ambildatalama = JSON.parse(localStorage.getItem("datablog")) || [];
    const savedata = { judul, subJudul, gambar };
    const databaru = [...ambildatalama, savedata];
    localStorage.setItem("datablog", JSON.stringify(databaru));
    navigate("/");
  };

  const handleUploadGambar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white flex justify-center  ">
        <div className="flex  justify-center items-center  shadow h-96 mt-10 w-1/2">
          <form
            onSubmit={handleOnsubmit}
            className=" flex flex-col  shadow   p-10  gap-2 "
          >
            <label className="flex flex-col ">
              Judul :
              <input
                type="text"
                className="border  rounded-sm"
                onChange={(e) => {
                  setJudul(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col">
              Sub Judul :
              <input
                type="text"
                className=" border rounded-sm"
                onChange={(e) => {
                  setSubJudul(e.target.value);
                }}
              />
            </label>
            <label className=" flex flex-col ">
              Upload Gambar :
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadGambar}
                className="border rounded-md "
              />
            </label>
            {gambar && (
              <img
                src={gambar}
                alt="Preview"
                className="w-32 h-32 object-cover"
              />
            )}
            <button type="submit" className="rounded-md text-white bg-blue-600">
              kirim
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
