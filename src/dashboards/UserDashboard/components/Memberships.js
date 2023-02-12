import { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../context/TitleContext";
import UseFetch from "../../../custom/UseFetch";
import { AuthContext } from "../../../context/AuthContext";
import StanderdPoints from "./StanderdPoints";
import TierPoints from "./TierPoints";

const Memberships = () => {
  const { setTitle } = useContext(TitleContext);
  const { token } = useContext(AuthContext);
  const [memberships, setMemberships] = useState([]);
  const getMemberships = async () => {
    const response = await UseFetch(
      process.env.REACT_APP_API_MEMBERSHIPS,
      "GET",
      null,
      { "Content-Type": "Application/json", authorization: `Bearer ${token}` }
    );
    if ((await response.data.length) > 0) {
      setMemberships([...response.data]);
    } else return;
  };

  useEffect(() => {
    setTitle("Add new admin");
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
                <div className="relative w-full flex flex-row mb-5 mt-3  ">
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Memberships;
