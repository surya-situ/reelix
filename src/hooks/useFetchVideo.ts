import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/videoSlice";

const useFetchVideos = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const getVideos = async () => {
    setLoading(true);
    try {
      const url = import.meta.env.VITE_YOUTUBE_VIDEOS_API;
      const response = await fetch(url);
      const data = await response.json();

      // Dispatch the items to the Redux store
      if (data.items) {
        dispatch(addVideos(data.items));
      } else {
        console.error("No items in response data");
      }
    } catch (error: unknown) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos(); 
  }, []);

  return loading; 
};

export default useFetchVideos;
