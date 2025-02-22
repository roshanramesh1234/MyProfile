import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<section className="contact-section">
			<div className="contact-info">
				<h1>Contact</h1>
				<p>
					I'm always looking for new opportunities. If you have a project in
					mind, I'd love to hear from you.
				</p>
				<a href="mailto:roshanramesh290@gmail.com">Eamil Me!</a>
			</div>
			<div className="contact-form">
				<h1>Let's connect</h1>
				<ContactForm />
			</div>
		</section>
	);
}
