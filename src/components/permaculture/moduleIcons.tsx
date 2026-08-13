interface IconProps {
  size?: number;
}

export function SwaleIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M3 8 C7 8, 8 16, 12 16 C16 16, 17 8, 21 8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function NativePlantIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 21 V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 14 C7 14, 5 10.5, 6 6 C11 6.5, 13.5 10, 12 14 Z" fill="#fff" />
      <path d="M12.4 9.5 C17 8.4, 19.5 10.8, 18.9 14.6 C14.6 14.9, 11.7 12.5, 12.4 9.5 Z" fill="#fff" opacity="0.75" />
    </svg>
  );
}

export function RainGardenIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M12 2C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-13z" fill="#fff" />
    </svg>
  );
}

export function RainBarrelIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="6" y="3.5" width="12" height="17" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <line x1="6" y1="9.5" x2="18" y2="9.5" stroke="#fff" strokeWidth="1.4" />
      <line x1="6" y1="14.5" x2="18" y2="14.5" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

export function RerouteIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M8 3v10a4 4 0 0 0 4 4h6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 14l3 3-3 3" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CurbCutIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M2 9h6l3 6h2l3-6h6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
