import Image from "next/image";

type PageHeroBackgroundProps = {
  priority?: boolean;
};

const PageHeroBackground = ({ priority = false }: PageHeroBackgroundProps) => {
  return (
    <>
      <Image
        src="/assets/img/slider/serviebg.jpg"
        alt=""
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ictim-navy/92 via-ictim-navy/75 to-ictim-primary/50" />
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(30,64,175,0.5) 0%, transparent 60%)",
        }}
      />
    </>
  );
};

export default PageHeroBackground;
