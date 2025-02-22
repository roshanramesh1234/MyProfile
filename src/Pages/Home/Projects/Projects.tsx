import ProjectCard from "./ProjectCard";
import laafi from "/src/assets/projects/laafi_logo.png";
import tailspinn from "/src/assets/projects/tailspinn_logo.png";
import docker from "/src/assets/skills/docker.png";
import git from "/src/assets/skills/git.png";
import C from "/src/assets/skills/C.png";
import core from "/src/assets/skills/core.png";
import figma from "/src/assets/skills/figma.png";
import jira from "/src/assets/skills/jira.png";
import sql from "/src/assets/skills/sql.png";
import azure from "/src/assets/skills/azure.png";
import blazor from "/src/assets/skills/blazor.png";
import react from "/src/assets/skills/react.png";
import html from "/src/assets/skills/html5.png";
import mysql from "/src/assets/skills/mysql.png";
import css from "/src/assets/skills/css.png";
import freelancing from "/src/assets/projects/freelancing_logo.png";

function Projects() {
	return (
		<>
			<section className="project-wrapper">
				<h1>Projects</h1>
				<div className="project-section">
					<ProjectCard
						name="laafi (Healthcare aggregator app)"
						description="Laafi is an all-in-one hospital management system designed to streamline and automate hospital activities, from patient registration to discharge, providing a seamless experience for both healthcare professionals and patients. With a focus on leveraging cutting-edge technology, including AI-powered diagnosis, Laafi transforms traditional hospital workflows into a smart, efficient, and user-friendly system that enhances patient care and operational management."
						image={laafi}
						skills={[docker, git, C, core, figma, jira, sql, azure]}
					/>
					<ProjectCard
						name="TailSpinn – The Ultimate Pet Service Aggregator"
						image={tailspinn}
						description="TailSpinn is a pet service aggregator that connects pet owners with trusted providers for boarding, grooming, vet care, and training. With real-time booking, secure payments, and verified reviews, it ensures a seamless experience. Pet owners can easily find and schedule services, while providers can manage bookings and grow their business. Designed for convenience, TailSpinn makes pet care effortless and reliable."
						skills={[
							blazor,
							docker,
							git,
							C,
							core,
							figma,
							jira,
							sql,
							azure,
							html,
							css,
						]}
					/>
					<ProjectCard
						name="Freelance Full Stack Developer"
						description="As a freelance full-stack developer, I design and build scalable web applications tailored to client needs. I specialize in .NET Core, Blazor, React, and cloud services, delivering high-performance solutions with modern UI/UX. From architecture to deployment, I ensure reliability, security, and seamless functionality. My projects include dynamic admin portals, content management systems, and high-speed React applications. I also provide ongoing technical support, troubleshooting, and performance optimization. Whether it's crafting a new platform or enhancing existing systems, I bring expertise and efficiency to every project."
						skills={[
							blazor,
							docker,
							git,
							C,
							core,
							react,
							figma,
							jira,
							sql,
							azure,
							html,
							css,
							mysql,
						]}
						image={freelancing}
					/>
				</div>
			</section>
		</>
	);
}

export default Projects;
