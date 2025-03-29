import { useEffect, useState } from "react";
import CardInformation from "../Components/CardInformation";

const Blog = () => {
  const [savedata, setSaveData] = useState([]);

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

  return (
    <div className="md:mx-20">
      <div className="md:flex md:gap-2 md:flex-wrap md:mx-20 mx-25">
        {savedata.map((dat) => {
          return (
            <>
              <CardInformation
                judul={dat.judul}
                subJudul={dat.subJudul}
                gambar={dat.gambar}
              ></CardInformation>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
