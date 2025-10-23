// Parameters (props): { icon, title, description, onClick }
const Card = ({ icon, title, description, onClick }) => {
  return (
    <div className="feature-card" onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;