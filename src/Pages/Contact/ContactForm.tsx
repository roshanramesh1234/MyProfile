import { useForm } from "react-hook-form";
import { sendEmail } from "./Email";
interface FormData {
	firstName: string;
	lastName?: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
}
export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({ mode: "onChange", shouldFocusError: true });
	const onSubmit = async (data: FormData) => {
		const success = await sendEmail(data);
		if (success) {
			alert("Email sent successfully!");
			reset();
		} else {
			alert("Failed to send email. Please try again later.");
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
				<div className="form-row">
					<input
						{...register("firstName", {
							required: "First Name is required",
						})}
						type="text"
						autoComplete="given-name"
						placeholder="First Name *"
					/>
					<input type="text" name="lastName" placeholder="Last Name" />
				</div>
				<div className="form-row">
					<input
						type="tel"
						autoComplete="tel"
						{...register("phone", {
							required: "Phone number is required",
							pattern: {
								value: /^[\+][(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{7,}$/,
								message: "Invalid Phone Number",
							},
						})}
						placeholder="+1234 1234567 *"
					/>
					<input
						type="email"
						autoComplete="email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
								message: "Invalid Email",
							},
						})}
						placeholder="Email *"
					/>
				</div>
				<input
					type="text"
					placeholder="Subject *"
					{...register("subject", { required: "Subject is required" })}
				/>

				<textarea
					{...register("message", {
						required: "You cannot submit an empty message",
					})}
					placeholder="Your Message *"
				/>
				<button>Send</button>
			</form>
			<div className="validation-errors">
				{errors.firstName && (
					<small className="error">
						*{errors.firstName.message?.toString()}
					</small>
				)}
				{errors.phone && (
					<small className="error">*{errors.phone.message?.toString()}</small>
				)}
				{errors.email && (
					<small className="error">*{errors.email.message?.toString()}</small>
				)}
				{errors.subject && (
					<small className="error">*{errors.subject.message?.toString()}</small>
				)}
				{errors.message && (
					<small className="error">*{errors.message.message?.toString()}</small>
				)}
			</div>
		</>
	);
}
