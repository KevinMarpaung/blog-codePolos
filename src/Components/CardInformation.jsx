const CardInformation = ({ judul, subJudul, gambar }) => {
  return (
    <div className="w-72 my-2 shadow-md rounded-sm p-2 ">
      <div className="">
        <div className="p-2">
          <img className=" shadow-sm p-1" src={gambar} alt="" />
          <div className="shadow mt-2">
            <h1 className=" font-bold p-2 text-sm">{judul}</h1>
            <p className="p-2 text-sm opacity-20">{subJudul}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
