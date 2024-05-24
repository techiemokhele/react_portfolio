const NewsLetterCOmponent = () => {
  return (
    <div className="mt-8 bg-gray-200 p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>
      <form className="flex">
        <input
          type="email"
          placeholder="Your Email Address"
          className="w-full border border-gray-300 rounded-l-md py-2 px-3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterCOmponent;
