import {
  Bug,
  Bell,
  Sparkles,
  User,
  Pyramid,
  AlignCenter,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";

export const Feature1 = () => {
  const ITEMS = [
    {
      value: "559,615",
      label: "Uses of Juno AI",
      icon: User,
    },
    {
      value: "~50%",
      label: "Increase in educational alignment* ",
      icon: ArrowBigRightDash,
    },
    {
      value: "8",
      label: "Pedagogical principles",
      icon: Pyramid,
    },
  ];

  return (
    <section id="feature1" className="py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row">
          <h2 className="flex-1 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Tailor made for learning
          </h2>
          <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
            It is early days, but Juno AI already integrates into different
            tools and platforms. From foundational learning to advanced
            training, Juno AI helps students learn.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
          {ITEMS.map((metric, i) => (
            <div
              key={i}
              className="from-muted to-mint bg-linear-to-b relative flex flex-col justify-between overflow-hidden rounded-[24px] [aspect-ratio:3.5/2.6] md:[aspect-ratio:3.8/4]"
            >
              <div className="p-8 pb-2">
                <metric.icon className="fill-primary size-10" />
              </div>
              <div className="p-6">
                <div className="text-6xl font-semibold tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xl font-semibold tracking-tight">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-muted-foreground mt-6 text-end text-sm">
          *compared to prompt-engineered models
        </div>
      </div>
    </section>
  );
};
