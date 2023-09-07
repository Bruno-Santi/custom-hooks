import {
  useEffect,
  useState,
} from "react";

export const useFetch = (url) => {
  const [clicked, setClicked] =
    useState(false);
  const [state, setState] = useState([
    {
      data: null,
      isLoading: true,
      hasError: null,
    },
  ]);
  const turnClick = () => {
    setClicked(true);
  };
  const getQuote = async () => {
    setTimeout(() => {}, 3000);
    setState({
      ...state,
      isLoading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      setState({
        data: data,
        isLoading: false,
        hasError: null,
      });
      setClicked(false);
    }, 1500);
  };
  useEffect(() => {
    if (clicked) {
      getQuote();
    }
  }, [clicked]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    turnClick,
  };
};
