import ProjectCard from "./ProjectCard";

function Projects() {
	return (
		<>
			<section className="project-wrapper">
				<h1>Projects</h1>
				<div className="project-section">
					<ProjectCard name="laafi" description="Health care project" />
					<ProjectCard name="TailSpinn" description="Pet aggregator app" />
					<ProjectCard
						name="Freelancing"
						description="Worked with international clients from across the globe."
					/>
				</div>
			</section>
		</>
	);
}

export default Projects;
