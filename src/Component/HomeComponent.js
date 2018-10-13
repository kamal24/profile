import React,{Component} from 'react';
import {Row,Col,Card,Icon,Progress} from 'antd';

class HomeComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card>
                <Row>
                    <h1>About Me</h1>
                    <p>I am a software developer having 3 years of experience in IT. Worked in infosys for 2.8 years and right now, working in edgeverve. In Edgeverve, working in Finacle Research and developement Team.
                        Always love to help other people in coding. Have experience in freelancing also. Worked on many freelancing projects. Prefer to work on web and mobile app devlopment projects.
                        These days, I am learning react, flutter and machine learning.
                    </p>
                </Row>

                <h1>My Service</h1>
                <Row gutter="16">   
                    <Col md={6}>
                        <Card>
                            <Icon type="global" style={{fontSize:64}}></Icon>
                            <h2>Web Development</h2>
                            <p>I have been working on web devlopement from last 6 years</p>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Icon type="global" style={{fontSize:64}}></Icon>
                            <h2>Mobile Development</h2>
                            <p>I have been working on mobie app devlopement from last 2 years</p>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card style={{height: 264}}>
                            <Icon type="global" style={{fontSize:64}}></Icon>
                            <h2>Team Management</h2>
                            <p>I Know how to work in the team</p>
                        </Card>
                    </Col>
                    
                    <Col md={6}>
                      <Card style={{height: 264}}>
                            <Icon type="global" style={{fontSize:64}}></Icon>
                            <h2>Fast Delivery</h2>
                            <p>I deliver your business as fast as possible.</p>
                        </Card>
                    </Col>

                </Row>

                <Row style={{marginTop:20}} gutter="16">
                    <Col md={12}>

                        <Card title="Framework Skills">  
                            <h4>React</h4>                          
                            <Progress percent={30} showInfo={false} strokeColor="green"></Progress>
                            
                            <h4>Flutter</h4>   
                            <Progress percent={60} showInfo={false}></Progress>

                            <h4>Hibernate</h4>
                            <Progress percent={90} showInfo={false} strokeColor="purple"></Progress>
                        </Card>

                    </Col>

                    <Col md={12}>
                        
                        <Card title="Code Skills">
                            <h4>Kotlin</h4>  
                            <Progress percent={30} showInfo={false} strokeColor="red"></Progress>
                            
                            <h4>JavaScript</h4>  
                            <Progress percent={60} showInfo={false} strokeColor="orange"></Progress>
                            
                            <h4>Java</h4>  
                            <Progress percent={90} showInfo={false} ></Progress>
                        </Card>

                    </Col>
                </Row>

            </Card>
        );
    }
}

export default HomeComponent;