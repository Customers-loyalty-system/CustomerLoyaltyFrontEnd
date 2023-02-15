import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { TitleContext } from "../../../context/TitleContext";
const List = () => {
  const { setTitle } = useContext(TitleContext);
  const [admins, setAdmins] = useState([]);
  const { token ,user} = useContext(AuthContext);

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

  const removeAdmin = async (id) => {
    const answer = window.confirm("are you sure you want to delet the admin?");
    if (answer) {
      const response = await fetch(
        `${process.env.REACT_APP_API_GET_DELETE_ADMIN}/${id} `,
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
      }
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
                              onClick={() => removeAdmin(admin.id)}
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
    </div>
     
  );
};

export default List;
