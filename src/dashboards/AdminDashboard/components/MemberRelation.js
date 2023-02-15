import React from "react";
import { TitleContext } from "../../../context/TitleContext";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import UseFetch from "../../../custom/UseFetch";
import { AlertContex } from "../../../context/AlertContext";
import { CleaningServices } from "@mui/icons-material";

function MemberRelation() {
  const { toggleOn } = useContext(AlertContex);
  const { setTitle } = useContext(TitleContext);
  const { token } = useContext(AuthContext);
  const [relations, setRelations] = useState([]);

  const getMemberRelation = async () => {
    const response = await UseFetch(
      `${process.env.REACT_APP_API_GET_MEMBERSHIPRELATION}`,
      "GET",
      null,
      { "content-Type": "application/json", authorization: `Bearer ${token}` }
    );
    if (await response.success) {
      console.log(response);
      setRelations([...response.data]);
      toggleOn(response.messages, response.success);
    }
  };
  console.log(relations);

  useEffect(() => {
    setTitle(" Member Relation");
    getMemberRelation();

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
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      DELETE ADMIN
                    </th>
                  </tr>
                </thead>

                {relations?.map((relation, i) => {
                  return (
                    <tbody>
                      <tr key={i}>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 font-semibold leading-tight text-xs">
                            <div>{relation.firstMemberId}</div>
                          </p>
                        </td>
                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{relation?.secondMemberId}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{relation?.companyId}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{relation?.type}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{relation?.createdAt.substring(0,10)}</div>
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
}

export default MemberRelation;
