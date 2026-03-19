import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full max-w-lg mx-4 shadow-lg rounded-lg border-0 bg-white/80 backdrop-blur-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="text-5xl">⚠️</div>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
        <p className="text-xl text-slate-600 mb-2">Page Not Found</p>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
            🏠 Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
