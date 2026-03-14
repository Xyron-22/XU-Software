import { BLOG_POSTS, CATEGORY_COLORS } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogDetailBody from "@/components/blog/BlogDetailBody";
import BlogSidebar from "@/components/blog/BlogSidebar";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 2);

  return (
    <div style={{ background: "#020817", minHeight: "100vh" }}>
      {/* Back link */}
      <div className="container mx-auto px-6 pt-28 pb-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>

      <BlogDetailHero post={post} />

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Main article */}
          <main className="flex-1 min-w-0">
            <BlogDetailBody post={post} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share buttons */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-sm text-muted-foreground">Share:</span>
              {["Twitter", "LinkedIn", "Copy Link"].map((btn) => (
                <button
                  key={btn}
                  className="px-4 py-1.5 rounded-lg text-xs font-medium border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {btn}
                </button>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-10 bg-card border border-border rounded-xl p-6 flex gap-5">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shrink-0">
                {post.author.initials}
              </div>
              <div>
                <div className="font-semibold text-lg mb-1">
                  {post.author.name}
                </div>
                <div className="text-sm text-primary mb-2">
                  {post.author.role} at XU Software
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert in software architecture and scalable systems with 10+
                  years of experience building products for global companies.
                </p>
              </div>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`}>
                      <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 glow-card">
                        <div
                          className={`h-28 bg-linear-to-br ${r.coverGradient} relative`}
                        >
                          <div className="absolute inset-0 dot-grid opacity-20" />
                        </div>
                        <div className="p-4">
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded-full border ${CATEGORY_COLORS[r.category]}`}
                          >
                            {r.category}
                          </span>
                          <h4 className="font-semibold text-sm mt-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {r.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <BlogSidebar post={post} related={related} />
          </aside>
        </div>
      </div>
    </div>
  );
}
