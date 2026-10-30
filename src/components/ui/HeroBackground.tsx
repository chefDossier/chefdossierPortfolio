import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/clock.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
}