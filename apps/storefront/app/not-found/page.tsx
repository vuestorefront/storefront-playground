import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-screen justify-center items-center">
      <h1 className="text-5xl font-bold">Not Found</h1>
      <p>Sorry, the page you are looking for is not found.</p>

      <Link
        href="/"
        className="text-blue-500 hover:underline"
      >
        Go back to home
      </Link>
    </div>
  );
}