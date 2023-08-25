import React from "react";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "../styles/contactus.module.css";

const Contact = () => {
  return (
    <div className="contact grid grid-cols-4 gap-3 text-center bg-neededcolor" >
      <div>
        <p className="contact py-5 ">Contact Us</p>
      </div>
      <div>
        <p className="contact py-5 ">@flairit@licet.ac.in</p>
      </div>
      <div>
        <p className="contact py-5 ">Kabilan</p>
      </div>
      <div>
        <p className="contact py-5 ">Akash</p>
      </div>

      <div>
        <p className="contact py-5 "></p>
      </div>
      <div>
        <p className="contact py-5 "></p>
      </div>
      <div>
        <p className="contact py-5 ">+91 78711 23619</p>
      </div>

      <div>
        <p className="contact py-5 "></p>
      </div>
      
    </div>
  );
};

export default Contact;
