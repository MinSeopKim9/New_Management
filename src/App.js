// c:\React Project Tutorial\management>yarn start
// 웹사이트 화면 출력 담당
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
//import { withStyles } from "@mui/material/styles";


  /* const styles = theme => ({
  root: {
    width: '100%',
    margintTop: theme.spacing.unit * 3,
    overflow: "auto"
  },
  table: {
    maxWidth: 1080
  }
})  */

const customers = [ 
{
  'id': 1,
  'company': '필에너지',
  'name': '김민섭',
  'department' : '경영지원팀',
  'equipment': '노트북, 모니터'
},

{
  'id': 2,
  'company': '필옵틱스',
  'name': '신철',
  'department' : '경영지원팀',
  'equipment': '데스크톱, 모니터2EA, 마우스1EA'
},

{
  'id': 3,
  'company': '필에너지',
  'name': '강덕환',
  'department' : '경영지원팀',
  'equipment': '노트북, 태블릿'
}
]

// components의 Customer.js 불러와서 App component안에서 출력
class App extends Component{
  render() {
    return (
         <TableContainer component={Paper} sx={{maxHeight:'1080px'}}>
          <Table stickyHeader sx={{maxWidth: '1080px', minWidth: '1080px'}}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>소속</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>부서</TableCell>
            <TableCell>비품</TableCell>
          </TableRow>
         </TableHead>
       <TableBody> 
        { customers.map(c => {
              return (
                <Customer
                key={c.id}
                id={c.id}
                company={c.company}
                name={c.name}
                department={c.department}
                equipment={c.equipment}
                />
              );
            })
          }
          </TableBody>
          </Table>
        </TableContainer>
    );
  }
}

export default App;
//export default withStyles(styles)(App);