import Navbar from '../../components/ui/navbar';
import Card from '../../components/ui/card';
import PrimaryButton from '../../components/ui/primarybutton';

// Placeholder functions for navigation (to be implemented in App.jsx or router)
const handleExplore = (index) => {
  console.log(`Navigating to Car Listing Page - Feature Index: ${index}`);
  // In a real app, this would be a navigation call (e.g., navigate('/listing'))
};

const handleOrder = () => {
  console.log('Navigating to Order Page');
  // navigate('/order')
};

// Dummy Data for Features
const featuresData = [
  { icon: '⚡', title: 'Fast Performance', description: 'Experience lightning-fast load times and optimized components.' },
  { icon: '🖥️', title: 'Responsive Design', description: 'Your website looks stunning on all devices, from mobile to desktop.' },
  { icon: '⚙️', title: 'Easy Customization', description: 'Tailwind utility-first classes make styling fast, flexible, and maintainable.' },
];

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Ready to Launch Your Next Project?</h2>
          <p>Join thousands of developers who trust our modern UI components to build exceptional experiences.</p>
          {/* Pass onClick=[handleExplore] to the button */}
          <PrimaryButton text="Explore our Products" onClick={() => handleExplore(0)} />
        </div>
        {/* Optional: Add a hero image here */}
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h3>Why Choose Us</h3>
        <p>Powerful features designed to accelerate your development process.</p>
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
      </section>

      {/* Call to Action (CTA) Section - Pass onClick=[handleOrder] to the button */}
      <section className="cta-section">
        <h3>Ready to Make an Order?</h3>
        <PrimaryButton text="Place Your Order" onClick={handleOrder} />
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CarCo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;