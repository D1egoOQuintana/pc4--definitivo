import { useEffect } from "react";
import { useItemStore } from "../store/useItemStore";
import CardList from "../components/CardList";

const ItemList = () => {
  const { products, fetchProducts, loading, searchTerm, setSearchTerm, getFilteredProducts } = useItemStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = getFilteredProducts();

  if (loading) {
    return <div className="container mt-4">Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Catálogo</h1>
      
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <CardList data={filteredProducts} />
    </div>
  );
};

export default ItemList;
