import { useEffect, useState } from "react";
import CardInformation from "../Components/CardInformation";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [savedata, setSaveData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("datablog");
    if (data) {
      try {
        const parse = JSON.parse(data);
        setSaveData(parse);
        console.log("data berhasil diambil");
      } catch (error) {
        console.log("data gagal diambil", error);
      }
    }
  }, []);

  const handleAddData = () => {
    navigate("/admin");
  };

  return (
    <div className="md:mx-20">
      <div className="md:flex md:gap-2 md:flex-wrap md:mx-20 mx-25">
        {savedata && savedata.length > 0 ? (
          savedata.map((dat) => {
            return (
              <>
                <CardInformation
                  judul={dat.judul}
                  subJudul={dat.subJudul}
                  gambar={dat.gambar}
                ></CardInformation>
              </>
            );
          })
        ) : (
          <div className="text-center w-full flexjustify-center my-52">
            <button
              onClick={handleAddData}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              TAMBAH DATA
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
