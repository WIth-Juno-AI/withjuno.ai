const ITEMS = [
  {
    name: "DCC",
    src: "/images/logos/dcc.svg",
    width: 200,
    height: 26,
    href: "https://dcc.cse.unsw.edu.au",
  },
  {
    name: "DCC Sidekick",
    src: "/images/logos/dcc-sidekick.svg",
    width: 200,
    height: 26,
    href: "https://dcc.cse.unsw.edu.au",
  },
  //   {
  //     name: "UNSW",
  //     src: "/images/logos/unsw.png",
  //     width: 50,
  //     height: 26,
  //     href: "https://unsw.edu.au",
  //   },
];

export default function Logos() {
  return (
    <section className="bg-sand-100 overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container text-center">
        <h2 className="text-balance text-xl font-semibold tracking-tight lg:text-3xl">
          With Juno.
          <br />
          <span className="text-muted-foreground">
            From next-gen edtech to academic institutions.
          </span>
        </h2>
      </div>

      <div className="relative mt-10">
        <div className="flex w-full">
          {/* First marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
          {/* Second marquee group */}
          <div className="animate-marquee flex shrink-0 items-center gap-12">
            {ITEMS.map((logo, index) => (
              <a href={logo.href} target="_blank" key={index} className="p-6">
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
