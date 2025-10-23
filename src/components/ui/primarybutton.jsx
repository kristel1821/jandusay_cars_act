// Parameters (props): { text, onClick, type }
const PrimaryButton = ({ text, onClick, type = 'primary' }) => {
  // We'll use the 'type' for different styling in CSS if needed (e.g., secondary, outline)
  // For now, we'll default to the primary style.
  const className = `btn-primary btn-${type}`;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryButton;