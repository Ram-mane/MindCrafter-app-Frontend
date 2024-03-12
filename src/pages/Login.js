import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row,FormFeedback } from "reactstrap";
import Base from "./Base";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userLogin } from "../services/user-services";
import { doLogin } from "../authFunc";



const Login=()=>{

  const [loginData , setLoginData]= useState({
    username:'',
    password:'',
  });
  const navigate = useNavigate();


  const [error, setError] = useState({
    errors:{},
    isError:false
  });

  useEffect(()=>{console.log(loginData);},[loginData])

  const handleChange = (event, field)=>{
    
    setLoginData({...loginData, [field]:event.target.value});
  };


  // login form
  const handleLoginForm= async (event)=>{
     event.preventDefault()
     console.log(loginData);

     // validation
     if(loginData.username.trim()=='' || loginData.password.trim()==''){
      toast.error('username  or password must not be empty !')
     }

     // submit the data to server
    try {
      const response = await userLogin(loginData);
      
        console.log(response.data);

        // save the data to localstorage
        doLogin(response.data,()=>{
          console.log("login details saved to the localstorage !")
          navigate('/user/dashbord');

        })
      
        toast.success(`${response.data.message}`);
        

    } catch (error) {
      console.error(error);
      if(error?.response?.status==404 || error?.response?.status==400){
        toast.error(error?.response?.data?.message)
      }else{
        toast.error("Server down !")
      }
    }


  };


  // reset data
  const handleReset=()=>{
    setLoginData ({
    username:'',
    password:'',
    }
    )
  };
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
              <Form onSubmit={handleLoginForm}>
                <FormGroup>
                  <Label for ="userName">username</Label>
                  <Input
                  type="email"
                  name="userName"
                  placeholder="Enter registered email"
                  id="userName"
                  onChange={(e)=>handleChange(e,'username')}
                  value={loginData.username}
                  invalid={error.errors?.response?.data?.message?true:false}/>
                </FormGroup>
                <FormGroup>
                  <Label for ="password">Password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e)=>handleChange(e,'password')}
                  value={loginData.password}
                  invalid={error.errors?.response?.data?.message?true:false}/>
                  <FormFeedback>
                    {"Invalid password or username"}
                  </FormFeedback>
                </FormGroup>
                <Container className="text-center">
                  <Button color="primary" type="submit" className="mx-3">
                    submit
                  </Button>
                  <Button color="primary" type="submit" onClick={handleReset}>
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
export default Login;