import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";

const Notes = ({ notes }) => {
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearchChange = (e) => {
    setFilteredNotes(
      notes.filter((note) => {
        return note.title.toLowerCase().match(text.toLowerCase());
      })
    );
  };

  useEffect(handleSearchChange, [text]);

  return (
    <div className="flex flex-col md:mx-auto max-w-screen-md min-h-screen py-5 md:px-32 bg-gradient-to-br from-zinc-800 to-zinc-500">
      <header className="flex flex-row items-center justify-around md:gap-30">
        <h2 className="text-3xl md:text-2xl text-yellow-50">My Notes</h2>
        <div className="flex flex-row items-center gap-2">
          <input
            className="focus:outline-none capitalize placeholder:lowercase text-lg rounded md:text-md p-1"
            type="text"
            placeholder="Search your notes..."
            autoFocus
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearchChange();
            }}
          />
          <AiOutlineSearch size={28} className="text-yellow-50 font-bold cursor-pointer" />
        </div>
      </header>
      <div className="flex flex-col">
        <section className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-10 md:gap-8 mt-5">
          {filteredNotes.length === 0 && (
            <div className="absolute inset-0 flex items-center">
              <p className="text-2xl text-yellow-50 mx-auto text-center">No notes found.</p>
            </div>
          )}

          {filteredNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </section>

        <Link to="/create-note" className=" flex fixed right-6 bottom-4 md:bottom-4 md:right-24 ">
          <BsPlusCircleFill size={42} />
        </Link>
      </div>
    </div>
  );
};

export default Notes;
