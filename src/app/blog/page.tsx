import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Relocate by Greenbelt',
  description: 'Guides, research, and insights for families relocating abroad. Schools, cost of living, taxes, and practical tips for international moves.',
};

const posts = [
  {
    slug: 'best-cities-for-american-families-abroad',
    title: 'Best Cities for American Families Moving Abroad in 2026',
    description: 'From Medellín to Lisbon: data-driven picks for families seeking quality schools, safety, and lower cost of living.',
    date: 'February 28, 2026',
    tag: 'Research',
    readTime: '10 min read',
  },
  {
    slug: 'international-school-guide',
    title: 'International Schools 101: What American Parents Need to Know',
    description: 'IB vs American curriculum, accreditation, costs, and how to evaluate schools from abroad before your visit.',
    date: 'February 28, 2026',
    tag: 'Guide',
    readTime: '8 min read',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link href="/" className="text-amber-400 hover:text-amber-300 text-sm">← Back to Relocate</Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 text-lg mb-12">Guides and research for families relocating internationally.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">{post.tag}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs text-gray-500">· {post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
