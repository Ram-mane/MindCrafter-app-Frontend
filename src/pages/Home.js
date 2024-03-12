import { Container } from "reactstrap";
import NewFeed from "../components/NewFeed";
import Base from "./Base";

const Home=()=>{
    return(
        <Base>
       <Container className="mt-3">
           <NewFeed/>
       </Container>
      </Base>
    );
};
export default Home;