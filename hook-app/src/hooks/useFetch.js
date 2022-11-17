import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);


  const getFetch = async () => {

    setState({ ...state, isLoading: true });

    const response = await fetch(url);
    const data = await response.json();

    setState({
      ...state,
      data,
      isLoading: false,
    })
  }


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}