import CustomNavbar from "../components/CustomNavbar";

const Base =({title = " welcome to our website ", children }) =>{

    return(
        <div className="container-fluid p-0 m-0">
            <CustomNavbar/>
            {children}
            <h1>This is footer</h1>
        </div>
    );
};

export default Base;