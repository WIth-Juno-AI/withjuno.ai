import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

export const AboutSection = () => {
  return (
    <section className="bg-mint-50 py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h1 className="text-muted-foreground mb-4 text-4xl font-semibold md:text-5xl">
            About Us
          </h1>

          <h2 className="max-w-[600px] flex-1 text-balance text-lg leading-6">
            Juno AI is an AI research and development company. We build
            intelligence that benefits all learners.
          </h2>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <img
              src="/images/about/1.webp"
              alt="Modern workspace with an iMac displaying 'DO MORE'"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <img
              src="/images/about/2.webp"
              alt="Person working on a laptop"
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Dynamic System Section */}
          <h2 className="max-w-xl text-2xl font-semibold leading-8 md:text-3xl lg:translate-x-24">
            Our vision for AI and learning
          </h2>
          <p className="max-w-xl text-lg lg:translate-x-24">
            Generative AI can perceive, adapt, and deeply understand the world.
            For learning—a uniquely human pursuit—this unparalleled capability
            demands a deliberate, principled approach. Our vision at Juno AI is
            to responsibly shape this future, ensuring AI accelerates
            understanding with unwavering safety, pedagogical integrity, and
            sovereign control for every learner.
          </p>
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <img
              src="/images/about/3.webp"
              alt="Team members collaborating"
              width={600}
              height={400}
            />
            <img
              src="/images/about/4.webp"
              alt="Team meeting in a conference room"
              width={600}
              height={400}
            />
          </div>

          {/* Timeline Section */}
          <p className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            We started building Juno AI in 2023, driven by a need to teach
            world-class computing at scale. We even won a few awards for it.
            Now, we want to share everything we&apos;ve learned.
          </p>

          {/* Team Section */}
          <h2 className="ml-auto max-w-xl text-2xl font-semibold leading-8 md:text-3xl lg:-translate-x-24">
            We are a bit of an unusual team — not your standard tech startup.
          </h2>
          <div className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24">
            <p>
              We are a team of leading academics in ML in Sydney, Australia.
              Over time, we&apos;ll make this page more polished, but right now
              we&apos;re focused on delivering for our users. If you&apos;d like
              to work with us, our doors are always open.
            </p>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 mt-6 rounded-sm border md:mt-8 lg:mt-10"
            >
              <a href="#" className="">
                <span className="flex items-center gap-2 whitespace-pre-wrap text-start">
                  View Open roles
                  <ArrowRight className="stroke-3 size-4" />
                </span>
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};
