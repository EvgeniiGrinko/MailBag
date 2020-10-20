const React = require("react");
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
const MessageList = ({ state }: any) => (
 
        <Table stickyHeader padding="none">
        <TableHead>
            <TableRow>
                <TableCell style={{ width:120 }}>Date</TableCell>
                <TableCell style={{ width:300 }}>From</TableCell>
                <TableCell>Subject</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            { state.messages.map((message : any) => (
               
                <TableRow key={ message.id }
                    onClick={ () => state.showMessage(message) }>
                    <TableCell>
                        { new Date(message.date).toLocaleDateString() }
                    </TableCell>
                    <TableCell>{ message.from }</TableCell>
                    <TableCell>{ message.subject }</TableCell>
                </TableRow> 
                
            ) ) }
        </TableBody>
    </Table>
    
);
export default MessageList;