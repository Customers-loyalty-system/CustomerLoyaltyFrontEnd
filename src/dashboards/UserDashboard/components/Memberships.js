import { useContext, useEffect } from "react";
import { TitleContext } from "../../../context/TitleContext";

const Memberships = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Add new admin");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="flex flex-wrap -mx-3 ">
      <div className="w-full max-w-full  px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="self-center bg-blue-500 h-40 w-40  border-8  border-solid  border-lime-300 rounded-full">
              test
              </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Memberships;
