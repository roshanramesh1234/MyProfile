import emailjs from "@emailjs/browser";
interface FormData {
	firstName: string;
	lastName?: string;
	phone: string;
	email: string;
	subject: string;
	message: string;
}
export const sendEmail = async ({
	firstName,
	lastName,
	phone,
	email,
	subject,
	message,
}: FormData): Promise<boolean> => {
	const emailParams = {
		firstName: firstName,
		lastName: lastName || "",
		phone: phone,
		email: email,
		subject: subject,
		message: message,
	};
	try {
		const response = await emailjs.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID!,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
			emailParams,
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
		);
		console.log("Email sent successfully!", response);
		return true;
	} catch (error) {
		console.error("Failed to send email:", error);
		return false;
	}
};
