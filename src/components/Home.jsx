import { useState } from "react";
import React from 'react'
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";
 




const Home = () => {
  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId")
  const dispatch = useDispatch();

  const createPaste = ()=>{
    const paste = {
      title:title,
      content:value,
      _id : pasteId || Date.now().toString(36),
      createdAt : new Date().toISOString(),
    }

    if(pasteId){
      // update
      dispatch(updateToPaste(paste))
    }
    else{
      // create
      dispatch(addToPaste(paste))
    }

    // after creation or updation

    setTitle('')
    setValue('')
    setSearchParams({})

  }

  return (
    <>
    <input className="p-3 rounded-2xl mt-10 w-[80%]"
    type="text" 
    placeholder='Enter Title Here'
    value={title}
    onChange={(e)=>{setTitle(e.target.value)}}/>


    <div>
      <textarea name="" id="" className="rounded-2xl mt-4 min-w-[700px] p-3"
      value={value}
      placeholder="Enter Content Here"
      onChange={(e)=>{setValue(e.target.value)}}
      rows={15}></textarea>
    </div>

    <button className="ml-7 mt-5" onClick={createPaste}>
      {pasteId ? "Update Paste" : "Create Paste"}
    </button>

    </>
  )
  
}

export default Home