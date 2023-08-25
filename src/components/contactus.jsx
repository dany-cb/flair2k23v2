import React from "react";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import styles from "../styles/contactus.module.css";




const Contact = () => {
  return (
    <div className={`mx-40 grid lg:grid-cols-4 sm:grid-cols-1 gap-2 flex justify-center bg-neededcolor row-span-2`}>
      <div  className="contact py-1 row-span-2">
        <p>
          <img src="./img/Logo v1.png" className="h-8 mt-5"></img>
        </p>
      </div>
      <div className="contact py-2 row-span-1 col-span-1">
        <p className="">Contact Us</p>
      </div>
      <div className="contact py-2 row-span-1 col-span-1">
        <p>Kabilan</p>
      </div>
      <div className="contact py-2 row-span-1 col-span-1"> 
        <p>Akash</p>
      </div>
      <div className="contact py-2 row-span-1 col-span-1" >
        <p>flairit@licet.ac.in</p>
      </div>
      <div className="contact py-2 row-span-1 col-span-1">
        <p>+91 78711 23619</p>
      </div>

      <div className="contact py-2 row-span-1 col-span-1">
        <p>+91 74189 21212</p>
      </div>

    </div>
    
  );
};

export default Contact;
