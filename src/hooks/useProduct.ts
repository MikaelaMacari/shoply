import useSWR from "swr";

const useProduct = (id: number) => {
  const fetcher = (path: string) =>
    fetch(`http://localhost:5000/${path}/${id}`).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`products`, fetcher);
  return {
    product: data,
    isLoading,
    isError: error,
  };
};

export default useProduct;
