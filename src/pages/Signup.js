
import {Row, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Base from "./Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-services";

const Signup=()=>{

  const [data , setData]= useState({

    name:'',
    email:'',
    password:'',
    mobileNo:'',
    gender:'',
    about:''

  });


  const [error, setError] = useState({
    errors:{},
    isError:'false'
  });

  // useEffect(()=>{console.log(data);},[data])

  const handleChange = (event, property)=>{
    
    setData({...data, [property]:event.target.value});
  };


  // submit form
  const submitForm= (event)=>{
    event.preventDefault()
    console.log(data);

    //data validation

    //call server api for sending data
    signUp(data).then((resp)=>{
      console.log("Success log");
    }).catch((error)=>{
      console.log(error)
      console.log("Error log");
    })

    // event.preventDefault()
    // try {
    //   const response = await signUp(data);
    //   console.log(response?.data);

    // } catch (error) {
    //   console.error(error);
    // }


  };


  // reset data
  const resetData=()=>{
    setData ({
      name:'',
    email:'',
    password:'',
    mobileNo:'',
    gender:'',
    about:''}
    )
  };

  
  


    return(
        <Base>
        <Container className="my-3">
         <Row>
          <Col sm ={{size:6, offset:3}}>
          <Card 
            body
            color="dark"
            inverse  
          >
            <CardHeader>
              <h1>Register here !</h1>
            </CardHeader>
            <CardBody>
              <Form onSubmit={submitForm}>
                <FormGroup>
                  <Label for="name">Enter Name</Label>
                  <Input
                  type="text"
                  name="name"
                  placeholder="Enter Name here"
                  id="name"
                  onChange={(e)=>handleChange(e,'name')}
                  value={data.name}/>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Enter email</Label>
                  <Input
                  type="email"
                  name="email"
                  placeholder="Enter email here"
                  id="email"
                  onChange={(e)=>handleChange(e,'email')}
                  value={data.email}/>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e)=>handleChange(e,'password')}
                  value={data.password}/>
                </FormGroup>
                <FormGroup>
                  <Label for="MobileNo">Enter Mobile Number</Label>
                  <Input
                  type="number"
                  name="mobile number"
                  id="MobileNo"
                  onChange={(e)=>handleChange(e,'mobileNo')}
                  value={data.mobileNo}/>
                </FormGroup>
                <FormGroup>
                  <Label for="Gender">Enter Gender</Label>
                  <Input
                  type="text"
                  name="Gender"
                  id="Gender"
                  placeholder="Male/Female"
                  onChange={(e)=>handleChange(e,'gender')}
                  value={data.gender}/>
                </FormGroup>
                <FormGroup>
                  <Label for="About">Describe Yourself </Label>
                  <Input
                  type="textarea"
                  name="about"
                  id="About"
                  onChange={(e)=>handleChange(e,'about')}
                  value={data.about}/>
                </FormGroup>
                <Container className="text-center">
                  <Button color="primary" className="mx-3">
                      Register
                  </Button>
                  
                  <Button color="primary"  onClick={resetData}>
                      Reset
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
export default Signup;