import Navbar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

const OrderPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Form Submitted!');
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div>
      <Navbar />
      <div className="order-container">
        <h2>Place Your Order</h2>
        
        <form className="order-form" onSubmit={handleSubmit}>
          {/* User Details */}
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          {/* Car Selection (Could pre-fill if navigating from listing) */}
          <label htmlFor="car">Selected Car Model:</label>
          <select id="car" name="car">
            <option value="civic">Honda Civic</option>
            <option value="model3">Tesla Model 3</option>
            {/* Add all cars from CAR_DATA */}
          </select>

          {/* Message/Notes */}
          <label htmlFor="notes">Special Requests/Notes:</label>
          <textarea id="notes" name="notes"></textarea>

          <PrimaryButton text="Confirm Order" type="primary" />
        </form>
      </div>
    </div>
  );
};

export default OrderPage;