//#region Imports
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home'
import Info from '../pages/Info';
import Profile from '../pages/Profile';
//#endregion


const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Info' component={Info} />
            <Drawer.Screen name='Profile' component={Profile} />
        </Drawer.Navigator>
    )
}

export default Routes