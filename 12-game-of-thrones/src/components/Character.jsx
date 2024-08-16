
const Character = (props) => {
    const { value } = props;

    return (
        <div className="card">
            {value.characterImageFull ? (
                <div className="card-inner">
                    <div className="card-front"><img src={value.characterImageFull} alt="" /></div>
                    <div className="card-back">
                        <h2>{value.characterName}</h2>
                        <ul>
                            <li>
                                <strong>Real Name:</strong> {value.actorName}
                            </li>
                            <li>
                                <strong>House:</strong> {value.houseName}
                            </li>
                            <li>
                                <strong>Nick Name:</strong> {value.nickname}
                            </li>
                        </ul>
                    </div>
                </div>
            ) : ""}
        </div>
    );
};

export default Character;
