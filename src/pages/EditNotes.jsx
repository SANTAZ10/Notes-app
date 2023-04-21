import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useCreateDate from "../components/useCreateDate";

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };
      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };
  const handleDelete = () => {
    if (window.confirm("This note would be deleted")) {
      const newNotes = notes.filter((item) => item.id != id);
      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col md:mx-auto max-w-screen-md min-h-screen py-5 md:px-32 bg-gradient-to-br from-zinc-800 to-zinc-500">
      <header className="flex flex-row items-center justify-between mx-5">
        <Link to="/">
          <BsArrowLeft size={26} className="text-yellow-50" />
        </Link>
        <button onClick={handleForm} className=" p-2 bg-slate-400 rounded-lg text-yellow-50">
          Save
        </button>
        <button onClick={handleDelete}>
          <RiDeleteBin5Fill className="text-red-800" size={28} />
        </button>
      </header>
      <form onSubmit={handleForm} className="flex flex-col gap-4 mt-14">
        <input
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="Title..."
          className="w-full outline-none py-2 px-4 text-slate-400 rounded bg-gradient-to-br from-zinc-800 to-zinc-500 text-xl capitalize"
          autoFocus
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.currentTarget.value)}
          rows="28"
          className="w-full py-2 text-slate-400 px-4 outline-none bg-gradient-to-br from-zinc-800 to-zinc-500 rounded text-xl capitalize resize-none"
          placeholder="Take a note..."
        ></textarea>
      </form>
    </div>
  );
};
export default EditNotes;
