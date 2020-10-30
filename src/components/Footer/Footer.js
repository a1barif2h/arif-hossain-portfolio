import React from "react";

const Footer = () => {
  return (
    <div className="text-center mt-5 pt-5 pb-4">
      <small style={{ color: "#dddddd" }}>
        Copyright &copy; {new Date().getFullYear()} Arif Hossain
      </small>
    </div>
  );
};

export default Footer;
