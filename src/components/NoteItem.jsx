import React from 'react'
import { Link } from "react-router-dom";


const NoteItem = ({ note }) => {
  return (
    <Link to={`/edit-note/${note.id}`} className='p-6 bg-slate-400 mt-6 mb-3 w-fit rounded max-w-[150px]'>
      <h2 className= 'overflow-hidden'>{note.title.length > 10 && note.title.indexOf(' ') === -1 ? note.title.substr(0, 40) + '...' : note.title}</h2>
      <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem