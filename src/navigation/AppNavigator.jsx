

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import LoginPage from '../screens/LoginPage';
import SideProfile from '../components/sideprofile';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <SideProfile {...props} />}
        drawerPosition="right"
        drawerType="slide"
        screenOptions={{ headerShown: false }}
        drawerStyle={{ width: 250 }}
      >
        <Drawer.Screen name="Login" component={LoginPage} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}