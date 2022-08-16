import SimpleSlider from "./SimpleSlider";
import Search from "./Search";


function Hero() {
  return (
    <div className="hero">
      <h1 className="heroh1">
        YuTunes + YuPods
      </h1>
      <p>Listen to your favourite songs and podcasts over here, enjoy </p>
      <Search/>
     < SimpleSlider/ >
    
    </div>
  );
}

export default Hero;
