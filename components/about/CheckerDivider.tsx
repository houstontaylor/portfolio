import { useId } from 'react';

type CheckerDividerProps = {
  height?: number;        // px
  squareSize?: number;    // px
  fg?: string;            // checker color (CSS var ok)
  bg?: string;            // background color behind checkers (CSS var ok)
  className?: string;
  widthUnits?: number;    // internal svg width; bigger = more repeats
};

export default function CheckerDivider({
  height = 24,
  squareSize = 12,
  fg = 'var(--dark-green)',
  bg = 'transparent',
  className = '',
  widthUnits = 1200,
}: CheckerDividerProps) {
  const patternId = useId();

  return (
    <svg
      className={className}
      width="100%"
      height={height}
      viewBox={`0 0 ${widthUnits} ${height}`}
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
      style={{ background: bg, display: 'block' }}
    >
      <defs>
        <pattern
          id={patternId}
          width={squareSize * 2}
          height={squareSize * 2}
          patternUnits="userSpaceOnUse"
        >
          {/* two filled squares of a 2x2 tile */}
          <rect width={squareSize} height={squareSize} fill={fg} />
          <rect
            x={squareSize}
            y={squareSize}
            width={squareSize}
            height={squareSize}
            fill={fg}
          />
        </pattern>
      </defs>

      {/* Make the rect wide so the pattern actually repeats */}
      <rect x="0" y="0" width={widthUnits} height={height} fill={`url(#${patternId})`} />
    </svg>
  );
}
