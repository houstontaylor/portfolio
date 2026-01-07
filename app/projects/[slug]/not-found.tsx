import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--dark-pink)' }}>
          404
        </h1>
        <p className="text-2xl mb-8">Project not found 🔍</p>
        <Link 
          href="/projects"
          className="bg-green border-4 border-dark-green text-white px-8 py-4 rounded-full font-bold inline-block hover:bg-light-green transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}