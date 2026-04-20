'use client';

export default function Bullet ( {
  tone,
  lightTone,
  children,
  innerCircleIndex,
}: {
  tone: string;
  lightTone: string;
  children: React.ReactNode;
  innerCircleIndex: number;
} ) {
  const innerCirclePositions = [
    {
      left: '35%',
      top: '55%',
    },
    {
      left: '40%',
      top: '35%',
    },
    {
      left: '60%',
      top: '35%',
    },
    {
      left: '55%',
      top: '60%',
    },
  ];
  
  const left = innerCirclePositions[innerCircleIndex]?.left || '40%';
  const top = innerCirclePositions[innerCircleIndex]?.top || '35%';
    
  return (
    <li className="flex items-start gap-4">
      <span className="relative mt-[2px] h-9 w-9 flex-none">
        <span
          className="absolute inset-0 rounded-full border-4"
          style={{ borderColor: 'rgba(0,0,0,0.22)', background: tone }}
          aria-hidden="true"
        />
        {/* “floating” inner dot */}
        <span
          className="absolute h-4 w-4 rounded-full"
          style={{
            background: lightTone,
            left: left,
            top: top,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 2px 0 rgba(0,0,0,0.12)',
          }}
          aria-hidden="true"
        />
      </span>

      <p className="text-[1.05rem] leading-relaxed">
        {children}
      </p>
    </li>
  );
}