import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
	children: React.ReactNode;
	className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Stop observing after it becomes visible
				}
			},
			{ threshold: 0.2 } // Adjust threshold as needed
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={className}>
			{children}
		</motion.div>
	);
};

export default FadeIn;
