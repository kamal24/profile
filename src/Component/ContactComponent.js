import React,{Component} from 'react';
import {Row,Col,Card} from 'antd';

class ContactComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <h1>Welcome to Contact Page</h1>
                <Row>
                    You can contact me at +919742368666 or kmlgrg2425@gmail.com
                </Row>
            </Card>
        )
    }
}

export default ContactComponent;