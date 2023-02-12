import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { TitleContext } from "../../../context/TitleContext";

const Activitiy = () => {
  const { setTitle } = useContext(TitleContext);
  const [Activities, setActivities] = useState([]);
  const { token } = useContext(AuthContext);

  const getActivities = async () => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

    const response = await fetch(`http://localhost:3002/api/v1/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    console.log("ssssssssssss", json);

    if (json.success) {
      setActivities(json.data);
    console.log("ssssssssssss", json.data);

    }
    console.log("ssssssssssss", Activities);
  };

  useEffect(() => {
    setTitle("Admis Activities");
    getActivities();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6>Admins table</h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      TIER
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      STANDARD POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      STANDARD POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      STANDARD POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      STANDARD POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      TIERS POINTS
                    </th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      MEMBERSHIP NUMBER
                    </th>
                  </tr>
                </thead>

                {Activities?.map((Activitiy, i) => {
                  return (
                    <tbody>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <p className="mb-0 font-semibold leading-tight text-xs">
                            <div>{Activitiy?.memberId}</div>
                          </p>
                        </td>
                        <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{Activitiy?.type}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{Activitiy?.standardPoints}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{Activitiy?.tiresPoints}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{Activitiy?.billId}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            <div>{Activitiy?.createdAt}</div>
                          </span>
                        </td>
                        <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                          <span className="font-semibold leading-tight text-xs text-slate-400">
                            {" "}
                            <a
                              href="#"
                              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              delete
                            </a>
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

export default Activitiy;
