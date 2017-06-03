import {StackNavigator} from 'react-navigation'; 

import Contacts from '../screens/Contacts'; 
import Details from '../screens/Details'; 

  const ContactsStack = StackNavigator({
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts', 
        },
    }, 
    Details: {
        screen: Details, 
        navigationOptions: {
            title: 'Details',
        },
    },
});

export default ContactsStack; 
