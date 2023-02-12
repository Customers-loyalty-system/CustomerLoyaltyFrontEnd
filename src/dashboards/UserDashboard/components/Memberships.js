import { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../context/TitleContext";
import UseFetch from "../../../custom/UseFetch";
import StanderdPoints from "./StanderdPoints";
import TierPoints from "./TierPoints";
import { AlertContex } from "../../../context/AlertContext";
import { AuthContext } from "../../../context/AuthContext";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Activities } from "./Activities";

const Memberships = () => {
  const { setTitle } = useContext(TitleContext);
  const { token } = useContext(AuthContext);
  const { toggleOn } = useContext(AlertContex);
  const  [popUp ,setPopUp] = useState(false)

  const [memberships, setMemberships] = useState([]);
  const getMemberships = async () => {
    const response = await UseFetch(
      process.env.REACT_APP_API_MEMBERSHIPS,
      "GET",
      null,
      { "Content-Type": "Application/json", authorization: `Bearer ${token}` }
    );
    if ((await response.data.length) > 0) {
      toggleOn(response.messages, response.success);
      setMemberships([...response.data]);
    } else {
      toggleOn(response.messages, response.success);
    }
  };
  useEffect(() => {
    setTitle("Memperships");
    getMemberships();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="w-full flex-wrap -mx-3  ">
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-6">
          {memberships?.map((membership, i) => {
            return (
              <div
                key={i}
                className="relative flex flex-col items-center shadow-soft-xl rounded-2xl bg-clip-border w-full bg-white "
              >
                <div className="relative w-full flex flex-row mb-1 mt-3  ">
                  <img
                    alt="company logo"
                    src={membership.company.logo}
                    className="w-8 h-8 ml-5 object-cover border mr-3 rounded-full "
                  />
                  <h5 className="text-center font-bold text-black capitalize ">
                    {membership.company.name}
                  </h5>
                </div>
                <StanderdPoints membership={membership} />

                <hr className="h-px w-full mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
                <TierPoints membership={membership} />
                <hr className="h-px w-full bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
                <div className="flex flex-row w-full justify-around mb-2 ">
                  <div  className="flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer bg-center items-center justify-center p-2   ">
                    <GroupAddIcon
                      className=""
                      sx={{
                        fontSize: "25px",
                      }}
                    />
                  </div>
                  {popUp && <Activities company ={membership.company} popUp = {popUp} setPopUp = {setPopUp}/>}
                  <div onClick={() => {
                    setPopUp(true)
                  }} className=" flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer  bg-center items-center justify-center p-2  ">
                    <ReceiptLongIcon
                      className=""
                      sx={{
                        fontSize: "25px",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Memberships;
