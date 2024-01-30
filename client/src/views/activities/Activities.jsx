import "./ActivitiesModules.css";
import Form from "../../components/formActivity/form";

export default function Activities({ allCountries }) {
	return (
		<section className="activities container">
			<Form allCountries={allCountries} />
		</section>
	);
}
