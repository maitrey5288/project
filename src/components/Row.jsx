import React from "react";
import './Row.css'
import pdf from "../assets/pdf.svg";

const Row = ({ row }) => {
  return (
    <div className="row-container">
      <div className="flex flex-col w-[70%]">

        <p className="title">{row.title}</p>
        <p className="date">{row.date}</p>
      </div>
      
      <div>
        <img src={pdf} alt="Your SVG" />
      </div>
    </div>
  );
};

export default Row;
