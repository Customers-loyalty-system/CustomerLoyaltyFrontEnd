import { useContext, useEffect } from "react";
import { TitleContext } from "../../../context/TitleContext";

const List = () => {
  const { setTitle } = useContext(TitleContext);
  useEffect(() => {
    setTitle("Admis Lists");
    // eslint-disable-next-line
  }, []);
  return <h1> List </h1>;
};

export default List;
