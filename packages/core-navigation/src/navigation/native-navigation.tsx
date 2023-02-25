import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationTypeService} from '@core/types';

const Stack = createNativeStackNavigator();

interface NativeNavigationProps {
  routes: NavigationTypeService.INavigationRoutes;
}

export const NativeNavigation = ({routes}: NativeNavigationProps) => {
  return (
    <Stack.Navigator>
      <>
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component as any}
            options={{
              title: route.title,
            }}
          />
        ))}
      </>
    </Stack.Navigator>
  );
};

export default NativeNavigation;
