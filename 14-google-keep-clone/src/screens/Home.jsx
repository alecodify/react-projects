import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../content/DataProvider';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';
import { Form, EmptyNotes } from '../modules';
import { reorder } from '../utils';

const Home = () => {
    const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useGlobalContext();

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = reorder(notes, result.source.index, result.destination.index);
        setNotes(items);
    }

    const archiveNote = (note) => {
        const updateNotes = notes.filter(data => data.id !== note.id);
        setNotes(updateNotes);
        setArchiveNotes(prev => [note, ...prev]);
    }

    const deleteNote = (note) => {
        const updateNotes = notes.filter(data => data.id !== note.id);
        setNotes(updateNotes);
        setDeleteNotes(prev => [note, ...prev]);
    }

    return (
        <div className='notes'>
            <Form />
            {notes.length > 0 ? (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable draggableId='droppable'>
                        {(provided, snapshot) => (
                            <div className='cards' {...provided.draggableProps} ref={provided.innerRef}>
                                {notes.map((note, index) => (
                                    <Draggable key={note.id} draggableId={note.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='note-item'>
                                                <div className='card-item'>
                                                    <div className='card-content'>
                                                        <h4>{note.heading}</h4>
                                                        <p>{note.text}</p>
                                                    </div>
                                                    <div className='card-actions'>
                                                        <FaArchive className='icon' size={20} onClick={() => archiveNote(note)} />
                                                        <FaTrashAlt className='icon' size={20} onClick={() => deleteNote(note)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            ) : (
                <EmptyNotes />
            )}
        </div>
    )
}

export default Home