import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const Form = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('')

    useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }

    return (
        <section className='section search'>
            <form onSubmit={(e) => e.preventDefault()} className='search-form'>
                <div className='form-control'>
                    <label htmlFor="name">search your favorite cocktile</label>
                    <input type="text" name='name' id='name' ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default Form