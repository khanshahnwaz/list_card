import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import user1 from './Assets/user1.jpg'
import user2 from './Assets/user2.jpg'
import user3 from './Assets/user3.jpg'
import user4 from './Assets/user4.jpg'
import EditItem from "./EditItem";

const Card = (props) => {
  
  // facing error while passing colors throug json file. Only pink color is getting rendered. So using this approach.
  const textColorArray = [
    "text-rose-500",
    "text-green-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-fuchsia-500",
    "text-red-500",
    "text-yellow-500",
    "text-purple-500",
    "text-fuchsia-500",
  ];
  const bgColorArray = [
    "bg-rose-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-fuchsia-500",
  ];
  const imageArray=[user1,user2,user3,user4,user1,user2,user3,user4,user1,user2];
  const randomImage=()=>{
    return Math.floor(Math.random()*10)
  }
  const imageIndex=randomImage();
  const randomIndex = () => {
    // console.log Math.random(7);
    return Math.floor(Math.random() * 10);
  };
  const[editItem,setEditItem]=useState(false)
  const[editData,setEditData]=useState({})
  const colIndex = randomIndex();


  const deleteCard=()=>{
    const data=props.list.filter((item,i)=>i!=props.index);
    props.setListItem(data);
  }
  return (
    // no color is working except pink 500. As of now, leaving it.
    <div
      className={`rounded-3xl px-5 py-10 grid gap-y-7 w-[300px] h-max  bg-[#19275e]`}
    >
      <EditItem editItem={editItem} setEditItem={setEditItem} data={editData}/>
      <div>
        <img src={imageArray[imageIndex]} alt="User" className="rounded-full h-[100px]"/>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex justify-start gap-x-3">
          <div
            className={`h-4 w-4 rounded-full  ${bgColorArray[colIndex]} my-auto`}
          ></div>
          <p className={`${textColorArray[colIndex]} text-lg`}>
            {props.priority}
          </p>
        </div>
        <BsThreeDots className="my-auto text-white" />
      </div>
      <p className="w-full text-gray-300">{props.data.description}</p>
      <div className="h-2 rounded-3xl bg-white w-full my-auto ">
        <div
          className={`rounded-3xl h-full w-4/5 ${bgColorArray[colIndex]}`}
        ></div>
      </div>
      <div className="flex justify-between w-full">
     
        <div className="flex justify-end gap-x-3 text-gray-400">
          <IoMdTimer className="my-auto" />
          <p className="text-sm self-center">Due in 4 days </p>
        </div>
      </div>
      <div className="flex w-full justify-between gap-2 text-white font-semi">
        <button className="w-full bg-[#cc3e55] p-2 rounded-3xl cursor-pointer hover:opacity-50" 
        onClick={()=>deleteCard()}
        >Delete</button>
        <button className="w-full p-2 rounded-3xl bg-[#2d3882] cursor-pointer hover:opacity-50" onClick={()=>[setEditItem(true),setEditData(props.data)]}>Edit</button>
      </div>
    </div>
  );
};

export default Card;
