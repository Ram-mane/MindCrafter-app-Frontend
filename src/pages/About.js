import { useContext } from "react";
import userContext from "../context/userContext";
import Base from "./Base";

const About = () => {

    const user = useContext(userContext);
  return (
    
        <Base>
          <h2>This is my About component </h2>
          <h3>Hello : {user.name} your id is {user.id}</h3>
        </Base>
     
  );
};
export default About;
