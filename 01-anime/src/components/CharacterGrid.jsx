import { useState } from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "./Spinner";
import "./style.css";

const CharacterGrid = ({ items, isLoading }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(false);

    const handleCharacterClick = (item) => {
        setSelectedCharacter(item);
    };

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : (
                selectedCharacter ? (
                    <div className="selected-character">
                        <h1>{selectedCharacter.name}</h1>
                        <div className="selected-details">
                            <img src={selectedCharacter.resume_img} alt={selectedCharacter.name} className="profile-img" />
                            <div style={{paddingTop: "10px"}}>
                                <h2>Village: {selectedCharacter.village}</h2>
                                <h3>Family:</h3>
                                <ul>
                                    <li style={{ listStyle: "none" }}><strong>Father:</strong> {selectedCharacter.additional.father}</li>
                                    <li style={{ listStyle: "none" }}><strong>Mother:</strong> {selectedCharacter.additional.mother}</li>
                                </ul>
                                <h3>Jutsu:</h3>
                                <p>{selectedCharacter.additional.jutsu}</p>
                                <h3>More:</h3>
                                <p>{selectedCharacter.additional.more}</p>
                                <p style={{paddingTop: "4px"}}>{selectedCharacter.resume}</p>
                            </div>
                        </div>

                        <h2>Extras</h2>
                        <div className="extras">
                            {selectedCharacter.extras.map((extra, index) => (
                                <div key={index} className="extra-item">
                                    <h3>{extra.name}</h3>
                                    <img src={extra.image} alt={extra.name} className="extra-img" />
                                    <p>{extra.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className="btn" onClick={() => setSelectedCharacter(null)}>Back to List</button>
                    </div>
                ) : (
                    <section className="cards" >
                        {items.map((item) => (
                            <div key={item.id} onClick={() => handleCharacterClick(item)}>
                                <CharacterItem item={item} />
                            </div>
                        ))}
                    </section>
                )
            )}
        </div>
    )
}

export default CharacterGrid