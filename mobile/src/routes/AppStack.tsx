import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';

import StudyTabs from "./StudyTabs";

import WelcomeStudy from '../pages/Welcome/WelcomeStudy';

import WelcomeGV from "../pages/Welcome/WelcomeGV";

const { Navigator, Screen } = createStackNavigator();

const primeiro_acesso = true;

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                {primeiro_acesso && <Screen name="Welcome" component={WelcomeStudy} />}
                {primeiro_acesso && <Screen name="WelcomeGV" component={WelcomeGV} />}
                <Screen name="Landing" component={Landing} />
                <Screen name="Study" component={StudyTabs} />
                <Screen name="GiveClasses" component={GiveClasses} />
            </Navigator>
        </NavigationContainer>
    )
}


export default AppStack;