import Image from './Image'

const Images = ({ data }) => {
  return (
    <div className='images'>
        {data?.map((image) => (
            <div className='image' key={image.id}><Image image={image} /></div>
        ))}
    </div>
  )
}

export default Images