import { motion, useAnimationControls } from "framer-motion";
export default function TextSpan({ children }: { children: React.ReactNode }) {
  const control = useAnimationControls();
  const handleScale = () => {
    control.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.5,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
    
      ],
    });
  };
  return (
    <motion.span animate={control} onMouseOver={() => handleScale()}>
      {children}
    </motion.span>
  );
}
