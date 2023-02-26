import {Button} from 'react-native';

interface UIButtonProps {
  onPress: () => void;
  variant?: 'primary';
}

const variants = {
  primary: '#f194ff',
};

export const UIButton = ({onPress, variant = 'primary'}: UIButtonProps) => {
  const variantStyle = variants[variant];

  return (
    <Button
      onPress={onPress}
      title="Learn More"
      color={variantStyle}
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default UIButton;
