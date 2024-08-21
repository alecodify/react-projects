import React from 'react'

const Card = ({ imgUrl, text, tagText, inverted }) => {
    return (
        <div className={`relative p-6 rounded-lg shadow-lg ${inverted ? "bg-purple-800 text-white" : "bg-white text-black"}`} style={{ backgroundColor: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${inverted ? "bg-white text-purple-800" : "bg-purple-800 text-white"}`}>{tagText}</span>
            <p className={`mt-6 font-medium text-lg ${inverted ? "text-white" : "text-gray-800"}`}>{text}</p>
        </div>
    )
}

export default Card