import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  // Wrapper ensures only the visible variant determines height (the other is display:none)
  return (
    <div id="hero">
      <HeroDesktop />
      <HeroMobile />
    </div>
  );
}