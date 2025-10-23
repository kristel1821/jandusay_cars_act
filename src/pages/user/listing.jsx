import Navbar from '../../components/ui/navbar';

const CAR_DATA = [
  { 
    model: "Honda Civic", 
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "Efficient and reliable sedan.", 
    price: "$24,500" 
  },
  { 
    model: "Tesla Model 3", 
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVzbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "All-electric, high-tech performance.", 
    price: "$40,240" 
  },
  { 
    model: "Ford F-150", 
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "America's best-selling truck.", 
    price: "$35,900" 
  },
  { 
    model: "Toyota Camry", 
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveW90YSUyMGNhbXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
    description: "Comfortable and fuel-efficient family sedan.", 
    price: "$27,200" 
  },
  { 
    model: "BMW 3 Series", 
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
    description: "Luxury sports sedan with premium features.", 
    price: "$43,800" 
  },
];

const CarListingCard = ({ car, onOrderClick }) => (
  <div className="car-listing-card">
    <img
      src={car.image}
      alt={car.model}
      className="car-image"
      onError={(e) => {
        // Prevent infinite loop if the fallback also fails
        e.target.onerror = null;
        // Log the original URL to the console to help debugging
        console.error('Failed to load image:', car.image);
        // Use an external placeholder containing the car model as a visual fallback
        try {
          const label = encodeURIComponent(car.model || 'image');
          e.target.src = `https://placehold.co/800x500?text=${label}`;
        } catch (err) {
          e.target.src = 'https://placehold.co/800x500?text=Image+Not+Found';
        }
      }}
    />
    <div className="car-info">
      <h4 className="car-model">{car.model}</h4>
      <p className="car-description">{car.description}</p>
      <p className="car-price">Price: <strong>{car.price}</strong></p>
      <button className="btn-order" onClick={() => onOrderClick(car)}>
        Order Now
      </button>
    </div>
  </div>
);

const ListingPage = () => {
  const handleOrder = (car) => {
    console.log(`Initiating order for: ${car.model}`);
    // Navigate to the Order Page, passing car data
    // You can use react-router-dom for navigation:
    // navigate('/order', { state: { car } });
  };

  return (
    <div>
      <Navbar />
      <div className="listing-container">
        <h2>Car Listing</h2>
        {/* Search Bar Component would go here */}
        
        <div className="car-list-grid">
          {CAR_DATA.map((car, index) => (
            <CarListingCard 
              key={index} 
              car={car} 
              onOrderClick={handleOrder} 
            />
          ))}
        </div>

        {/* Pagination Component would go here */}
      </div>
    </div>
  );
};

export default ListingPage;