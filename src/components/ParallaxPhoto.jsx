import { useParallax } from '../hooks/useParallax';
import Photo from './Photo';

// A photo that drifts subtly as it crosses the viewport (desktop/hover only —
// see useParallax). The image is pre-scaled so the drift never exposes an
// edge; the outer box stays fixed size and clips it.
export default function ParallaxPhoto({ base, alt, sizes, style, range = 16, eager, fit = 'cover', role, 'aria-label': ariaLabel, ...rest }) {
  const imgRef = useParallax(range);
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} role={role} aria-label={ariaLabel} {...rest}>
      <Photo
        ref={imgRef}
        base={base}
        alt={alt}
        sizes={sizes}
        eager={eager}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        imgStyle={{ width: '100%', height: '100%', objectFit: fit, transform: 'scale(1.1)', transformOrigin: 'center' }}
      />
    </div>
  );
}
