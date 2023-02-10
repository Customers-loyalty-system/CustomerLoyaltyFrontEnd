import { useContext, useEffect } from "react";
import { TitleContext } from "../../../context/TitleContext";

const Add = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle("Add new admin");
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1> Add</h1>
    </>
  );
};

export default Add;
