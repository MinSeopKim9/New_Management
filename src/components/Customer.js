// Library를 불러옴
import React from 'react'; 

// Customer 정의, React의 component는 Library이자 class
class Customer extends React.Component {
   // render 항상 시행됨, Customer의 내용을 표현
    render() {
        return(
        <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
        </div>
        )
    }
}

// 사용자의 ID, image 렌더링
class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
// Library를 내보냄
export default Customer;