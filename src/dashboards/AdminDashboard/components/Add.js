import { useContext, useEffect, useRef } from "react";
import { TitleContext } from "../../../context/TitleContext";
import { AuthContext } from "../../../context/AuthContext";
const Add = () => {
  const { setTitle } = useContext(TitleContext);
  const { token } = useContext(AuthContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const addAdmin = async (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    const response = await fetch(
      `${process.env.REACT_APP_API_ADMIN_REGISTER}`,
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        
         
        },
      
      }
    );
    const json = await response.json();
    console.log(json)
    if (json.success) alert(json.messages);
  };

  useEffect(() => {
  setTitle("Add new admin");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h4 class="block w-full text-center text-gray-800 text-2xl font-bold mb-3">
          Add new Admin
        </h4>
       
          <div class="flex flex-col mb-4">
            <label
              class="mb-2 font-bold text-lg text-gray-900"
              for="first_name"
            >
              Name
            </label>
            <input
              ref={nameRef}
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
            ref={emailRef}
              class="border py-2 px-3  text-neutral-900"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="password">
              Password
            </label>
            <input
            ref={passwordRef}
              class="border py-2 px-3  text-neutral-900"
              type="password"
              name="password"
              id="password"
            />
          </div>
        
          
          <button onClick={()=>addAdmin()}  class="ml-32 mt-3 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Create admin</button>
      </div>
    </>
  );
};

export default Add;
