const Articles = ({ reference, articles }) => {
  return (
    <div className="relative" ref={reference}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
          Articles
        </h1>
        <div className="mt-8 text-base md:text-lg">
          {articles.map((article, i) => (
            <div key={i} style={{ textIndent: "1em" }} className="my-4">
              {article}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0">
        <svg
          className="w-8 lg:w-16"
          viewBox="0 0 72 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="0.5" cy="71.5" r="59" stroke="#5587E3" strokeWidth="25" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <svg
          className="w-8 lg:w-16"
          viewBox="0 0 44 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="44" cy="44" r="35" stroke="#2E6559" strokeWidth="18" />
        </svg>
      </div>
    </div>
  );
};

export default Articles;
