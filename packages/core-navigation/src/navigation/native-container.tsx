import {NavigationContainer} from '@react-navigation/native';

interface NativeContainerProps {
  children: React.ReactNode;
}

export const NativeContainer = ({children}: NativeContainerProps) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default NativeContainer;
