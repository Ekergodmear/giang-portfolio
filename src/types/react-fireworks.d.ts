declare module 'react-fireworks' {
  interface FireworksProps {
    width?: number;
    height?: number;
    recycle?: boolean;
    numberOfPieces?: number;
    gravity?: number;
    colors?: string[];
    onComplete?: () => void;
  }

  const Fireworks: React.FC<FireworksProps>;
  export default Fireworks;
} 