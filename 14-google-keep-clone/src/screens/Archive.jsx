import { useGlobalContext } from '../content/DataProvider';
import { FaTrashAlt } from 'react-icons/fa';
import { RiInboxUnarchiveFill } from "react-icons/ri";

const Archive = () => {
    const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } = useGlobalContext();

    const deleteNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setDeleteNotes(prev => [archive, ...prev]);
    }

    const unArchiveNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setNotes(prev => [archive, ...prev]);
    }

    return (
        <div className='cards'>
            {archiveNotes.map((archive) => (
                <div key={archive.id} className='card-item'>
                    <div className='card-content'>
                        <h4>{archive.heading}</h4>
                        <p>{archive.text}</p>
                    </div>
                    <div className='card-actions'>
                        <RiInboxUnarchiveFill className='icon' size={20} onClick={() => unArchiveNote(archive)} />
                        <FaTrashAlt className='icon' size={20} onClick={() => deleteNote(archive)} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Archive