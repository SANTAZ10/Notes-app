import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import useCreateDate from '../components/useCreateDate';

const CreateNotes = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const navigate = useNavigate();



  const handleSubmit = (e) => {
     e.preventDefault();

     if(title && details){
      const note = {id: uuidv4(), title, details, date};

      setNotes((prevNotes) => [note, ...prevNotes])

      navigate('/')
     }
  };

  return (
    <div className="flex flex-col md:mx-auto max-w-screen-md min-h-screen py-5 md:px-32 bg-gradient-to-br from-zinc-800 to-zinc-500">
      <header className="flex flex-row items-center justify-between mx-5">
        <Link to="/">
          <BsArrowLeft size={26} className="text-yellow-50" />
        </Link>

        <button onClick={handleSubmit} className=" p-2 bg-slate-400 rounded-lg text-yellow-50">Save</button>
      </header>

      <form className="flex flex-col gap-4 mt-14" onClick={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          className="w-full outline-none py-2 px-4 text-slate-400 rounded bg-gradient-to-br from-zinc-800 to-zinc-500 text-xl capitalize"
          autoFocus
        />
        <textarea
          rows="28"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full py-2 text-slate-400 px-4 outline-none bg-gradient-to-br from-zinc-800 to-zinc-500 rounded text-xl capitalize resize-none"
          placeholder="Take a note..."
        ></textarea>
      </form>
    </div>
  );
};

export default CreateNotes;
