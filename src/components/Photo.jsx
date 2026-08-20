import { forwardRef } from 'react';
import { srcSet, fallbackSrc } from '../lib/image';

// Responsive photo: serves WebP with a JPEG fallback, at a size matched to
// how large the image actually renders (via `sizes`), instead of shipping a
// full desktop-resolution file to every viewport. `style` sizes/positions
// the <picture> box itself; `imgStyle` covers img-only rules (object-fit).
const Photo = forwardRef(function Photo({ base, alt = '', sizes, style, imgStyle, eager = false, ...rest }, ref) {
  return (
    <picture style={{ display: 'block', ...style }}>
      <source type="image/webp" srcSet={srcSet(base, 'webp')} sizes={sizes} />
      <img
        ref={ref}
        src={fallbackSrc(base)}
        srcSet={srcSet(base, 'jpg')}
        sizes={sizes}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding={eager ? undefined : 'async'}
        style={imgStyle}
        {...rest}
      />
    </picture>
  );
});

export default Photo;
