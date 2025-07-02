import { useItemStore } from "../store/useItemStore";

const CardList = ({ data }) => {
  const { favorites, toggleFavorite } = useItemStore();

  if (!data || data.length === 0) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="row">
      {data.map((product) => {
        const isFavorite = favorites.includes(product.id);
        
        return (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img 
                src={product.thumbnail} 
                className="card-img-top" 
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.slice(0, 100)}...</p>
                <p className="text-primary">${product.price}</p>
                <p> {product.rating}</p>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;