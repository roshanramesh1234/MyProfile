import blazor from "/src/assets/skills/blazor.png";
import docker from "/src/assets/skills/docker.png";
import git from "/src/assets/skills/git.png";
import C from "/src/assets/skills/C.png";
import "./Hero.tsx.css";
function Skills() {
	const duplicates = 3;
	const skills = Array.from({ length: duplicates });
	return (
		<>
			<div className="skills-container">
				{skills.map((_) => (
					<div className="skills">
						<img src={blazor} />
						<img src={docker} />
						<img src={git} />
						<img src={C} />
					</div>
				))}
			</div>
		</>
	);
}
export default Skills;
