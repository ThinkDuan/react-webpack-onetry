
import React from 'react';
import {DatePicker} from 'antd';
import {Row,Col} from 'antd';
import {Carousel} from 'antd';
import 'antd/lib/date-picker/style/css'
import 'antd/lib/Row/style/css'
class Login1 extends React.Component {   
    render(){
        return(
            <div>
                <Row>
                    <Col span={8} ><DatePicker/></Col>
                    <Col span={8} >123</Col>
                    <Col span={8} >123</Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Carousel>
                             <div><h1>1</h1></div>
                             <div><h1>1</h1></div>
                             <div><h1>1</h1></div>
                        </Carousel>
                     </Col>
                </Row>
            </div>
        );
    }
}
export default Login1;