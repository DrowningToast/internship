import Header from "../components/Header";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <Header />

      <main className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-4xl text-center">
          <span style={{ color: "#CF4450" }}>PSM</span>{" "}
          <span style={{ color: "#F6D854" }}>COMPUTER</span>{" "}
          <span style={{ color: "#477BD3" }}>‘62</span>
        </h1>
        <div className="my-4 text-center">
          Page Not Found | Return To{" "}
          <span className="underline">
            <Link href="/" passHref>
              Home page
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Error;
