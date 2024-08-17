import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({ items, removeItem, editItem }) => {
    return (
        <div className='grocery-list'>
            {items.map(({ id, title }) => (
                <article className='grocery-item' key={id}>
                    <p className='title'>{title}</p>
                    <div className='btn-container'>
                        <button type='button' className='btn edit-btn' onClick={() => editItem(id)}><FaEdit /></button>
                        <button type='button' className='btn delete-btn' onClick={() => removeItem(id)}><FaTrash /></button>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default List