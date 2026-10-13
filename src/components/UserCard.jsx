import { Link } from "react-router-dom";
import Button from "./Button.jsx";

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="border rounded p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>{email}</p>
      <p>{company}</p>
      <Link to={`/users/${id}`}>View Details</Link>
      <Button
        label={isFavorite ? "Remove favorite" : "Add favorite"}
        variant={isFavorite ? "danger" : "primary"}
        onClick={onToggleFavorite}
      />
    </div>
  );
}

export default UserCard;