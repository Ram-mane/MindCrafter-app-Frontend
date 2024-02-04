import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Base from "./Base";


const Login=()=>{
    return(
        <Base>
        <Container className="my-3">
          <Row>
            <Col sm={{size:6, offset:3}}>
            <Card 
            body
            color="dark"
            inverse>
            <CardHeader>Login here !</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for ="userName">username</Label>
                  <Input
                  type="email"
                  name="userName"
                  placeholder="Enter registered email"
                  id="userName"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for ="password">Password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="password"
                  />
                </FormGroup>
                <Container className="text-center">
                  <Button color="primary" type="submit">
                    submit
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
            </Col>
          </Row>
        </Container>
        </Base>
    );
};
export default Login;