
const Image = ({ image }) => {
    return (
        <div className="card"><img src={image.previewURL} alt={image.user} /></div>
    )
}

export default Image