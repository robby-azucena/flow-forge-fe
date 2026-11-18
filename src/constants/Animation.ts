import { TargetAndTransition, Transition, VariantLabels } from "motion/react";

type AnimationType = boolean | TargetAndTransition | VariantLabels | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ANIM_DURATION: Transition<any> = { duration: 0.2 };

// NOTE - Container
const ANIM_INITIAL: AnimationType = {
  y: 10,
  opacity: 0,
};

const ANIM_TARGET: AnimationType = {
  y: 0,
  opacity: 1,
};

const ANIM_EXIT: AnimationType = {
  y: -10,
  opacity: 0,
};

// NOTE - Sidebar
const ANIM_SIDE_INITIAL: AnimationType = {
  x: -10,
  opacity: 0,
};

const ANIM_SIDE_TARGET: AnimationType = {
  x: 0,
  opacity: 1,
};

const ANIM_SIDE_EXIT: AnimationType = {
  x: -10,
  opacity: 0,
};

export const ANIM_FADE = {
  initial: ANIM_INITIAL,
  animate: ANIM_TARGET,
  exit: ANIM_EXIT,
  transition: ANIM_DURATION,
};

export const ANIM_SIDEBAR = {
  initial: ANIM_SIDE_INITIAL,
  animate: ANIM_SIDE_TARGET,
  exit: ANIM_SIDE_EXIT,
  transition: ANIM_DURATION,
};
