import emailjs from "emailjs-com";

export default function sendEmail(templateParams) {
    emailjs.send('service_gd_gmail', 'template_email_gd', templateParams, '38RJhyjc4R9AeKNxQ')
      .then((response) => {
        console.log('Email successfully sent!')
        alert("Mail sent successfully");
      }, (err) => {
        console.error('Failed to send email:', err)
        alert(err);
      });
}