const React = require("react");
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";


const MailboxList = ({ state }: any) => (
   
        <List>
            { state.mailboxes.map((value : any) => {
            return (
                <Chip label={ `${value.name}` } 
                onClick={ () => state.setCurrentMailbox(value.path) }
                style={{ width:128, marginBottom:10 }}
                color={ state.currentMailbox === value.path ? "secondary" : "primary" } />
                );
                } ) }
            </List>
    
    );
export default MailboxList;