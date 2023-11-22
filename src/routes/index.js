import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import SentenceHistory from "../pages/SentenceHistory";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="SentenceHistory"
            component={SentenceHistory}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}