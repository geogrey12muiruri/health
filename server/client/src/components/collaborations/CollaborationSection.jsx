import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsPlusSquare, BsSearch, BsChatDots } from "react-icons/bs";

const CollaborationSection = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow flex justify-around items-center py-2">
      <Link to="/" className="text-2xl text-gray-500">
        <BsHouseDoor />
      </Link>
      <Link to="/add-post" className="text-2xl text-gray-500">
        <BsPlusSquare />
      </Link>
      <Link to="/search" className="text-2xl text-gray-500">
        <BsSearch />
      </Link>
      <Link to="/chats" className="text-2xl text-gray-500">
        <BsChatDots />
      </Link>
    </nav>
  );
};

export default CollaborationSection;
