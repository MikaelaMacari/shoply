import useSWR from "swr";

const useProducts = () => {
  const fetcher = (path: string) =>
    fetch(`http://localhost:5000/${path}`).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`products`, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
};

export default useProducts;
