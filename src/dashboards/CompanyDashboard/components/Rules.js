import { useContext, useEffect, useState } from "react";
import { AlertContex } from "../../../context/AlertContext";
import { TitleContext } from "../../../context/TitleContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import UseFetch from "../../../custom/UseFetch";
import { AuthContext } from "../../../context/AuthContext";
const Rules = () => {
  const { setTitle } = useContext(TitleContext);
  const [rules, setRules] = useState([]);
  const { token } = useContext(AuthContext);

  const getRules = async () => {
    const response = await UseFetch(
      process.env.REACT_APP_API_GET_COMPANY_RULES,
      "GET",
      null,
      { "content-Type": "application/json", authorization: `Bearer ${token}` }
    );
    setRules([...response.data]);
  };
  useEffect(() => {
    setTitle("Create rules");
    getRules();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {rules.length === 0 ? (
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-full max-w-full px-3">
            <button className="absolute right-20 flex-none bg-gradient-to-tl from-blue-500 to-blue-300 leading-tight text-x bold border-2 rounded-full  shadow-transparent text-white p-2 px-3 hover:bg-gradient-to-tl hover:from-blue-600 hover:to-blue-400 ">
              Create Rule
            </button>
            <div className="relative flex flex-col min-w-0 mb-8 text-center mt-10">
              Your company doesn't have any rule yet. Select a trigger to add
              rule below.
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-wrap -mx-3">
          <div className="flex-none w-full max-w-full px-3">
            <button className="absolute right-20 flex-none bg-gradient-to-tl from-blue-500 to-blue-300 leading-tight text-x bold border-2 rounded-full  shadow-transparent text-white p-2 px-3 hover:bg-gradient-to-tl hover:from-blue-600 hover:to-blue-400 ">
              Create Rule
            </button>
            <div className="mt-10">
              {rules.map((rule, i) => (
                <div className=" flex flex-row mb-4 justify-center items-center">
                  <div className="bg-white  border-2 px-6 py-2 rounded-full">
                    when bill amount is {rule.condition} it will add {rule.earnedPoints} standerd points and {rule.earnedPoints} tiers points
                  </div>
                  <div className="ml-5 cursor-pointer  hover:text-red-600">
                    <HighlightOffIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
