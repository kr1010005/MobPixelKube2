import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashSCreen';
import {Login} from './Login';
import {Dashboard} from './Dashboard';
import {BookRoom} from './Home/components/BookRoom';
import {BookDesk} from './Home/components/BookDesk';
import {InstantBooking} from './Home/components/InstantBooking';
import {BookParking} from './Home/components/BookParking';
import {BookServices} from './Home/components/BookServices';
import {FindColleague} from './Home/components/FindColleague';
import {ManageVisitor} from './Home/components/ManageVisitor';
import {InstantBookingForm} from './Home/components/InstantBookingForm';

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InstantBooking"
          component={InstantBooking}
          options={{headerShown: true, headerTitle: 'Instant Booking'}}
        />
        <Stack.Screen
          name="BookRoom"
          component={BookRoom}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BookDesk"
          component={BookDesk}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BookParking"
          component={BookParking}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BookServices"
          component={BookServices}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="FindColleague"
          component={FindColleague}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ManageVisitor"
          component={ManageVisitor}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="InstantBookingForm"
          component={InstantBookingForm}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
