import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Search } from './pages/Search';
import { CategoryPosts } from './pages/CategoryPosts';

const Stack = createNativeStackNavigator();

function Routes() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Home'
        component={Home}
      />
      <Stack.Screen 
        name='Detail'
        component={Detail}
      />
      <Stack.Screen 
        name='CategoryPosts'
        component={CategoryPosts}
      />
      <Stack.Screen 
        name='Search'
        component={Search}
      />
    </Stack.Navigator>
  );
}

export { Routes };