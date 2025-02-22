import Skills from "../HeroSection/SkillsComponent";
import "./Projects.tsx.css";
interface ProjectCardProps {
	name: string;
	description: string;
	image?: string;
	skills?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	name,
	description,
	image,
	skills,
}) => {
	return (
		<div className="project-card">
			<div className="card-front">
				{image && <img src={image} alt={name} />}
				<h2>{name}</h2>
			</div>
			<div className="card-back">
				<p>{description}</p>
				{skills && (
					<div className="contributions">
						<h4>My Contributions</h4>
						<Skills images={skills} duplicates={2} />
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
