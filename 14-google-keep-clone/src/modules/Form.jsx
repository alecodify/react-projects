import { useGlobalContext } from '../content/DataProvider';
import { useState, useRef } from 'react'
import { v4 as uuid } from 'uuid';

const note = {
  id: '',
  heading: '',
  text: '',
}

const Form = () => {
  const { setNotes } = useGlobalContext();
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({...note, id: uuid()});
  const containerRef = useRef();

  const handleClickAway = () =>{
    containerRef.current.style.minHeight = '30px';
    
    if (addNote.heading !== "" && addNote.text !== "") {
      setAddNote({...note, id: uuid()});
      setNotes(prev => [addNote, ...prev]);
      setShowTextField(false);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = '70px'
  }

  console.log(addNote)

  return (
    <div className='form-container' ref={containerRef} onBlur={handleClickAway} tabIndex={0}>
        {showTextField &&  <input type='text' placeholder='Title' className='input-title' onChange={(e) => setAddNote({...addNote, heading: e.target.value})} name='heading' value={addNote.heading} />}
        <textarea name="text" placeholder='Take a note...' onClick={onTextAreaClick} className='textarea' onChange={(e) => setAddNote({...addNote, text: e.target.value})} value={addNote.text} id="" />
    </div>
  )
}

export default Form