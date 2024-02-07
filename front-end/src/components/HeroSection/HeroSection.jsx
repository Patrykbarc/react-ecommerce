import { SummerBanner } from "../SummerBanner/SummerBanner";

export function HeroSection() {
  return (
    <div className="bg-hero h-[45dvh] w-full bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto mt-14">
        <SummerBanner />
      </div>
    </div>
  );
}
