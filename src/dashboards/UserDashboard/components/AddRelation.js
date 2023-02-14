import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";

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
  console.log(inputValue);
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
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Add Relation</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="Phone"
            label="Phone"
            type="Phone"
            fullWidth
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                phone: e.target.value,
              });
            }}
          />
          <TextField
            value={companyName}
            autoFocus
            disabled={true}
            margin="dense"
            id="companyName"
            type="phone"
            fullWidth
          />
          <FormControl fullWidth sx={{ mt: 1 }}>
            <Select
              onChange={(e) => {
                setInputValue({
                  ...inputValue,
                  type: e.target.value,
                });
              }}
              defaultValue={"Friend"}
            >
              <MenuItem value={"Friend"}>Friend</MenuItem>
              <MenuItem value={"Family"}>family</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (openAddRelation) {
                setOpenAddRelation(false);
              }
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (data.length > 0 && openAddRelation) {
                setOpenAddRelation(false);
              }
              createRelation();
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>}
    </div>
  );
};

export default AddRelation;
