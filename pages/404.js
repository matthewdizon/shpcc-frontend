import Link from "next/link";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 text-black">
      <div className="grid gap-8">
        <p className="text-shpccRed text-9xl font-black">404</p>
        <p className="text-xl font-light">
          Oops, it looks like the page you are looking for is unavailable.
        </p>
        <Link
          href={"/"}
          className="hover:underline text-white bg-shpccRed max-w-max py-2 px-4 rounded-lg"
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default Error;
