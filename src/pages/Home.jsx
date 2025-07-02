import { useEffect } from "react";
import { useItemStore } from "../store/useItemStore";
import CardList from "../components/CardList";

const Home = () => {
  const { products, fetchProducts, loading } = useItemStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mt-4">Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Tienda</h1>
      <CardList data={products.slice(0, 6)} />
    </div>
  );
};

export default Home;