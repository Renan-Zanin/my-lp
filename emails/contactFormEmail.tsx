interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
  phone,
}) => (
  <div className="bg-blue-500 w-full h-full">
    <h1 className="text-blue-500">Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
    <p>{phone}</p>
  </div>
);

export default ContactFormEmail;
