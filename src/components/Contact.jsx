import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { init } from '@emailjs/browser';
init("user_rnkmYncTvpO9JZacbuzKo");


function Contact(props) {
	const [sent, setSent] = useState(false);
	const form = useRef();

	useEffect(() => {
		setSent(false);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_xza7xgs",
				"template_9eolpv7",
				form.current,
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="contactContainer">
            <h2>Contact Me</h2>
			<main className="contactBody">
				<div className="contactHeader">
					<h4>I would love to hear from you! </h4>
					<h4>Fill out the form below to contact me!</h4>
				</div>
				<div>
					{!sent ? (
						<form ref={form} onSubmit={sendEmail} className="subForm">
							<label>Name:</label>
							<input
								type="text"
								name="from_name"
								placeholder="Enter name"
								className="nameInput"
								required
							/>
							<label>Email:</label>
							<input
								type="email"
								name="reply_to"
								placeholder="Enter email"
								className="emailInput"
								required
							/>
							<label>Message:</label>
							<textarea
								name="message"
								rows="10"
								cols="40"
								placeholder="Type your message here..."
								className="messageInput"
								required
							/>
							<input type="submit" value="Send" className="sendBtn" />
						</form>
					) : (
						<h2 className="sentReply">Message sent! Talk to you soon!</h2>
					)}
				</div>
			</main>
		</div>
	);
}

export default Contact;