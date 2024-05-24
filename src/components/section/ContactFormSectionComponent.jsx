const ContactFormSectionComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column - Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right column - Contact Information */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p>
          <span className="font-semibold">Phone:</span> +1 234 567 890
        </p>
        <p>
          <span className="font-semibold">Email:</span> info@example.com
        </p>
        <p>
          <span className="font-semibold">Address:</span> 123 Main St, City,
          Country
        </p>
      </div>
    </div>
  );
};

export default ContactFormSectionComponent;
