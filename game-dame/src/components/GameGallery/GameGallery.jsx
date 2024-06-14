import '../../pages/UserPanel.css'

import { useState } from 'react'

const GameGallery = ({games, gamesPerPage}) => {

    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if ((currentPage + 1) * gamesPerPage < games.length) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * gamesPerPage;
    const selectedGames = games.slice(startIndex, startIndex + gamesPerPage);

  return (
    <div id='game-gallery'>
        <div>
            <div id="games-section-title">
                <h2>Jogos Adquiridos</h2>
            </div>
            <div id='navegation-arrows'>
                <button onClick={handlePrev} disabled={currentPage === 0}>
                    <span id='left-arrow' className="material-symbols-outlined">chevron_left</span>
                </button>
                <button onClick={handleNext} disabled={(currentPage + 1) * gamesPerPage >= games.length}>
                    <span id='right-arrow' className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
            <ul className="user-games-library">
            {selectedGames.map((game, index) => (
                <li key={index}>
                    <img src={game.image} alt={`jogo ${index + 1}`} />
                    <p className="classificacao">{game.rating}</p>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default GameGallery