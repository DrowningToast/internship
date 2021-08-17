const InternBook = ({ number }) => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <iframe
        src={`/data/${number}/${number}.pdf`}
        frameBorder="0"
        className="w-full"
        style={{ height: "80vh" }}
      ></iframe>
    </div>
  );
};

export default InternBook;
