import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from '@mui/material/Box';
import UseFetch from "../../../custom/UseFetch";
import { AuthContext } from "../../../context/AuthContext";
import { AlertContex } from "../../../context/AlertContext";

const AddRelation = ({ companyName, openAddRelation, setOpenAddRelation }) => {
  const { token } = useContext(AuthContext);
  const { toggleOn } = useContext(AlertContex);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    companyName: companyName,
    phone: "",
    type: "",
  });
  const createRelation = async () => {
    const response = await UseFetch(
      `${process.env.REACT_APP_API_ADD_RELATION}`,
      "POST",
      inputValue,
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    );
    toggleOn(response.messages, response.success);
    if (response.success) {
      setData([response.data]);
      toggleOn(response.messages, response.success);
    }
  };

  return (
    <div>
     {data.length === 0 && <Dialog
        open={openAddRelation}
        onClose={() => {
          if (openAddRelation) {
            setOpenAddRelation(false);
          }
        }}
      >
        <DialogTitle>Add Relation</DialogTitle>
        <DialogContent sx={{ width: "450px" }}>
            <div className="col-span-full">
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                fullWidth
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    phone: e.target.value,
                  });
                }}
                autoComplete="phone"
                required=""
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              />
            </div>
       
            <div className="col-span-full">             
              <label
                htmlFor="type"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                fullWidth
                onChange={(e) => {
                  setInputValue({
                    ...inputValue,
                    type: e.target.value,
                  });
                }}
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
              >
                <option value={"Friend"}>Friend</option>
                <option value={"Family"}>Family</option>
                <option value={"Fother"}>Fother</option>
                <option value={"Mother"} >Mother</option>
                <option value={"Sister"}>Sister</option>
                <option value={"Brother"}>Brother</option>
                <option value={"Wife"}>Wife</option>
                <option value={"Husband"}>Husband</option>
                <option value={"Twin"}>Twin</option>
                <option value={"uncle"}>uncle</option>
              </select>
            </div>
        </DialogContent>
        <DialogActions>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button
          size={"small"}
          variant="contained" 
          sx={{
            outline:"none",
            border:"none",
            stroke:"none",
            "&:hover": { backgroundColor: "#1976d2" }
          }}
            onClick={() => {
              if (openAddRelation) {
                setOpenAddRelation(false);
              }
            }}
          >
            Cancel
          </Button>
          <Button
          size={"small"}
          variant="contained" 
          sx={{
            outline:"none",
            border:"none",
            stroke:"none",
            "&:hover": { backgroundColor: "#1976d2" }
          }}
            onClick={() => {
              if (data.length > 0 && openAddRelation) {
                setOpenAddRelation(false);
              }
              createRelation();
            }}
          >
            Add
          </Button>
          </Box>
        </DialogActions>
      </Dialog>}
    </div>
  );
};

export default AddRelation;
