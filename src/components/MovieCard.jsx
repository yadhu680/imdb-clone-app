import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function MovieCard({ movieObj }) {
  const myContext = useContext(AppContext);

  function doesContain(movieObj) {
    for (let i = 0; i < myContext.watchlist.length; i++) {
      if (myContext.watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end mb-3"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => myContext.handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => myContext.handleAddtoWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-1xl w-full text-center rounded-lg bottom-0 bg-blue-900/50 p-2">
        {movieObj.original_title}
      </div>
    </div>
  );
}

export default MovieCard;
