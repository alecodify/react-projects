import { FaTrashRestore, FaTrashAlt } from 'react-icons/fa';
import { useGlobalContext } from '../content/DataProvider';

const Delete = () => {
    const { deleteNotes, setNotes, setDeleteNotes } = useGlobalContext();

    const restoreNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        setNotes(prev => [note, ...prev]);
    }

    const removeNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
    }


    return (
        <div className='cards'>
            {deleteNotes.map(deleteNote => (
                <div className='card-item'>
                    <div className='card-content'>
                        <h4>{deleteNote.heading}</h4>
                        <p>{deleteNote.text}</p>
                    </div>
                    <div className='card-actions'>
                        <FaTrashRestore className='icon' size={20} onClick={() => restoreNote(deleteNote)} />
                        <FaTrashAlt className='icon' size={20} onClick={() => removeNote(deleteNote)} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Delete