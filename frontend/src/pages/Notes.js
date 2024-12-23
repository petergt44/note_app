// frontend/src/pages/Notes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AudioRecorder from '../components/AudioRecorder';


const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchNotes = async () => {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('/api/notes', {
            headers: { Authorization: `Bearer ${token}` },
        });
        setNotes(data);
    };

    const createNote = async () => {
        const token = localStorage.getItem('token');
        await axios.post('/api/notes', { title, description }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h2>Notes</h2>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button onClick={createNote}>Add Note</button>
            </div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                    </li>
                ))}
            </ul>
            <AudioRecorder onSave={(audioBlob) => console.log('Audio saved', audioBlob)} />
        </div>
    );
};

export default Notes;

