import { BorderBeam } from "@/components/ui/beam";

export function HeroImage() {
  return (
    <div className="relative rounded-lg mx-auto">
      <img
        src="./borderbeam.png"
        alt="Hero Image"
        className="hidden w-[700px] rounded-[inherit] border object-contain shadow-lg dark:block"
      />
      <img
        src="./borderbeam.png"
        alt="Hero Image"
        className="block w-[700px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
