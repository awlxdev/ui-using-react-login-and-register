import Waves from '../component/Waves.jsx';

export default function WaveBackground() {
  return (
    <div className="wave-background" aria-hidden="true">
      <div className="wave-glow wave-glow-one" />
      <div className="wave-glow wave-glow-two" />

      <Waves
        lineColor="#6688ff"
        accentColor="#a78bfa"
        backgroundColor="transparent"
        lineStyle="solid"
        spacing={15}
        lineWidth={0.8}
        amplitude={35}
        speed={0.35}
        scale={1.1}
        twist={0.8}
        variation={3}
        mouseInteraction={true}
        mouseRadius={160}
        mouseStrength={0.7}
        clickRipple={true}
        intro={true}
        opacity={0.55}
        fade={0.35}
      />
    </div>
  );
}
