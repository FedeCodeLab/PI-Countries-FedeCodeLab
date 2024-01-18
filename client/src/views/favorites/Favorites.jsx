import './FavoritesModules.css';
import Pagination from "../../components/pagination/Pagination";
import Cards from '../../components/cards/Cards';

export default function Favorites () {
  return (
    <div className="favorites">
      <Cards />
      <Pagination />
    </div>
  )
}