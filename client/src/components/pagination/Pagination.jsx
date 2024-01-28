import "./PaginationModules.css";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function Pagination({
	countriesPerPage,
	totalCountries,
	currentPage,
	setCurrentPage,
}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
		pageNumbers.push(i);
	}

	const onPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const onNextPage = () => {
		const allPaginate = totalCountries / countriesPerPage;
		if (currentPage < allPaginate) {
			setCurrentPage(currentPage + 1);
		}
	};

	const onPage = (n) => {
		setCurrentPage(n);
	};

	return (
		<article className="pagination" key={currentPage}>
			<button
				className={currentPage === 1 ? "is_disabled" : "text"}
				onClick={onPrevPage}
			>
				Prev
			</button>
			<div className="numbers">
				{pageNumbers.map((numPag) => (
					<button
						key={numPag}
						className={numPag === currentPage ? "isCurrent" : "number"}
						onClick={() => onPage(numPag)} // Pasa el número de página como argumento
					>
						{numPag}
					</button>
				))}
			</div>
			<button
				className={currentPage >= pageNumbers.length ? "isDisabled" : "text"}
				onClick={onNextPage}
			>
				Next
			</button>
		</article>
	);
}
