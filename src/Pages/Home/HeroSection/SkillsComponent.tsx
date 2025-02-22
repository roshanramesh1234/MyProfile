import "./Hero.tsx.css";
interface SkillsProps {
	images: string[];
	duplicates: number;
}

const Skills: React.FC<SkillsProps> = ({ images, duplicates }) => {
	return (
		<div className="skills-container">
			{Array.from({ length: duplicates }).map((_, index) => (
				<div className="skills" key={index}>
					{images.map((src, imgIndex) => (
						<img src={src} key={imgIndex} alt={`Skill ${imgIndex}`} />
					))}
				</div>
			))}
		</div>
	);
};
export default Skills;
