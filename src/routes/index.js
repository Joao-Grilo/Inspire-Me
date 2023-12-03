import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { store } from '../store'
import GoalList from "../pages/GoalList";
import NewGoal from "../pages/NewGoal";
import GoalDetails from "../pages/GoalDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNavigation() {
    const navigation = useNavigation()

    useEffect(() => {
        const checkAuthState = async () => {
            await store.user.autoLogin()
            if (store.user.currentUser) navigation.navigate('Home')
        }

        checkAuthState()
    }, [])

    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false,
                }}
            />

            <Stack.Screen
                name="GoalList"
                component={GoalList}
                options={{headerShown: false,
                }}
            />

            <Stack.Screen
                name="NewGoal"
                component={NewGoal}
                options={{headerShown: false,
                }}
            />

            <Stack.Screen
                name="GoalDetails"
                component={GoalDetails}
                options={{headerShown: false,
                }}
            />

            
        </Stack.Navigator>
    )
}

