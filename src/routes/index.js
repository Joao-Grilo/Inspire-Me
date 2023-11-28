import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import GoalList from "../pages/GoalList";
import NewGoal from "../pages/NewGoal";

import Icon from 'react-native-vector-icons/AntDesign';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />

            <Tab.Screen
                name="GoalList"
                component={GoalList}
                options={{headerShown: false}}
                />

            <Tab.Screen
                name="NewGoal"
                component={NewGoal}
                options={{headerShown: false}}
                />
    </Tab.Navigator>
    );
  }

export default function StackNavigation() {
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
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{headerShown: false}}
                    />
            </Stack.Navigator>
    )
}

