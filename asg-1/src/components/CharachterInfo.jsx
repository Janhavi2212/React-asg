import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching character data:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!character) return <h1>Loading...</h1>;

    return (
        <div>
            <img src={character.image} alt={character.name} />
            <h1>Name: {character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Type: {character.type || "Unknown"}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>
            <h3>Episodes Appeared: {character.episode.length}</h3>
        </div>
    );
};

export default CharacterInfo;