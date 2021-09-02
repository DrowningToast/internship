const VideoList = ({ number, videoSize }) => {
  if (videoSize == 1) {
    return (
      <div
        className="relative flex flex-col justify-center items-center bg-black"
        style={{ paddingTop: "56.25%" }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full shadow"
          controls
          preload="auto"
        >
          <source src={`/data/${number}/video_1.webm`} type="video/webm" />
          <source src={`/data/${number}/video_1.mov`} />
          <source src={`/data/${number}/video_1.mp4`} />
        </video>
      </div>
    );
  } else if (videoSize == 2) {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-96 m-4">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_1.webm`} type="video/webm" />
              <source src={`/data/${number}/video_1.mov`} />
              <source src={`/data/${number}/video_1.mp4`} />
            </video>
          </div>
        </div>
        <div className="w-full md:w-96 m-4">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_2.webm`} type="video/webm" />
              <source src={`/data/${number}/video_2.mov`} />
              <source src={`/data/${number}/video_2.mp4`} />
            </video>
          </div>
        </div>
      </div>
    );
  } else if (videoSize == 5) {
    return (
      <div className="flex flex-wrap justify-center items-center lg:grid lg:grid-cols-5 gap-4">
        <div className="w-full md:w-72 lg:w-full">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_1.webm`} type="video/webm" />
              <source src={`/data/${number}/video_1.mov`} />
              <source src={`/data/${number}/video_1.mp4`} />
            </video>
          </div>
        </div>
        <div className="w-full md:w-72 lg:w-full">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_2.webm`} type="video/webm" />
              <source src={`/data/${number}/video_2.mov`} />
              <source src={`/data/${number}/video_2.mp4`} />
            </video>
          </div>
        </div>
        <div className="w-full md:w-72 lg:w-full">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_3.webm`} type="video/webm" />
              <source src={`/data/${number}/video_3.mov`} />
              <source src={`/data/${number}/video_3.mp4`} />
            </video>
          </div>
        </div>
        <div className="w-full md:w-72 lg:w-full">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_4.webm`} type="video/webm" />
              <source src={`/data/${number}/video_4.mov`} />
              <source src={`/data/${number}/video_4.mp4`} />
            </video>
          </div>
        </div>
        <div className="w-full md:w-72 lg:w-full">
          <div className="relative bg-black" style={{ paddingTop: "177%" }}>
            <video
              className="absolute top-0 left-0 w-full h-full shadow"
              controls
              preload="auto"
            >
              <source src={`/data/${number}/video_5.webm`} type="video/webm" />
              <source src={`/data/${number}/video_5.mov`} />
              <source src={`/data/${number}/video_5.mp4`} />
            </video>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Video = ({ number, videoSize }) => {
  if (videoSize == 0) {
    return (
      <div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-medium text-gray-500 text-center md:text-left">
          Videos
        </h1>
        <div className="relative mt-8">
          <VideoList number={number} videoSize={videoSize} />
        </div>
      </div>
    );
  }
};

export default Video;
