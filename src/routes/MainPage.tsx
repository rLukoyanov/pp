import { Link } from 'react-router-dom';
import { CompanyRating } from '../components/CopmanyRating';

export default function MainPage() {
  return (
    <div>
      <Link to="/login">login</Link>
      <CompanyRating />
    </div>
  );
}
