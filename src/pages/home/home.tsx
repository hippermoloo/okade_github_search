import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Row,
  Col,
  RadioChangeEvent,
  Modal,
} from "antd";

import { GithubOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import NavBarComponent from "src/components/Home/NavBar";
import HeaderComponent from "src/components/Home/Header";
import FooterComponent from "src/components/footer/footer";
import AllUserComponent from "../Users/allUsers";
import AllOrganizationComponent from "../Organization/allOrganizations";
import userService from "src/services/users/userService";
import organizationService from "src/services/organization/organisationService";
import { UserDto } from "src/services/users/dto/userDto";
import { OrganizationDto } from "src/services/organization/dto/organizationDto";
import LoadingComponent from "src/components/Loading/loading";

interface IPros {
  searchName: string;
  userType: string;
}

const HomeComponent = () => {
  const [form] = Form.useForm();
  const [searchType, setSearchType] = useState<String>("users");
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [isBtn, setIBtn] = useState<boolean>(false);

  const onFormLayoutChange = (e: RadioChangeEvent) => {
    setSearchType(e.target.value);
  };

  let navigate = useNavigate();

  const onFinish = async (formInput: IPros) => {
    try {
      setSearchLoading(true);
      setIBtn(true);
      if (formInput.userType === "users" || searchType === "users") {
        await userService
          .getUsers(formInput.searchName!.trim())
          .then((result: UserDto) => {
            setSearchLoading(false);
            if (result !== undefined) {
              gotoUserDetailsPage(result?.login!.trim());
            } else {
              Modal.error({
                title: "Search not find",
                content: `Oops! we cant find your search, kindly check your keyword (${formInput.searchName}) and try again`,
              });
            }
          })
          .finally(() => {
            setSearchLoading(false);
          });
      } else if (
        formInput.userType === "organization" ||
        searchType === "organization"
      ) {

        // Fetch Organization
        await organizationService
          .getOrganization(formInput.searchName!.trim())
          .then((result: OrganizationDto) => {
            setSearchLoading(false);
            if (result !== undefined) {
              gotoOrganizationDetailsPage(result?.login!.trim());
            } else {
              Modal.error({
                title: "Search not find",
                content: `Oops! we cant find your search, kindly check your keyword (${formInput.searchName}) and try again`,
              });
            }
          })
          .finally(() => {
            setIBtn(false);
            setSearchLoading(false);
          });
      }

      // End page loading
      setSearchLoading(false);
      setIBtn(false);


    } catch (e) {
      setSearchLoading(false);
      setIBtn(false);
    }
  };

  const onFinishFailed = () => {
    setSearchLoading(false);
  };

  const gotoUserDetailsPage = (x: string | undefined) => {
    navigate("/user-details?username=" + x);
  };

  const gotoOrganizationDetailsPage = (x: string | undefined) => {
    navigate("/organization-details?username=" + x);
  };

  return (
    <React.Fragment>
      <NavBarComponent />
      <HeaderComponent />
      <section id="subscribe-form" className="subscribe-form wf-section">
        <div className="centered-container w-container">
          <p>
            Each result in the list will display some basic information about
            the result (e.g., name, avatar, etc.);
          </p>
          <div className="w-form">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={4}></Col>
              <Col>
                <Form
                  layout={'inline'}
                  form={form}
                  initialValues={{ userTyp: searchType }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item label="Search By:" name="userType">
                    <Radio.Group
                      value={searchType}
                      onChange={onFormLayoutChange}
                      defaultValue={searchType}
                    >
                      <Radio.Button value="users">User</Radio.Button>
                      <Radio.Button value="organization">
                        Organization
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item
                    name="searchName"
                    rules={[
                      { required: true, message: "Please enter a search" },
                    ]}
                  >
                    <Input
                      size="large"
                      prefix={
                        <GithubOutlined className="site-form-item-icon" />
                      }
                      placeholder="search"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      disabled={isBtn}
                      loading={isBtn}
                      htmlType="submit"
                      icon={<SearchOutlined />}
                      type="primary"
                      shape="round"
                    >
                      Search
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* {isBtn === true? } */}
      {isBtn === true? (<LoadingComponent searchLoading={isBtn} />) : isBtn === false && searchType === "users" ? (
        <AllUserComponent searching={searchLoading} />
      ) : (
        <AllOrganizationComponent />
      )}
      <FooterComponent />
    </React.Fragment>
  );
};

export default HomeComponent;
