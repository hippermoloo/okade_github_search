import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Skeleton,
  Row,
  Col,
  Card,
  Divider,
  Result,
  message,
  PageHeader,
  Timeline,
} from "antd";

import userService from "src/services/users/userService";
import { AllUserDto } from "src/services/users/dto/allUserDto";
import { useLocation, useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import { UserDto } from "src/services/users/dto/userDto";
import NavBarComponent from "src/components/Home/NavBar";
import HeaderComponent from "src/components/Home/Header";
import FooterComponent from "src/components/footer/footer";

const UserDetailsComponent = () => {
  const [form] = Form.useForm();
  const [searchType, setSearchType] = useState<String>("users");
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [usersDto, setUsersDto] = useState<UserDto | null>();

  const search = useLocation().search;
  const username = new URLSearchParams(search).get("username");
  let navigate = useNavigate();

  useEffect(() => {
    console.count("Users Details");
    try {
      if (username === undefined || username === null) {
        gotoHome();
      }

      // Fetch User
      userService
        .getUsers(username!)
        .then((result: UserDto) => {
          setSearchLoading(false);
          if (result !== undefined) {
            setUsersDto(result);
          }
        })
        .finally(() => {
          setSearchLoading(false);
        });

    } catch (e) {
      setSearchLoading(false);
    }
  }, [username]);

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <NavBarComponent />
      <HeaderComponent />
      <section id="subscribe-form" className="subscribe-form wf-section">
        <div className="centered-container w-container">
          <div>
            {searchLoading === true ? (
              <>
                <Skeleton
                  loading={searchLoading}
                  active
                  avatar
                  style={{ marginTop: "20px" }}
                ></Skeleton>
                <Skeleton
                  loading={searchLoading}
                  active
                  avatar
                  style={{ marginTop: "10px" }}
                ></Skeleton>
                <Skeleton
                  loading={searchLoading}
                  active
                  avatar
                  style={{ marginTop: "10px" }}
                ></Skeleton>
              </>
            ) : (
              <>
                <Row>
                  <PageHeader
                    className="site-page-header"
                    onBack={() => gotoHome()}
                    title="Back"
                    subTitle="to home, to begin new search"
                  />
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {usersDto !== null ||
                  (usersDto !== undefined && searchLoading === false) ? (
                    <>
                    <Col
                      className="gutter-row"
                      span={6}
                      style={{ marginBottom: "2%" }}
                      key={usersDto?.login}
                    >
                      <Card
                        size="small"
                        className="border-0 work-container"
                        style={{
                          background: "#ffffff",
                          borderRadius: "16px",
                        }}
                        key={usersDto?.login}
                        cover={
                          <img
                            width={130}
                            height={160}
                            src={`${usersDto?.avatar_url}`}
                          />
                        }
                        onClick={() => null}
                      >
                        <Meta
                          title="Profile Name"
                          description={usersDto?.login}
                        />
                        <Divider />
                        <Meta
                          title={"Email Address"}
                          className="text-truncate"
                          description={usersDto?.email?? 'empty'}
                        />
                      </Card>
                    </Col>

                    <Col
                      
                      span={18}
                      style={{ marginBottom: "2%", alignContent: 'left', alignItems: 'left' }}
                      key={usersDto?.id}
                    >
                    <Card
                        size="small"
                        className="border-0 work-container"
                        style={{
                          background: "#ffffff",
                          borderRadius: "16px",
                          textAlign: "left"
                        }}
                        key={usersDto?.id}
                      >
                        <Timeline mode="left">
                          <Timeline.Item position="left">User type: {usersDto?.type}</Timeline.Item>
                          <Timeline.Item position="left">Site Admin: {usersDto?.site_admin}</Timeline.Item>
                          <Timeline.Item position="left">Name: {usersDto?.name}</Timeline.Item>
                          <Timeline.Item position="left">Company: {usersDto?.company}</Timeline.Item>
                          <Timeline.Item position="left">Bio: {usersDto?.bio}</Timeline.Item>
                          <Timeline.Item position="left">Twitter username: {usersDto?.twitter_username}</Timeline.Item>
                          <Timeline.Item position="left">Public repos: {usersDto?.public_repos} Public gists: {usersDto?.public_gists}</Timeline.Item>
                          <Timeline.Item position="left">Followers: {usersDto?.followers} Following: {usersDto?.followers}</Timeline.Item>
                          <Timeline.Item position="left">Created at: {usersDto?.created_at}  Updated at: {usersDto?.updated_at}</Timeline.Item>
                        </Timeline>
                      </Card>
                    </Col>
                    </>
                    
                  ) : (
                    <>
                      <Col className="gutter-row" span={5}></Col>
                      <Col>
                        <Result
                          status="404"
                          title="404"
                          subTitle="Sorry, resources not exist kindly use the search filter to begin new search."
                          extra={<Button onClick={() => gotoHome()} type="primary">Back Home</Button>}
                        />
                      </Col>
                    </>
                  )}
                </Row>
              </>
            )}
          </div>
        </div>
      </section>
      <FooterComponent />
    </React.Fragment>
  );
};

export default UserDetailsComponent;
