import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PaginationComponent() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = Array.from({ length: Math.ceil(characters.length / itemsPerPage) }, (_, i) => i + 1);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl text-green-800 font-bold mb-6">Rick and Morty Wiki</h1>
            <div className="grid grid-cols-3 gap-4">
                {currentItems.map((character) => (
                    <Link to={`/character/${character.id}`} key={character.id}>
                        <div>
                            <img src={character.image} alt={character.name} />
                            <h3>Character name: {character.name}</h3>
                            <p>Species: {character.species}</p>
                            <p>Status: {character.status}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <ul className="flex gap-2 justify-center flex-wrap mt-8">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 rounded-full ${currentPage === number ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PaginationComponent;