// Library를 불러옴
import React from 'react'; 
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Customer extends React.Component {
    render() {
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.company}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.department}</TableCell>
                <TableCell>{this.props.equipment}</TableCell>
            </TableRow> 
            
        );
    }
}

export default Customer;