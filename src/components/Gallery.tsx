const PHOTOS = [
  { id: 1043, alt: 'Raiutud puud metsaservas', caption: 'Ohtliku kuuse langetamine, Haapsalu' },
  { id: 1015, alt: 'Korrastatud metsatee', caption: 'Metsatee raadamine, Ridala vald' },
  { id: 1018, alt: 'Kinnistu piir pärast hooldust', caption: 'Kinnistu võsast puhastamine, Taebla' },
  { id: 1044, alt: 'Küttepuud virnas', caption: 'Küttepuude ladustamine, Lihula' },
  { id: 28, alt: 'Roheline haljasala', caption: 'Haljasala rajamine, Uuemõisa' },
  { id: 1049, alt: 'Metsavaheline tee', caption: 'Torminõmme koristustööd, Nõva' },
]

export function Gallery() {
  return (
    <section id="tood" className="bg-[var(--color-bark)] py-24 text-[var(--color-stone)]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-rust-bright)]">
          Portfoolio
        </p>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-tight md:text-5xl">
          Tehtud tööd räägivad enda eest
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {PHOTOS.map((photo, index) => (
            <figure
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 aspect-[16/10] md:col-span-2 md:aspect-[16/10]' : 'aspect-square'
              }`}
            >
              <img
                src={`https://picsum.photos/id/${photo.id}/900/700`}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-4 text-sm transition-transform duration-300 group-hover:translate-y-0">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
