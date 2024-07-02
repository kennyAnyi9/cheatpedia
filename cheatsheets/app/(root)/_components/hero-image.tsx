import { BorderBeam } from "@/components/ui/beam";

export function HeroImage() {
  return (
    <div className="relative rounded-lg mx-auto">
      <img
        src="./hero-image-dark.png"
        alt="Hero Image"
        className="hidden w-full rounded-[inherit] border object-contain shadow-lg dark:block"
      />
      <img
        src="./hero-image-light.png"
        alt="Hero Image"
        className="block w-full rounded-[inherit] border object-contain shadow-lg dark:hidden"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
