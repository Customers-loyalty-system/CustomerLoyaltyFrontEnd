import React, { useContext, useState } from "react";
import { Activities } from "./Activities";
import StanderdPoints from "./StanderdPoints";
import TierPoints from "./TierPoints";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AddRelation from "./AddRelation";
import SharePoints from "./SharePoints";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";
import UseFetch from "../../../custom/UseFetch";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

import { AuthContext } from "../../../context/AuthContext";
import { AlertContex } from "../../../context/AlertContext";
const MembershipCard = ({ membership, memberships, setMemberships }) => {
  const [openActivities, setOpenActivities] = useState(false);
  const [openAddRelation, setOpenAddRelation] = useState(false);
  const [openSharePoints, setOpenSharePoints] = useState(false);
  const [membershipDelete, setMembershipDelete] = useState(false);

  const { token } = useContext(AuthContext);
  const { toggleOn } = useContext(AlertContex);

  const deleteMembership = async (id) => {
    const response = await UseFetch(
      `${process.env.REACT_APP_API_MEMBERSHIP_DELETE}/${id}`,
      "DELETE",
      null,
      { Authorization: `Bearer ${token}` }
    );
    if (response.success) {
      toggleOn(response.messages, response.success);
      const newMembership = memberships.filter((i) => i.id !== id);
      setMemberships(newMembership);
      setMembershipDelete(false);
    }
    if (memberships.length === 0) toggleOn("YOU HAVE NO MEMBERSHIPS YET", false ); 
  };
  return (
    <div className="relative flex flex-col items-center shadow-soft-xl rounded-2xl bg-clip-border w-full bg-white ">
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
      <div
        id={"icons"}
        className="flex flex-row w-full justify-around mb-2 px-20 "
      >
        <div className="flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer bg-center items-center justify-center p-2   ">
          <DeleteIcon
            onClick={() => setMembershipDelete(true)}
            className=""
            sx={{
              fontSize: "25px",
            }}
          />
        </div>
        <Dialog
          open={membershipDelete}
          onClose={() => setMembershipDelete(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete your membership?"}
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={() => setMembershipDelete(false)}
              sx={{ color: "#334155" }}
              autoFocus
            >
              Disagree
            </Button>
            <Button
              sx={{ color: "#334155" }}
              onClick={() => deleteMembership(membership.id)}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        <div className=" flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer  bg-center items-center justify-center p-2  ">
          <ReceiptLongIcon
            onClick={() => {
              if (!openActivities) {
                setOpenActivities(true);
              } else {
                setOpenActivities(false);
              }
            }}
            className=""
            sx={{
              fontSize: "25px",
            }}
          />
        </div>
        <div className=" flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer  bg-center items-center justify-center p-2  ">
          <GroupAddIcon
            onClick={() => {
              if (!openActivities) {
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
        <div className=" flex rounded-full bg-gradient-to-tl hover:text-slate-700 cursor-pointer  bg-center items-center justify-center p-2  ">
          <GroupIcon
            onClick={() => {
              if (!openSharePoints) {
                setOpenSharePoints(true);
              } else {
                setOpenSharePoints(false);
              }
            }}
            className=""
            sx={{
              fontSize: "25px",
            }}
          />
        </div>
      </div>
      {openActivities && (
        <Activities
          key={membership.id}
          company={membership.company}
          openActivities={openActivities}
          setOpenActivities={setOpenActivities}
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
      {openSharePoints && (
        <SharePoints
          companyName={membership.company.name}
          key={membership.id}
          openSharePoints={openSharePoints}
          setOpenSharePoints={setOpenSharePoints}
        />
      )}
    </div>
  );
};

export default MembershipCard;
