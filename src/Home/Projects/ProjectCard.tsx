import "./Projects.tsx.css";
interface ProjectCardProps {
	name: string;
	description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description }) => {
	return (
		<div className="project-card">
			<div className="card-front">
				<h4>{name}</h4>
			</div>
			<div className="card-back">
				<p>{description}</p>
				<a className="contributions-link">My Contributions</a>
			</div>
		</div>
	);
};

export default ProjectCard;
