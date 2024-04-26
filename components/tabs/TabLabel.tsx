import { L12 } from '../common/Typography/Labels';

interface Props {
  focused: boolean;
  color: string;
  label: string;
}

function TabLabel({ focused, color, label }: Props) {
  return (
    <L12
      otherProps={{
        color,
        fontWeight: focused ? '$bold' : '$normal',
      }}
    >
      {label}
    </L12>
  );
}

export default TabLabel;
