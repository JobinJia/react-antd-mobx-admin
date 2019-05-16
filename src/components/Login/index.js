import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {Button, Card, Checkbox, Form, Icon, Input} from "antd";
import './style.less'

const FormItem = Form.Item

@inject('appStore')
@Form.create()
@observer
class Login extends Component {

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.appStore.handleLogin(values)
      }
    })
  }

  render() {

    const {getFieldDecorator} = this.props.form

    return (
      <div className="container">
        <Card
          className="login-card"
          size="default"
          title="登录(基于react-ant-mobx)"
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {
                getFieldDecorator('userName', {
                  rules: [
                    {required: true, message: '请输入用户名'}
                  ]
                })(
                  <Input prefix={<Icon type="lock"></Icon>} placeholder="用户名"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [
                    {required: true, message: '请输入密码'}
                  ]
                })(
                  <Input type="password" prefix={<Icon type="lock"></Icon>} placeholder="密码"/>
                )
              }
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="javascript:;">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <a href="javascript:;">注册</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
