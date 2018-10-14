import React,{Component} from 'react';
import {Row,Col,Card,Timeline,Icon,Carousel} from 'antd';

class ResumeComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <h1>Resume</h1>
                <Row>
                    <Col md={12}>
                        <Card bordered={false}>
                            <Timeline style={{marginTop:20}}>
                                <Timeline.Item dot={<Icon type="laptop" style={{fontSize:30}} ></Icon>}><span style={{margin:15}}>Working History</span></Timeline.Item>
                                <Timeline.Item><h3>Freelancer</h3><h4>2015-Present</h4></Timeline.Item>
                                <Timeline.Item><h3>Edgeverve</h3><h4>2018-Present</h4></Timeline.Item>
                                <Timeline.Item><h3>Infosys</h3><h4>2015-2018</h4></Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                    

                    <Col md={12}>
                        <Card bordered={false}>
                            <Timeline style={{marginTop:20}}>
                                <Timeline.Item dot={<Icon type="bank" style={{fontSize:30}} ></Icon>}><span style={{margin:15}}>Education History</span></Timeline.Item>
                                <Timeline.Item><h3>Jaypee University Of Information Tech.</h3><h4>2011-2015</h4></Timeline.Item>
                                <Timeline.Item><h3>Paradise Internation School</h3><h4>2009-2010</h4></Timeline.Item>
                                <Timeline.Item><h3>New Malwa Public School</h3><h4>2007-2008</h4></Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                    
                </Row>

            </Card>
        )
    }
}

export default ResumeComponent;