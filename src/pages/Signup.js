
import {Row, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import Base from "./Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-services";
import{ toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Signup=()=>{

  const [data , setData]= useState({

    name:'',
    email:'',
    password:'',
    phone_no:'',
    gender:'',
    about:''

  });
  const navigate = useNavigate();


  const [error, setError] = useState({
    errors:{},
    isError:false
  });

  // useEffect(()=>{console.log(data);},[data])

  const handleChange = (event, property)=>{
    
    setData({...data, [property]:event.target.value});
  };


  // submit form
  const submitForm= async (event)=>{
    // event.preventDefault()
    // console.log(data);

    //data validation

    //call server api for sending data
    // const response = signUp(data).then((resp)=>{
      
    //   toast.success('🦄 Registration Successful !', {
    //     position: "top-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light"
    //     });
    // }).catch((error)=>{
    //   console.log(error)
    //   console.log("Error log");
    // });
    

    event.preventDefault()

    if(error.isError){
      toast.error(error.errors?.response?.data?.message)
      setError({...error,isError:false})
      return;
    }
    try {
      const response = await signUp(data);
      body: JSON.stringify(data);

      const result = response.data;
      console.log(result);
      const userId = result.userDetails.id;
          toast.success(`${result.message} with userId: ${userId}`, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });

            if(result.success===true){
               // Wait for the toast to close (500 milliseconds) and then navigate to the login page
                setTimeout(() => {
                  // Navigate to the login page
                  navigate('/login');
                }, 3500);
            }
            setData({
              name:'',
              email:'',
              password:'',
              phone_no:'',
              gender:'',
              about:''
            });

    } catch (error) {
      console.error(error);
      console.log("Error log")
      setError({
        errors:error,
        isError:true
      })
    }


  };


  // reset data
  const resetData=()=>{
    setData ({
      name:'',
    email:'',
    password:'',
    phone_no:'',
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

                {/* name fields */}
                <FormGroup>
                  <Label for="name">Enter Name</Label>
                  <Input
                  type="text"
                  name="name"
                  placeholder="Enter Name here"
                  id="name"
                  onChange={(e)=>handleChange(e,'name')}
                  value={data.name}
                  invalid={error.errors?.response?.data?.name?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.name}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Enter email</Label>
                  <Input
                  type="email"
                  name="email"
                  placeholder="Enter email here"
                  id="email"
                  onChange={(e)=>handleChange(e,'email')}
                  value={data.email}
                  invalid={error.errors?.response?.data?.email?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e)=>handleChange(e,'password')}
                  value={data.password}
                  invalid={error.errors?.response?.data?.password?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="phone_no">Enter Mobile Number</Label>
                  <Input
                  type="number"
                  name="phone_no"
                  id="phone_no"
                  onChange={(e)=>handleChange(e,'phone_no')}
                  value={data.phone_no}
                  invalid={error.errors?.response?.data?.phone_no?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.phone_no}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="Gender">Enter Gender</Label>
                  <Input
                  type="text"
                  name="Gender"
                  id="Gender"
                  placeholder="Male/Female"
                  onChange={(e)=>handleChange(e,'gender')}
                  value={data.gender}
                  invalid={error.errors?.response?.data?.gender?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.gender}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="About">Describe Yourself </Label>
                  <Input
                  type="textarea"
                  name="about"
                  id="About"
                  onChange={(e)=>handleChange(e,'about')}
                  value={data.about}
                  invalid={error.errors?.response?.data?.about?true:false}/>
                  <FormFeedback>
                    {error.errors?.response?.data?.about}
                  </FormFeedback>
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