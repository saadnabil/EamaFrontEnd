import { Col, Form, Input, message, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Dragger from "antd/lib/upload/Dragger";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
import { InboxOutlined } from "@ant-design/icons";
import { careerFormThunk } from "../../../store/slices/careers/careersSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import allUrl from "../../../settings/allUrl.json";
const Option = Select;

export const Careers_form = () => {
  const dispatch = useDispatch();
  const [cvId, setCvId] = useState(null);

  const onFinish = (values) => {
    dispatch(careerFormThunk({ ...values, id: cvId }))
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

  const props = {
    name: "cv",
    action: `${allUrl.apiUrl}/upload-cv`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        setCvId(info.file.response.id);
        message.success(`${info.file.name} uploaded.`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
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
                  message: "Please input your Name!",
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
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Your Email" />
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
              name="job_type"
              rules={[
                {
                  required: true,
                  message: "Please select your career type!",
                },
              ]}
            >
              <Select placeholder="Your Career Type">
                <Option value="Sales">Sales</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Accounting">Accounting</Option>
                <Option value="Finance">Finance</Option>
                <Option value="Operations">Operations</Option>
                <Option value="IT">IT</Option>
                <Option value="Marketing">Marketing</Option>
                <Option value="Graphic design">Graphic design</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              name="cv"
              rules={[
                {
                  required: true,
                  message: "Please upload cv!",
                },
              ]}
            >
              <div className="cv">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                </Dragger>
                <p>* Upload Only Pdf and Docx</p>
              </div>
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item name="message">
              <TextArea placeholder="Your Message" />
            </Form.Item>
          </Col>
        </Row>
        <ButtonsS1 text="send message" type="submit" />
      </Form>
    </div>
  );
};
