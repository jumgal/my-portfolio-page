import { useEffect, useState } from "react";

type FoodType = "vegetables" | "meat" | "soup";

interface Iproduct {
  name: string;
  price: number;
  image: string;
  type: FoodType;
}

const API_URL =
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

const FetchApiExample = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    fetch(API_URL).then((res) =>
      res
        .json()
        .then((data) => setProducts(data))
        .catch((err): void => console.log(err))
    );
  }, []);

  function calculateSum() {
    if (Array.isArray(products) && products.length) {
      const priceSum = products?.reduce((a, i): number => {
        return a + i?.price;
      }, 0);

      return priceSum
    }
  }

  const sum = calculateSum()
  console.log(sum)

  return <h1>{sum && sum}</h1>;
};

export default FetchApiExample;
