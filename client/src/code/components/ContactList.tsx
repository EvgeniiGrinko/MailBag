const React = require("react");

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Person from "@material-ui/icons/Person";

const ContactList = ( { state } : any ) => (
    <List>
        {state.contacts.map((value : any) => {
        return (
            <ListItem key={ value } button onClick={ 
                () => state.showContact(value._id, value.name, value.email)
                }>
                <ListItemAvatar>
                    <Avatar>
                        <Person />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ `${value.name}` } /></ListItem>
            );
        })}
    </List>
   
);
export default ContactList;