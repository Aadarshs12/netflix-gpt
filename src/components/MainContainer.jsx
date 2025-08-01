import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title , overview, id} = mainMovie;

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
