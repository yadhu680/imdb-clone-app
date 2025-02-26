import MovieCard from './MovieCard';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d0384a70e4b52f62975e8545a2a34951&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center ">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return <MovieCard key={movieObj.id} movieObj={movieObj} />;
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
