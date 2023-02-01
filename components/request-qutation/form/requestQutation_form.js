import { Col, DatePicker, Form, Input, message, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quotationFormThunk } from "../../../store/slices/quotation/quotationSlice";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
const Option = Select;

export const RequestQutation_form = () => {
  const { quotation } = useSelector(({ quotation }) => quotation);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onFinish = (values) => {
    dispatch(
      quotationFormThunk({
        ...values,
        start_date: startDate,
        end_date: endDate,
      })
    )
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
              <Input placeholder="Your email" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input Your Phone!",
                },
              ]}
            >
              <Input placeholder="Your Phone" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              name="start_date"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <DatePicker
                onChange={(date, dateStrin) => setStartDate(dateStrin)}
                format="YYYY/MM/DD"
                placeholder="Start date"
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              name="end_date"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <DatePicker
                onChange={(date, dateStrin) => setEndDate(dateStrin)}
                format="YYYY/MM/DD"
                placeholder="End date"
              />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item
              name="location"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Select mode="tags" placeholder="Select Locations">
                {quotation?.locations?.map((location) => (
                  <Option value={location.location}>{location.location}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item name="other_location">
              <TextArea placeholder="Other Locations" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={24}>
            <Form.Item name="message">
              <TextArea placeholder="Message" />
            </Form.Item>
          </Col>
        </Row>
        <ButtonsS1 text="send massage" type="submit" />
      </Form>
    </div>
  );
};
