import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex align-items-stretch justify-content-between">
          <div className="d-none d-lg-flex align-items-center">
                <a class= "outwiths-logo" href="https://outwiths.com/">
                    <img src="https://outwiths.com/assets/logo/outwiths.png"  height="45" alt="Logo" />
                    <span>Outwiths</span>
                </a>

                <div className= "quick-search ms-5 " style={{width: 300}}>

                    <form action="">
                        <div className="input-group rounded-pill p-2 bg-light">
                            <div className="input-group-prepend">
                                <span>
                                    <span>
                                        <button class="searchButton" type="submit"> 
                                        <i class="bi bi-search"></i>                            
                                        </button>
                                    </span>
                                </span>
                            </div>
                            <input type="text" name="search" class="profile-search form-control" placeholder="Search..." />
                        </div>
                    </form>

                </div>


                <div className="nav nav-light ms-5">
                    <a href="https://outwiths.com/jobs" className="nav-link py-3"> 
                        <span className="font-weight-bold">Jobs</span>
                    </a>
                </div>
                <div className="nav nav-light mx-3">
                    <a href="https://outwiths.com/users" className="nav-link py-3"> 
                        <span className="font-weight-bold">Community</span>
                    </a>
                </div>
                <div className="nav nav-light mx-3">
                    <a href="https://outwiths.com/discovery" className="nav-link py-3"> 
                        <span className="font-weight-bold">Discovery</span>
                    </a>
                </div>
                <div className="group-button">
                    <a href="https://outwiths.com/signup" class="btn btn-light font-weight-bold px-6 py-2 m-3 rounded-pill">Sign Up</a>
                </div>

                <div className="group-button">
                    <a href="https://outwiths.com/login" class="btn btn-light font-weight-bold px-6 py-2 m-3 rounded-pill">Log in</a>
                </div>

           </div>
      </div>
    </div>
  );
};
