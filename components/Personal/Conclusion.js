const Conclusion = ({ reference, conclusion }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8" ref={reference}>
      <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
        Conclusion
      </h1>
      <div className="mt-8">
        {conclusion.map((article, i) => (
          <div key={i} style={{ textIndent: "1em" }} className="my-4">
            {article}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conclusion;
