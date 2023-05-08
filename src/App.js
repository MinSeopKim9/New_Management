// c:\React Project Tutorial\management>yarn start
// 웹사이트 화면 출력 담당
import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '김민섭dd',
  'birthday': '950420',
  'gender' : '남자',
  'job': '경영지원실'
},

{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '전소영',
  'birthday': '9600000',
  'gender' : '남자',
  'job': '블로그담당자'
},

{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '이상준',
  'birthday': '900000',
  'gender' : '남자',
  'job': '경영지원실'
}
]

// components의 Customer.js 불러와서 App component안에서 출력
class App extends Component{
  render() {
    return (
      <div>
          {
            //반복함수 이용 원소를 c로 순회, map 사용시 key 이용해야함
            customers.map(c => {
              return (
                <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
                />
              );
            })
          }
        </div>
    );
  }
}

export default App;
