import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  className = '',
  style = {},
  aspectRatio = '100%' // 100% => square
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const firstRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel', 'absolute', 'hidden');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = `${size}%`;
        pixel.style.height = `${size}%`;
        pixel.style.left = `${col * size}%`;
        pixel.style.top = `${row * size}%`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate) => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const firstEl = firstRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl || !firstEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) delayedCallRef.current.kill();

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: { each: staggerDuration, from: 'random' },
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      firstEl.style.display = activate ? 'none' : 'block';
      activeEl.style.pointerEvents = activate ? 'auto' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: { each: staggerDuration, from: 'random' },
    });
  };

  const handleMouseEnter = () => !isActive && animatePixels(true);
  const handleMouseLeave = () => isActive && animatePixels(false);
  const handleClick = () => animatePixels(!isActive);

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-[#1d1d20]
        text-white
        rounded-[15px]
        border-2 border-white/20
        w-full
        relative overflow-hidden
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      {/* Aspect-ratio box: 100% makes it a square */}
      <div style={{ paddingTop: aspectRatio }} />

      <div ref={firstRef} className="absolute inset-0 w-full h-full">
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: 'none' }}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
}

export default PixelTransition;