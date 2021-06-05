import * as React from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
const Header = () => {
    return (
        <Appbar.Header style={{backgroundColor:"#4089ff",color:"#fffffd"}}>
       <Appbar.Content color="white"  title="Title" />
       
        <Appbar.Action color="white" icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
    )
}

  

export default Header