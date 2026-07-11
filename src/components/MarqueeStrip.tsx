interface MarqueeStripProps {
  items: string[];
}

export default function MarqueeStrip({ items }: MarqueeStripProps) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-paper/10 py-4">
      <div className="flex w-max gap-10 animate-marquee whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-sm uppercase tracking-[0.2em] text-paper/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}