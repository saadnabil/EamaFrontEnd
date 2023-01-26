import { Col, Form, Input, message, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useDispatch } from "react-redux";
import { contactFormThunk } from "../../../store/slices/contact/contactSlice";
import ButtonsS1 from "../../tools/buttons/buttonsS1";

export const LeaveMassage_form = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(contactFormThunk(values))
      .unwrap()
      .then((res) => {
        message.success("This is a success message");
      })
      .catch((res) => {
        message.error("This is an error message");
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="form">
      <Form
        name="basic"
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={20}>
          <Col xs={24} lg={12}>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder="Your Email" type="email" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input placeholder="phone" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <TextArea placeholder="Your Message" />
            </Form.Item>
          </Col>
        </Row>
        <ButtonsS1 text="send massage" type="submit" />
      </Form>
    </div>
  );
};
