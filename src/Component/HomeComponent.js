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
                    <p>I am software developer having 5.5 years of experience in IT industry. Have experience to work in challenging enviroment,
                        latest technologies and freelancing projects. I have keen interest in blockchain, ML, AI, cloud technolgies, flutter, microservice 
                        architecture, system design and serverless Programming. 
                        My future plan is to have my own startup which can solve real world problem and I am working towards it. If you have some idea then you can 
                        drop mail to kmlgrg2425@gmail.com and I am love to hear about your idea. If I like your idea then can work together.
                    </p>
                </Row>

                <h1>My Service</h1>
                <Row gutter="16">   
                    <Col md={6}>
                        <Card>
                            <Icon type="laptop" style={{fontSize:64, color:'#8A2BE2', margin:10, alignContent: 'center'}}></Icon>
                            <h2>Web APP Development</h2>
                            <p>I am full stack developer who can work on front end and back end both. I have knowledge web based framework like
                                wordpress, Joomla, Spring web framework. I have experience to work in cloud enviroment and apps are cloud friendly.
                                I am in learning phase for node.js.
                            </p>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Icon type="mobile" style={{fontSize:64, color:'#8A2BE2', margin:10, alignContent: 'center'}}></Icon>
                            <h2>Mobile APP Development</h2>
                            <p>I have keen interest in developing cross platform mobile apps by using flutter. I use android for native APP development. 
                                IOS is my future plan to learn for native app development.
                            </p>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <Icon type="code" style={{fontSize:64, color:'#8A2BE2', margin:10, alignContent: 'center'}}></Icon>
                            <h2>API Development</h2>
                            <p>I helped many teams to develop rest API by using spring boot and node.js. APIs are developed in microservices and 
                                these are deployed to cloud.
                                I can help in Development of serverless APIs. Helped team to develop cloud agnostic APIs.
                            </p>
                        </Card>
                    </Col>
                    
                    <Col md={6}>
                      <Card>
                            <Icon type="global" style={{fontSize:64, color:'#8A2BE2', margin:10, alignContent: 'center'}}></Icon>
                            <h2>Fast Delivery</h2>
                            <p>Freelancing demand fast delivery and I believe in that also. Try to delivery the work as soon as possible.</p>
                        </Card>
                    </Col>

                </Row>

                <Row style={{marginTop:20}} gutter="16">
                    <Col md={12}>

                        <Card title="Popular Skills">  
                            <h4>React</h4>                          
                            <Progress percent={30} showInfo={false} strokeColor="green"></Progress>
                            
                            <h4>Flutter</h4>   
                            <Progress percent={60} showInfo={false}></Progress>

                            <h4>Hibernate</h4>
                            <Progress percent={90} showInfo={false} strokeColor="purple"></Progress>

                            <h4>Microservice</h4>
                            <Progress percent={70} showInfo={false} strokeColor="orange"></Progress>

                            <h4>Spring Boot</h4>
                            <Progress percent={80} showInfo={false} strokeColor="red"></Progress>

                            <h4>Kubernetes and Docker</h4>
                            <Progress percent={70} showInfo={false} strokeColor="black"></Progress>

                            <h4>AWS, Google, Azure, IBM Cloud, cloud foundry</h4>
                            <Progress percent={70} showInfo={false} strokeColor="purple"></Progress>
                        </Card>

                    </Col>

                    <Col md={12}>
                        
                        <Card title="Programming Languages">
                            <h4>Kotlin</h4>  
                            <Progress percent={30} showInfo={false} strokeColor="red"></Progress>
                            
                            <h4>JavaScript</h4>  
                            <Progress percent={60} showInfo={false} strokeColor="orange"></Progress>
                            
                            <h4>Java</h4>  
                            <Progress percent={90} showInfo={false} strokeColor="green"></Progress>

                            <h4>YAML</h4>  
                            <Progress percent={90} showInfo={false} strokeColor="orange"></Progress>

                            <h4>SQL and Mongo DB Query</h4>  
                            <Progress percent={90} showInfo={false} strokeColor="green"></Progress>

                            <h4>PHP</h4>  
                            <Progress percent={90} showInfo={false} strokeColor="black"></Progress>

                            <h4>Python</h4>  
                            <Progress percent={70} showInfo={false}></Progress>
                        </Card>

                    </Col>
                </Row>

            </Card>
        );
    }
}

export default HomeComponent;