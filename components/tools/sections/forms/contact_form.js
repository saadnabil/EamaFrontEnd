import { Col, Form, Input, message, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useDispatch } from "react-redux";
import { contactFormThunk } from "../../../../store/slices/contact/contactSlice";
import ButtonsS1 from "../../buttons/buttonsS1";

export const Contact_form = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
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
    message.error("This is an error message");
  };
  return (
    <div>
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
        <Form.Item name="message">
          <TextArea placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <ButtonsS1 text="send" className="contactBtn" type="submit" />
        </Form.Item>
      </Form>
    </div>
  );
};
