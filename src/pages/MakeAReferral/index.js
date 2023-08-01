import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import React from "react";
import { WrapHeader } from "src/layouts/header/styled";
import { WrapAboutPage } from "../About/styled";
import { WrapHeaderRefer } from "./styled";
import refer from "src/access/img/refer.jpg";

export function getRegexEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return re;
}

export function getRegexMobile() {
  const re = /^([0-9]{8,15})\b/g;
  return re;
}
const MakeAReferral = () => {
  const [form] = Form.useForm();
  return (
    <>
      <WrapHeader>
        <div
          className="slogan d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${refer})` }}
        >
          <h2>MAKE A REFERRAL</h2>
        </div>
      </WrapHeader>

      <WrapAboutPage className="page-common">
        <div
          style={{
            padding: "24px 300px",
          }}
        >
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]} style={{ width: "100%", display: "flex" }}>
              <Col span={24}>
                <b>Referrals:</b>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Person Referring: "
                  name="personReferring"
                >
                  <Input placeholder="Person Referring*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Referral Date: "
                  name="referDate"
                >
                  <DatePicker placeholder="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label=""
                  name="ReferringAgency"
                >
                  <Input placeholder="Referring Agency*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                    {
                      pattern: getRegexMobile(),
                      message: "PhoneNumber entered wrong format!",
                    },
                  ]}
                  label=""
                  name="phone"
                >
                  <Input placeholder="Phone*" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <b>Client Details:</b>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="First Name: "
                  name="firstName"
                >
                  <Input placeholder="First Name*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Last Name: "
                  name="lastName"
                >
                  <Input placeholder="Last Name*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Date of Birth: "
                  name="BirthDay"
                >
                  <DatePicker placeholder="DD/MM/YYYY" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Address: "
                  name="Address"
                >
                  <Input placeholder="Address*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Client Postcode: "
                  name="ClientPostcode"
                >
                  <Input placeholder="Client Postcode*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                    {
                      pattern: getRegexEmail(),
                      message: "Email entered wrong format!",
                    },
                  ]}
                  label="Email: "
                  name="Email"
                >
                  <Input placeholder="Email*" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Interpreter: "
                  name="Interpreter"
                >
                  <Select placeholder="Select">
                    <Select.Option key="1" value="1">
                      Yes
                    </Select.Option>
                    <Select.Option key="2" value="2">
                      No
                    </Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Language Spoken:"
                  name="LanguageSpoken"
                >
                  <Input placeholder="Language Spoken*" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                    {
                      pattern: getRegexMobile(),
                      message: "PhoneNumber entered wrong format!",
                    },
                  ]}
                  label="Phone Number:"
                  name="PhoneNumberGuest"
                >
                  <Input placeholder="Phone Number*" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <b>CONDITIONS:</b>
              </Col>
              <Col span={24}>
                Does the client have any physical health condition?
              </Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="physicalhealth"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                Does the client have a mental health condition?
              </Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="mentalhealth"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>Does client have any cognitive disability?</Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="cognitive"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>
                Does the client have any behaviours of concern?
              </Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="behaviours"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <b>Service Type</b>
              </Col>
              <Col span={24}>Core Support</Col>

              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="CoreSupport"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Community Access</Radio>
                    <Radio value={2}>Domestic Assistance</Radio>
                    <Radio value={3}>Self Care Support</Radio>
                    <Radio value={4}>Transport</Radio>
                    <Radio value={5}>Respite</Radio>
                    <Radio value={6}>Sleepover</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  label="Support Requested Hours / Days Preferred:"
                  name="RequestedHours "
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Support Requested Hours / Days Preferred*"
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Additional comments / Useful Information:"
                  name="Additionalcomments "
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Additional comments / Useful Information"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  label="Please indicate the best contact person for this referral and their best contact number:"
                  name="Additionalcomments "
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="Please indicate the best contact person for this referral and their best contact number"
                  />
                </Form.Item>
              </Col>

              <Col span={24}>Urgency of Service:</Col>

              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="UrgencyofService"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>High</Radio>
                    <Radio value={2}>Medium</Radio>
                    <Radio value={3}>Low</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col span={24}>Where did you hear about us?:</Col>

              <Col span={24}>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Information cannot be blank!",
                    },
                  ]}
                  name="UrgencyofService"
                >
                  <Radio.Group className="radio-learning">
                    <Radio value={1}>Google</Radio>
                    <Radio value={2}>Social</Radio>
                    <Radio value={3}>Media</Radio>
                    <Radio value={4}>AdsReferred By Someone</Radio>
                    <Radio value={5}>Other</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  onClick={async () => {
                    const vaue = await form.validateFields();
                  }}
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </WrapAboutPage>
    </>
  );
};

export default MakeAReferral;
