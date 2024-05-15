import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterPage = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState(null);

	useEffect(() => {
		axios
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then((response) => {
				setCharacter(response.data);
			})
			.catch((error) => console.error("Error fetching character data:", error));
	}, [id]);

	if (!character) return <p>Loading character details...</p>;

	return (
		<div className="character-details">
			<h1>{character.name}</h1>
			<img src={character.image} alt={character.name} />
			<p>Status: {character.status}</p>
			<p>Species: {character.species}</p>
			<p>Gender: {character.gender}</p>
			<p>Location: {character.location.name}</p>
		</div>
	);
};

export default CharacterPage;
