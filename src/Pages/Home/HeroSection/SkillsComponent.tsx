import "./Hero.tsx.css";
interface SkillsProps {
	images: string[];
	duplicates: number;
	height?: number;
}

const Skills: React.FC<SkillsProps> = ({ images, duplicates, height = 50 }) => {
	return (
		<div className="skills-container">
			{Array.from({ length: duplicates }).map((_, index) => (
				<div className="skills" key={index}>
					{images.map((src, imgIndex) => (
						<img
							src={src}
							key={imgIndex}
							style={{ height: height }}
							alt={`Skill ${imgIndex}`}
						/>
					))}
				</div>
			))}
		</div>
	);
};
export default Skills;
