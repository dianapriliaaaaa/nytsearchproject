import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logonytimesarticle.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const menuRef = useRef();
//   const iconRef = useRef();

//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

 

  return (
    <div className="bg-transparent ">
      <div className="fixed bg-white shadow-md z-10 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-screen">
            <div className="flex p-2">
              <img src={logo} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
