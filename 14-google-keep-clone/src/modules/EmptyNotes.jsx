import { FaRegLightbulb } from 'react-icons/fa';

const EmptyNotes = () => {
  return (
    <div className='empty-notes'>
      <FaRegLightbulb className='lightIcon' />
      <p>Notes you add appear here</p>
    </div>
  )
}

export default EmptyNotes