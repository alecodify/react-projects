import "./style.css";

const CharacterItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front"><img src={item.profile_img} alt="" /></div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Father Name:</strong> {item.additional.father}
                        </li>
                        <li>
                            <strong>Mother Name:</strong> {item.additional.mother}
                        </li>
                        <li>
                            <strong>Village:</strong> {item.village}
                        </li>
                        <li>
                            <strong>Jutsu:</strong> {item.additional.jutsu}
                        </li>
                        <li>
                            <strong>More:</strong> {item.additional.more}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem