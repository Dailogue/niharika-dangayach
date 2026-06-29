const message =
  "Studio HQ is open for new virtual makeover bookings this season";

export default function AnnouncementMarquee() {
  // Duplicate the content so the loop is seamless.
  const items = Array.from({ length: 8 });
  return (
    <div className="overflow-hidden bg-brown py-2 text-cream">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className="mx-6 text-xs uppercase tracking-label"
          >
            {message} <span className="mx-3">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}
