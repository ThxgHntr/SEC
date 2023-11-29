import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/components/email/EmailSender";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { message, name, email, phone } = req.body;

        try {
            const emailHtmlForAdmin = `
              <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                <h2 style="color: #3498db;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <p style="color: #999; margin-top: 20px;">This message was sent from the contact form on your website.</p>
              </div>
            `;

            const emailHtmlForUser = `
            <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                <h2 style="color: #3498db;">Thank You for Contacting Us!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to us. We have received your message and appreciate your interest in our organization.</p>
                <p>Here are the details of your message:</p>
                <ul style="list-style: none; padding: 0;">
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                </ul>
                <p>We will review your message and get back to you as soon as possible. Your patience is highly appreciated.</p>
                <p>Thank you for supporting our cause!</p>
                <p style="color: #999; margin-top: 20px;">This is an automated message. Please do not reply to this email.</p>
            </div>
            `;


            // Send email to admin
            await sendEmail({
                to: 'recipient@example.com', // Replace with the actual recipient email address
                subject: 'New Contact Form Submission',
                html: emailHtmlForAdmin,
            });

            // Send email to user
            await sendEmail({
                to: email,
                subject: 'Thank you for contacting us!',
                html: emailHtmlForUser,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                success: false,
                error: "Internal Server Error",
            });
        }
    } else {
        res.status(405).json({ success: false, error: "Method Not Allowed" });
    }
}
