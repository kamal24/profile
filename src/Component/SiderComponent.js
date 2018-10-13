import React, {Component} from "react";
import {Timeline,Button,Avatar,Card,Icon} from 'antd';

class SiderComponent extends Component{
    render(){
        return (
            <Card>
                    <Avatar shape="circle" size={128}  src="img/logo.png"></Avatar>

                    <Timeline style={{marginTop:20}}>
                        <Timeline.Item dot={<Icon type="eye" style={{fontSize:24}}></Icon>}>Info</Timeline.Item>
                        <Timeline.Item>Name: Kamal Kumar</Timeline.Item>
                        <Timeline.Item>BirthDay: 24-08-1993</Timeline.Item>
                        <Timeline.Item>Job: Freelancer</Timeline.Item>
                        <Timeline.Item>Email: kmlgrg2425@gmail.com</Timeline.Item>
                    </Timeline>

                    <Button type="primary" className="center"><a href="Resume/resume.PDF" download>Download CV</a></Button>
            </Card>      
        );
    }
}

export default SiderComponent;