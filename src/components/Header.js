import { useNavigate } from "react-router-dom";

function Header() {
    const loginstatus = sessionStorage.getItem("loginstatus");
    // const job = sessionStorage.getItem("job");
    const navigate = useNavigate();

    const logout = (lg) => {
        lg.preventDefault();
        sessionStorage.removeItem("loginstatus");
        sessionStorage.removeItem("job");
        sessionStorage.removeItem("empid");
        sessionStorage.removeItem("managerid");
        navigate("/login");
    }

    return (
        <div className="container mt-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary rounded">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 ">Leave Management System</span>
                    <div className="d-flex">
                        {loginstatus ? (
                            <button onClick={logout} className="btn btn-danger">
                                Logout
                            </button>
                        ) : 
                        <button  className="btn btn-danger">
                                Login
                            </button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

