"use client";

export default function BlogDetailBody({ post }) {
  const { body, excerpt } = post;

  if (!body || body.length === 0) {
    return (
      <div className="prose-custom">
        <p className="text-muted-foreground text-lg leading-relaxed">
          {excerpt}
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          This article is coming soon. Check back later for the full content.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-5 text-[15px] leading-relaxed">
      {body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-foreground mt-10 mb-3 first:mt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.type === "blockquote") {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-primary bg-primary/5 rounded-r-xl px-6 py-4 my-6 text-foreground italic"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "code") {
          return (
            <pre
              key={i}
              className="bg-card border border-border rounded-xl p-5 overflow-x-auto text-sm font-mono text-green-400 my-6"
            >
              <code>{block.text}</code>
            </pre>
          );
        }
        return null;
      })}
    </div>
  );
}
