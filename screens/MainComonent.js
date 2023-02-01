import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, View, Image, Text, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import TheLostMind from "../game/TheLostMind";
import hatMan from '../assets/hatMan.png'
import Constants  from "expo-constants";
import ContactUs from "./ContactUs";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#000000'}
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='The Beginning'
                component={TheLostMind}
                options={({navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon 
                            name='bars'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })} 
            />
            <Stack.Screen
                name='Contact Us'
                component={ContactUs}
                options={({navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon 
                            name='bars'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })} 
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View style={{ flex:1 }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={styles.drawerStyle}
                drawerContentOptions={styles.drawerContentOptions}
            >
                <Drawer.Screen name='The Beginning' component={HomeNavigator} />
                <Drawer.Screen name='Contact Us' component={ContactUs} />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    drawerStyle: {
        backgroundColor: '#000000',
        borderRightWidth: 4, borderColor: 'white',
        marginTop: 40, borderTopWidth: 4
    },
    drawerContentOptions: {
        activeTintColor: 'white',
        inactiveTintColor: 'white'
    }
})

export default Main;