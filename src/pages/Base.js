import CustomNavbar from "../components/CustomNavbar";

const Base =({title = " welcome to our website ", children }) =>{

    return(
        <div className="container-fluid p-0 m-0">
            <CustomNavbar/>
            {children}
            
        </div>
    );
};

export default Base;