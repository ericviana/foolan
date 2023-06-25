type IconProps = {
  size?: number;
  color?: string;
  className?: string;
};

export type IconComponent = (props: IconProps) => JSX.Element;