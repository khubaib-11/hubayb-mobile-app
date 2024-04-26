import type { IconProps } from '@tamagui/helpers-icon';

type TabBarIconProps = {
  icon: React.NamedExoticComponent<IconProps>;
  focused: boolean;
  color: string;
};
function TabBarIcon({ icon: IconComponent, focused, color }: TabBarIconProps) {
  return (
    <IconComponent
      size={24}
      color={color}
      strokeWidth={focused ? 2 : 1.5}
    />
  );
}

export default TabBarIcon;
