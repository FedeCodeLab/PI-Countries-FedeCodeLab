import Pagination from "../../components/pagination/Pagination";
import Cards from "../../components/cards/Cards";
import './HomeModules.css';

export default function Home () {
  return (
    <section className="home">
      <Cards />
      <Pagination />
    </section>    
  )
}