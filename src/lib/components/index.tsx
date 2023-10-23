import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from './Dashboard';
import {BookDesk} from './Home/components/BookDesk';
import {BookParking} from './Home/components/BookParking';
import {BookRoom} from './Home/components/BookRoom';
import {BookServices} from './Home/components/BookServices';
import {FindColleague} from './Home/components/FindColleague';
import {InstantBooking} from './Home/components/InstantBooking';
import {InstantBookingForm} from './Home/components/InstantBooking/InstantBookingForm';
import {ManageVisitor} from './Home/components/ManageVisitor';
import {Login} from './Login';
import SplashScreen from './SplashSCreen';
import {EditProfile} from './Profile/EditProfile';

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
          options={{headerTitle: 'Instant Booking'}}
        />
        <Stack.Screen
          name="BookRoom"
          component={BookRoom}
          options={{headerTitle: 'Book Room'}}
        />
        <Stack.Screen
          name="BookDesk"
          component={BookDesk}
          options={{headerTitle: 'Book Desk'}}
        />
        <Stack.Screen
          name="BookParking"
          component={BookParking}
          options={{headerTitle: 'Book Parking'}}
        />
        <Stack.Screen
          name="BookServices"
          component={BookServices}
          options={{headerTitle: 'Book Services'}}
        />
        <Stack.Screen
          name="FindColleague"
          component={FindColleague}
          options={{headerTitle: 'Find Colleague'}}
        />
        <Stack.Screen
          name="ManageVisitor"
          component={ManageVisitor}
          options={{headerTitle: 'Manage Visitor'}}
        />
        <Stack.Screen
          name="InstantBookingForm"
          component={InstantBookingForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
