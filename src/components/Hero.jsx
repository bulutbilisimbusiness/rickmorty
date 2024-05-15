import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
	const [characters, setCharacters] = useState([]);
	const [error, setError] = useState("");
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState("");
	const [selectedCharacter, setSelectedCharacter] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://rickandmortyapi.com/api/character/?name=${search}&status=${status}`
			)
			.then((response) => {
				setCharacters(response.data.results);
			})
			.catch((err) => {
				setError("Character not found!");
				console.error(err);
			});
	}, [search, status]);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleStatusChange = (event) => {
		setStatus(event.target.value);
	};

	const openPopup = (character) => {
		setSelectedCharacter(character);
	};

	const closePopup = () => {
		setSelectedCharacter(null);
	};

	return (
		<div className="flex bg-gray-400">
			<div className="w-64 bg-gray-800 text-white p-5">
				<h2 className="font-bold text-lg">Filter Characters</h2>
				<input
					type="text"
					placeholder="Search by name"
					value={search}
					onChange={handleSearchChange}
					className="mt-3 p-2 w-full text-black"
				/>
				<select
					value={status}
					onChange={handleStatusChange}
					className="mt-3 p-2 w-full text-black"
				>
					<option value="">All</option>
					<option value="alive">Alive</option>
					<option value="dead">Dead</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div className="flex-1 p-5">
				<div className="flex justify-center">
					<h1 className="text-3xl font-bold text-white">
						Rick and Morty Characters
					</h1>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{characters.map((character) => (
						<div
							key={character.id}
							className="bg-white rounded-lg shadow-md overflow-hidden relative group"
							onClick={() => openPopup(character)}
						>
							<img
								src={character.image}
								alt={character.name}
								className="w-full h-56 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-xl font-semibold">{character.name}</h2>
								<p className="text-gray-800">
									<strong>Status:</strong> {character.status}
								</p>
							</div>
						</div>
					))}
				</div>
				{selectedCharacter && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
						<div className="bg-white p-8 rounded-lg shadow-lg">
							<img
								src={selectedCharacter.image}
								alt={selectedCharacter.name}
								className="w-64 h-64 object-cover rounded-full mx-auto"
							/>
							<h2 className="text-xl font-semibold text-center mt-4">
								{selectedCharacter.name}
							</h2>
							<p className="text-gray-800">
								<strong>Status:</strong> {selectedCharacter.status}
							</p>
							<p className="text-gray-800">
								<strong>Species:</strong> {selectedCharacter.species}
							</p>
							<p className="text-gray-800">
								<strong>Gender:</strong> {selectedCharacter.gender}
							</p>
							<p className="text-gray-800">
								<strong>Location:</strong> {selectedCharacter.location.name}
							</p>
							<div className="text-center mt-4">
								<a
									href={selectedCharacter.url}
									className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
								>
									View Character
								</a>
								<button
									onClick={closePopup}
									className="ml-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Hero;
