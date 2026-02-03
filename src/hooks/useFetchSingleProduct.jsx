import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useFetchSingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://dummyjson.com/recipes/${id}`
      );
      const data = await res.json();

      setProducts(data); 
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProducts();
    }
  }, [id]);

  return { products, isError, isLoading };
};

export default useFetchSingleProduct;
