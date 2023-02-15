import React from 'react';
 import { useContext,useEffect ,useRef } from "react";
  import { TitleContext } from "../../../context/TitleContext";
    import { AuthContext } from "../../../context/AuthContext";
// import { Button } from "@mui/material";
   function AddBill() {
   const { setTitle } = useContext(TitleContext);
      const { token } = useContext(AuthContext);
     const amountRef = useRef();
      const phoneRef = useRef();

  const addBill = async (e) => {
      const amount = amountRef.current.value;
      const  phone = phoneRef.current.value;
    
    const response = await fetch(
      `${process.env.REACT_APP_API_ADD_BILL}`,
      {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          phone: phone,
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
  setTitle("Add New Bill ");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h4 class="block w-full text-center text-gray-800 text-2xl font-bold mb-3">
          ADD NEW BILL
        </h4>
       
          <div class="flex flex-col mb-4">
            <label
              class="mb-2 font-bold text-lg text-gray-900"
              for="first_name"
            >
              AMOUNT
            </label>
            <input
               ref={amountRef}
              class="border py-2 px-3 text-neutral-900"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label class="mb-2 font-bold text-lg text-gray-900" for="email">
              PHONE NUMBER
            </label>
            <input
               ref={phoneRef}
              class="border py-2 px-3  text-neutral-900"
              type="text"
              name="phone"
              id="phone"
            />
          </div>
        
          
          <button 
             onClick={()=>addBill()} 
           class="ml-32 mt-3 h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Create admin</button>
      </div>
    </>
  );
};

export default AddBill
