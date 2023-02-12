import { useContext, useEffect, useState } from "react";
import { TitleContext } from "../../../context/TitleContext";
import { AuthContext } from "../../../context/AuthContext";
import { Button } from "@mui/material";
const Update = () => {
  const { setTitle } = useContext(TitleContext);
  const { token, user ,login ,setUser} = useContext(AuthContext);
  const [data, setData] = useState({});
  const [sendContent, setSendContent] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });
  const updateAdmin = async () => {
    console.log(sendContent)
    const response = await fetch(`${process.env.REACT_APP_API_ADMIN_UPDATE}/${user.id}`,{
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body:JSON.stringify({...user})
        
      }
    );
    const json = await response.json();
    console.log(json);
     if (await json.success){

      login( { ...json.data, type: "admin" } ,token) 

    }
    

  };
  useEffect(() => {
    setTitle("Add new admin");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h4 class="block w-full text-center text-gray-800 text-2xl font-bold mb-3">
          update your account
        </h4>

        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">
            Name
          </label>
          <input
            value={user.name}

            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            class="border py-2 px-3 text-neutral-900"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="email">
            Email
          </label>
          <input
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
       
            class="border py-2 px-3  text-neutral-900"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div class="flex flex-col mb-4">
          <label class="mb-2 font-bold text-lg text-gray-900" for="password">
           New Password
          </label>
          <input
          
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
      
            class="border py-2 px-3  text-neutral-900"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button  onClick={() => updateAdmin()}  class="ml-32 mt-3 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          update admin account </button>

        <a
          class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
          href="/login"
        ></a>
      </div>
    </>
  );
};

export default Update;
