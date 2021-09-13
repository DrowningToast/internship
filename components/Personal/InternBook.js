import { Document, Page, pdfjs } from "react-pdf";
import { useState, useRef, useEffect } from "react";

// import { useResizeDetector } from "react-resize-detector";
import { useResizeDetector } from "react-resize-detector/build/withPolyfill";

const config = require("../../next.config");

const InternBook = ({ number }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const { width, height, ref } = useResizeDetector();

  const [elHeight, setElHeight] = useState([]);
  const [elWidth, setElWidth] = useState([]);

  useEffect(() => {
    if (height) {
      setElHeight((oldHeight) => [...oldHeight, height]);
    }
  }, [height]);

  useEffect(() => {
    if (width) {
      setElWidth((oldWidth) => [...oldWidth, width]);
    }
  }, [width]);

  const changePage = (type) => {
    ref.current.style.height = `${Math.max(...elHeight)}px`;
    ref.current.style.width = `${Math.max(...elWidth)}px`;
    if (type == "INCREASE") {
      if (page + 1 > numPages) setPage(numPages);
      else setPage(page + 1);
    } else {
      if (page - 1 < 1) setPage(1);
      else setPage(page - 1);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col justify-center items-center">
      <div className="p-4 shadow-lg">
        <div ref={ref} className="flex flex-col justify-center items-center">
          <Document
            file={`${config.basePath}/data/${number}/${number}.pdf`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={page} />
          </Document>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Page {page} of {numPages}
        </p>
      </div>
      <div className="my-2">
        <button
          onClick={() => changePage("DECREASE")}
          className={`bg-white rounded shadow px-4 py-1 mx-2 transition duration-300 ${
            page - 1 < 1
              ? "opacity-50 cursor-default"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          &lt;
        </button>
        <button
          onClick={() => changePage("INCREASE")}
          className={`bg-white rounded shadow px-4 py-1 mx-2 transition duration-300 ${
            page + 1 > numPages
              ? "opacity-50 cursor-default"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default InternBook;
