import { Link } from 'react-router-dom';
import { CompanyRating } from '../components/CopmanyRating';
import { Responses } from '../components/Responses';

export default function MainPage() {
  return (
    <div>
      <Link to="/login">login</Link>
      <CompanyRating />
      <Responses />
    </div>
  );
}
