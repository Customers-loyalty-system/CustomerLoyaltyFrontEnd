import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { TitleContext } from "../../../context/TitleContext";
<<<<<<< HEAD
import {  Modal,   } from "antd";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
=======
>>>>>>> 118cf3b39055844a8cf5714131a343aeb741f879
const List = () => {
  const { setTitle } = useContext(TitleContext);
  const [admins, setAdmins] = useState([]);
  const { token ,user} = useContext(AuthContext);
  const [adiminId, setadiminId] = useState();
  const [deleteadmin, setDeleteadmin] = useState(false);
  const [Index, setIndex] = useState();
  
  const getAdmins = async () => {
    const response = await fetch(`http://localhost:3002/api/v1/admins`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    if (json.success) {
      const newadmins = [...json.data];
        const findeind = newadmins.filter((i) => i.id !== user.id);
        setAdmins(findeind);
    }
  };

  const handleDelelteAdminClose = () => {
    setDeleteadmin(false);
  };


  const removeAdmin = async (id) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_GET_DELETE_ADMIN}/${adiminId} `,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        const newadmins = [...admins];
        const findeind = newadmins.filter((i) => i.id !== id);
        setAdmins(findeind);
        setDeleteadmin(false)
      }
    
  };

 

  useEffect(() => {
    setTitle("Admis Lists");
    getAdmins();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6>ADMINS </h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      ADMIN NAME
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                     ADMIN EMAIL
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      CREATED ACCOUNT
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      DELETE ADMIN
                    </th>
                  </tr>
                </thead>

                {admins?.map((admin, i) => {
                  return (
                    <tbody>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 font-semibold leading-tight text-xs">
                            <div>{admin?.name}</div>
                          </p>
                        </td>
                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{admin?.email}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{admin?.createdAt.substring(0,10)}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <button
                              onClick={() => {
                                setadiminId(admin.id);
                                setDeleteadmin(true);
                                setIndex(i);
                              }}
                              class=" h-10 text-white bg-red-600 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              DELETE
                            </button>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Dialog
          open={deleteadmin}
          onClose={handleDelelteAdminClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to delete this configuration?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you delete this configuration it will affect the old members
              tiers , However, now you can use the same points amount now for
              another configuration.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ border: "0px" }}
              onClick={handleDelelteAdminClose}
            >
              Disagree
            </Button>
            <Button onClick={removeAdmin}>Agree</Button>
          </DialogActions>
        </Dialog>
    </div>
     
  );
};

export default List;
