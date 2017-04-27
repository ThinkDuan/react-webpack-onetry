
import React from 'react';
// import {DatePicker} from 'antd';
import {Row,Col} from 'antd';
// import {Carousel} from 'antd';
import {Layout} from 'antd';
const {Header,Sider,Content,Footer} = Layout;
import {Button,Menu,Dropdown} from 'antd';
import {Icon,Radio,Breadcrumb,BackTop} from 'antd'
// import 'antd/lib/date-picker/style/css'
// import 'antd/lib/Row/style/css'
    const menu = (
        <Menu>
            <Menu.Item>one</Menu.Item>
            <Menu.Item>one</Menu.Item>
            <Menu.Item>one</Menu.Item>
        </Menu>
    );
class Login1 extends React.Component{
  
    render(){
        return(
            <div>
                <Layout>
                    <Header>header</Header>
                   
                    <Content>
                        <Button type="primary" icon="search" >Primary</Button>
                        <Button type="danger" icon="danger" >danger</Button>
                        <Button type="dashed" shape="circle" icon="search" ></Button>
                        <Button icon="search">search</Button>
                        <Radio></Radio>
                        <Icon type="download"></Icon>
                        <Button icon="download" size="normal" disabled >Download</Button>
                        <Button type="primary" size="normal" icon="loading"  >loading</Button>
                        <Button>right
                            <Icon type="right" ></Icon>
                        </Button>
                        <Button>Login<Icon type="login"></Icon></Button>
                        <Row>
                            <Col span={8}>8</Col>
                            <Col span={8}>8</Col>
                            <Col span={8}>8</Col>
                        </Row>
                    </Content>
                    <Footer>footer</Footer>
                </Layout>

               <Layout>
                   <Header>Header</Header>
                   <Layout>
                       <Sider>sider</Sider>
                       <Content>content</Content>
                   </Layout>
                   <Footer>Footer</Footer>
               </Layout>

               <Layout>
                   <Sider>Sider</Sider>
                   <Layout>
                       <Header>Header</Header>
                       <Content>content</Content>
                       <Footer>Footer</Footer>
                   </Layout>
               </Layout>

                <Breadcrumb separator="\">
                    <Breadcrumb.Item><Icon type="home"></Icon>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>One</Breadcrumb.Item>
                    <Breadcrumb.Item>Two</Breadcrumb.Item>
                    <Breadcrumb.Item>Three</Breadcrumb.Item>
                </Breadcrumb>
                <div><BackTop/>回到顶部</div>
                {/*<Dropdown overlay={menu}>
                    <Icon type="down"/>Dropdown
                </Dropdown>*/}
            </div>        
        );
    }
}
export default Login1;