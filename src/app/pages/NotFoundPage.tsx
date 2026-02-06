import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="text-center">
        <div className="size-32 mx-auto mb-6 rounded-full bg-[#1a5c2e]/10 flex items-center justify-center">
          <Coffee className="size-16 text-[#1a5c2e]" strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl mb-3">404</h1>
        <p className="text-gray-600 mb-8">
          Looks like this page took a coffee break!
        </p>

        <Link
          to="/"
          className="inline-block bg-[#1a5c2e] text-white px-8 py-4 rounded-lg hover:bg-[#164925] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
