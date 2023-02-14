import React, { useState } from "react";
import { Activities } from "./Activities";
import StanderdPoints from "./StanderdPoints";
import TierPoints from "./TierPoints";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AddRelation from "./AddRelation";

const MembershipCard = ({membership}) => {
  const [popUp, setPopUp] = useState(false);
  const [openAddRelation, setOpenAddRelation] = useState(false);
  return (
    <div  
      className="relative flex flex-col items-center shadow-soft-xl rounded-2xl bg-clip-border w-full bg-white "
    >
      <div className="relative w-full flex flex-row mb-1 mt-3  ">
        <img
          alt="company logo"
          src={membership.company.logo}
          className="w-8 h-8 ml-5 object-cover border mr-3 rounded-full "
        />
        <h6 className="text-center font-bold text-black capitalize ">
          {membership.company.name}
        </h6>
      </div>
      <StanderdPoints membership={membership} />

      <hr className="h-px w-full mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
      <TierPoints membership={membership} />
      <hr className="h-px w-full bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent " />
      <div className="flex flex-row w-full justify-around mb-2 ">
        <div className="flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer bg-center items-center justify-center p-2   ">
          <GroupAddIcon
          onClick={() => {
            if(!openAddRelation){
              setOpenAddRelation(true);
            } else {
              setOpenAddRelation(false);
            }
          }}
            className=""
            sx={{
              fontSize: "25px",
            }}
          />
        </div>
     
        <div
          
          className=" flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer  bg-center items-center justify-center p-2  "
        >
          <ReceiptLongIcon
          onClick={() => {
            if(!popUp){
              setPopUp(true);
            } else {
              setPopUp(false)
            }
          }}
            className=""
            sx={{
              fontSize: "25px",
            }}
          />
        </div>
      </div>
      {popUp && (
          <Activities
            key={membership.id}
            company={membership.company}
            popUp={popUp}
            setPopUp={setPopUp}
          />
        )}
      {openAddRelation && (
          <AddRelation
            companyName={membership.company.name}
            key={membership.id}
            openAddRelation={openAddRelation}
            setOpenAddRelation={setOpenAddRelation}
          />
        )}
    </div>
  );
};

export default MembershipCard;
