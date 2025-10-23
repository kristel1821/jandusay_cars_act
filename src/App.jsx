import React, { useState } from 'react';
// Note: In a real environment, you would import './App.css' here.
// For the single-file setup, assume the CSS is linked externally.

// =================================================================
// 0. Mock Data (Based on instructions)
// =================================================================

// Mock car images (using placeholder URLs since we can't upload assets)
const CAR_DATA = [
  { 
    id: 1,
    model: "Honda Civic", 
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "Efficient and reliable sedan.", 
    price: "$24,500" 
  },
  { 
    id: 2,
    model: "Tesla Model 3", 
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVzbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "All-electric, high-tech performance.", 
    price: "$40,240" 
  },
  { 
    id: 3,
    model: "Ford F-150", 
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
    description: "America's best-selling truck.", 
    price: "$35,900" 
  },
  { 
    id: 4,
    model: "Toyota Camry", 
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveW90YSUyMGNhbXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
    description: "Comfortable and fuel-efficient family sedan.", 
    price: "$27,200" 
  },
  { 
    id: 5,
    model: "BMW 3 Series", 
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
    description: "Luxury sports sedan with premium features.", 
    price: "$43,800" 
  },
];
const featuresData = [
  { icon: '⚡', title: 'Fast Performance', description: 'Experience lightning-fast load times and optimized components.' },
  { icon: '🖥️', title: 'Responsive Design', description: 'Your website looks stunning on all devices, from mobile to desktop.' },
  { icon: '⚙️', title: 'Easy Customization', description: 'Flexible and maintainable styling for rapid development.' },
];


// =================================================================
// 1. UI Components (components/ui/)
// =================================================================

/**
 * Reusable Primary Button Component
 * Parameters (props): { text, onClick, type }
 */
const PrimaryButton = ({ text, onClick, type = 'primary' }) => {
  const className = `btn-primary btn-${type}`;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

/**
 * Navbar Component
 * Handles navigation clicks.
 */
const Navbar = ({ brandName = 'CarCo', navigate }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{brandName}</h1>
      </div>
      <div className="nav-links">
        <a href="#" onClick={() => navigate('landing')}>Home</a>
        <a href="#" onClick={() => navigate('listing')}>Car Listing</a>
        <a href="#" onClick={() => navigate('order')}>Order</a>
      </div>
    </nav>
  );
};

/**
 * Feature Card Component
 * Parameters (props): { icon, title, description, onClick }
 */
const Card = ({ icon, title, description, onClick }) => {
  return (
    <div className="feature-card" onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </div>
  );
};

// =================================================================
// 2. Page Components (pages/user/)
// =================================================================

/**
 * Landing Page Component (LandingPage.jsx)
 * Handles navigation to listing and order pages.
 */
const LandingPage = ({ navigate, handleOrderSelection }) => {
  // Function 1: handleExplore (triggered to car listing page)
  const handleExplore = (index) => {
    console.log(`Navigating to Car Listing Page - Feature Index: ${index}`);
    navigate('listing');
  };

  // Function 2: handleOrder (triggered to order page)
  const handleOrderClick = () => {
    handleOrderSelection(null); // Clear any pre-selected car
    console.log('Navigating to Order Page from CTA');
    navigate('order');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container hero-content">
          <h2>Ready to Launch Your Next Drive?</h2>
          <p>Explore our premium selection of vehicles designed for performance, comfort, and style.</p>
          {/* Pass onClick=[handleExplore] to the button */}
          <PrimaryButton 
            text="Explore Our Inventory" 
            onClick={() => handleExplore(0)} 
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section section-padding">
        <div className="container">
          <h3>Why Choose Us</h3>
          <p>Powerful features designed to deliver a seamless car-buying experience.</p>
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                // Pass onClick=[handleExplore] to the card
                onClick={() => handleExplore(index)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section - Pass onClick=[handleOrder] to the button */}
      <section className="cta-section">
        <div className="container">
          <h3>Ready to Get Your Dream Car?</h3>
          <PrimaryButton text="Place Your Order Now" onClick={handleOrderClick} />
        </div>
      </section>
    </div>
  );
};

/**
 * Car Listing Card Component (Helper for listing.jsx)
 */
const CarListingCard = ({ car, onOrderClick }) => (
  <div className="car-listing-card">
    <img 
      src={car.image} 
      alt={car.model} 
      className="car-image" 
      onError={(e) => { 
        e.target.onerror = null; 
        e.target.src = `https://placehold.co/300x200/9370db/ffffff?text=${car.model}`; // Fallback placeholder
      }}
    />
    <div className="car-info">
      <h4 className="car-model">{car.model}</h4>
      <p className="car-description">{car.description}</p>
      <p className="car-price">Price: **{car.price}**</p>
      <button className="btn-order" onClick={() => onOrderClick(car)}>
        Order Now
      </button>
    </div>
  </div>
);

/**
 * Car Listing Page Component (listing.jsx)
 */
const ListingPage = ({ navigate, handleOrderSelection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

  const handleOrder = (car) => {
    console.log(`Navigating to order form for: ${car.model}`);
    handleOrderSelection(car);
    navigate('order');
  };

  const filteredCars = CAR_DATA.filter(car => 
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  return (
    <div className="listing-container">
      <h2>Available Cars</h2>

      {/* Search Bar */}
      <div className="search-bar" style={{ marginBottom: '30px', textAlign: 'center' }}>
        <input 
          type="text" 
          placeholder="Search car model..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
          style={{ padding: '10px', width: '80%', maxWidth: '400px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
      </div>

      <div className="car-list-grid">
        {currentCars.length > 0 ? (
          currentCars.map((car) => (
            <CarListingCard 
              key={car.id} 
              car={car} 
              onOrderClick={handleOrder} 
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>No cars match your search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination" style={{ marginTop: '30px', textAlign: 'center' }}>
        <PrimaryButton 
          text="Previous" 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
          style={{ marginRight: '10px', opacity: currentPage === 1 ? 0.5 : 1 }}
        />
        <span style={{ margin: '0 10px', fontWeight: 'bold', color: '#555' }}>
          Page {currentPage} of {totalPages}
        </span>
        <PrimaryButton 
          text="Next" 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
          style={{ marginLeft: '10px', opacity: currentPage === totalPages ? 0.5 : 1 }}
        />
      </div>
    </div>
  );
};


/**
 * Order Page Component (order.jsx)
 */
const OrderPage = ({ navigate, selectedCar }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    carModel: selectedCar ? selectedCar.model : (CAR_DATA[0] ? CAR_DATA[0].model : ''),
    notes: '',
  });
  
  // Update form data if a car is selected from the listing page
  React.useEffect(() => {
      if(selectedCar) {
          setFormData(prev => ({
              ...prev,
              carModel: selectedCar.model
          }));
      }
  }, [selectedCar]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Form Submitted:', formData);
    // In a real application, you would send this data to a server
    alert(`Thank you, ${formData.name}! Your order for the ${formData.carModel} has been submitted.`);
    // Reset form or navigate back
    navigate('landing');
  };

  return (
    <div className="order-container">
      <h2>Place Your Order</h2>
      
      <form className="order-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label htmlFor="carModel">Selected Car Model:</label>
        <select 
          id="carModel" 
          name="carModel" 
          value={formData.carModel}
          onChange={handleChange}
        >
          {CAR_DATA.map(car => (
            <option key={car.id} value={car.model}>
              {car.model} - {car.price}
            </option>
          ))}
        </select>

        <label htmlFor="notes">Special Requests/Notes:</label>
        <textarea 
          id="notes" 
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        <PrimaryButton text="Confirm Order" type="primary" />
      </form>
      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="#" onClick={() => navigate('listing')} style={{ color: '#5d3f8f' }}>
          &larr; Back to Listing
        </a>
      </p>
    </div>
  );
};

// =================================================================
// 3. Main Application Component (App.jsx)
// =================================================================

/**
 * The main application component handles routing logic.
 * It conditionally renders the correct page based on the 'page' state.
 */
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedCar, setSelectedCar] = useState(null); // State to hold car selected from listing

  const navigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when changing page
    window.scrollTo(0, 0); 
  };

  const handleOrderSelection = (car) => {
    setSelectedCar(car);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'listing':
        return <ListingPage 
          navigate={navigate} 
          handleOrderSelection={handleOrderSelection} 
        />;
      case 'order':
        return <OrderPage 
          navigate={navigate} 
          selectedCar={selectedCar} 
        />;
      case 'landing':
      default:
        return <LandingPage 
          navigate={navigate} 
          handleOrderSelection={handleOrderSelection}
        />;
    }
  };

  return (
    // The Navbar is placed here so it persists across all pages
    <div>
      <Navbar navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <footer className="footer">
        <p>© 2025 CarCo. All rights reserved. | Designed with a Custom Purple Theme.</p>
      </footer>
    </div>
  );
};

export default App;
