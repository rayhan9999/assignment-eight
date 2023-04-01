import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>

      <div className="container-fluid ps-2 m-autoflex-nowrap d-flex justify-content-between">
        <div className="brand-name mt-3">
          <a className="navbar-brand fw-bold fs-2 shadow" href="#">
            <span className="text-warning fst-italic  fs-1">Mastaring</span>  <span className="text-info me-4"></span>  {' '} <span className="text-danger fw-bolder fs-1 fst-italic "></span> Web Dev
          </a>
        </div>

        <div>
          <img
            className="w-25 mt-3 ms-5 rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGejnpVN-7FxiS3NwJwuPDZVZWe_WBSKQFrQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>

      <hr className="w-100 mt-2 m-auto" />
    </>
  );
};

export default Header;
