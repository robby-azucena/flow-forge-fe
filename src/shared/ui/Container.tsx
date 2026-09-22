import { GLASS_STYLES } from "@/constants/Colors";
import { Box, BoxProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import { ComponentType, ElementType, FC, ReactNode } from "react";

const MotionBox = motion.create(Box) as ComponentType<ContainerProps>;

type ConflictingProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "style";

interface ContainerProps extends Omit<BoxProps, ConflictingProps>, MotionProps {
  children: ReactNode;
  glass?: "thin" | "base" | "thick";
  component?: ElementType;
}

const Container: FC<ContainerProps> = ({
  component,
  children,
  glass,
  sx,
  ...props
}) => {
  const glassStyles = glass ? GLASS_STYLES[glass] : undefined;

  return (
    <MotionBox
      {...props}
      component={component ?? "div"}
      sx={[
        {
          // "backdropFilter" isn't valid inside a transition string —
          // it needs the CSS property name, not the camelCase JS key
          transition:
            "background-color 0.3s ease, backdrop-filter 0.3s ease, border 0.3s ease",
        },
        glassStyles ?? {},
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </MotionBox>
  );
};

export default Container;
