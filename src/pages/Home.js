import { Col, Container, Row } from "reactstrap";
import NewFeed from "../components/NewFeed";
import Base from "./Base";
import CategorySideMenu from "../components/CategorySideMenu";

const Home=()=>{
    return(
        <Base>
        <Container className="mt-3">
         <Row>
            <Col  md={3} className="mt-5" >
                <CategorySideMenu/>
            </Col>
            <Col
             md={9}>
                <NewFeed/>
            </Col>
         </Row>
         </Container>
      </Base>
    );
};
export default Home;