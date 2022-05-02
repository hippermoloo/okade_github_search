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
  PageHeader,
  Timeline,
} from "antd";

import organizationService from "src/services/organization/organisationService";
import { useLocation, useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import NavBarComponent from "src/components/Home/NavBar";
import HeaderComponent from "src/components/Home/Header";
import FooterComponent from "src/components/footer/footer";
import { OrganizationDto } from "src/services/organization/dto/organizationDto";

const OrganizationDetailsComponent = () => {
  const [form] = Form.useForm();
  const [searchType, setSearchType] = useState<String>("users");
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [allOrganizationDto, setAllOrganizationDto] = useState<OrganizationDto | null>();

  const search = useLocation().search;
  const username = new URLSearchParams(search).get("username");
  let navigate = useNavigate();

  useEffect(() => {
    console.count("Organization Details");
    try {
      if (username === undefined || username === null) {
        gotoHome();
      }

      // Fetch Organization
      organizationService
        .getOrganization(username!.trim())
        .then((result: OrganizationDto) => {
          setSearchLoading(false);
          if (result !== undefined) {
            setAllOrganizationDto(result);
          }
        })
        .finally(() => {
          setSearchLoading(false);
        });
        
    } catch (e) {}
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
                  {allOrganizationDto !== null ||
                  (allOrganizationDto !== undefined && searchLoading === false) ? (
                    <>
                    <Col
                      className="gutter-row"
                      span={6}
                      style={{ marginBottom: "2%" }}
                      key={allOrganizationDto?.login}
                    >
                      <Card
                        size="small"
                        className="border-0 work-container"
                        style={{
                          background: "#ffffff",
                          borderRadius: "16px",
                        }}
                        key={allOrganizationDto?.login}
                        cover={
                          <img
                            width={130}
                            height={160}
                            src={`${allOrganizationDto?.avatar_url}`}
                          />
                        }
                        onClick={() => null}
                      >
                        <Meta
                          title="Profile Name"
                          description={allOrganizationDto?.login}
                        />
                                                  <Divider />
                          <Meta
                            title={"Learn more on Github"}
                            className="text-truncate"
                          />
                          <a href={allOrganizationDto?.html_url} target="_blank" style={{color: "grey"}}>
                            {allOrganizationDto?.html_url?? ''}
                          </a>
                        <Divider />
                        <Meta
                          title={"Verified"}
                          className="text-truncate"
                          description={allOrganizationDto?.is_verified !== undefined && allOrganizationDto?.is_verified === true? 'Yes' : 'No'}
                        />
                      </Card>
                    </Col>

                    <Col
                      
                      span={18}
                      style={{ marginBottom: "2%", alignContent: 'left', alignItems: 'left' }}
                      key={allOrganizationDto?.id}
                    >
                    <Card
                        size="small"
                        className="border-0 work-container"
                        style={{
                          background: "#ffffff",
                          borderRadius: "16px",
                          textAlign: "left"
                        }}
                        key={allOrganizationDto?.id}
                      >
                        <Timeline mode="left">
                          <Timeline.Item position="left">User type: {allOrganizationDto?.type}</Timeline.Item>
                          <Timeline.Item position="left">Organization has projects: {allOrganizationDto?.has_organization_projects}</Timeline.Item>
                          <Timeline.Item position="left">Organization has repository: {allOrganizationDto?.has_repository_projects}</Timeline.Item>
                          <Timeline.Item position="left">Company: {allOrganizationDto?.company}</Timeline.Item>
                          <Timeline.Item position="left">Description: {allOrganizationDto?.description}</Timeline.Item>
                          <Timeline.Item position="left">Twitter username: {allOrganizationDto?.twitter_username}</Timeline.Item>
                          <Timeline.Item position="left">Public repos: {allOrganizationDto?.public_repos} Public gists: {allOrganizationDto?.public_gists}</Timeline.Item>
                          <Timeline.Item position="left">Followers: {allOrganizationDto?.followers} Following: {allOrganizationDto?.followers}</Timeline.Item>
                          <Timeline.Item position="left">Created at: {allOrganizationDto?.created_at}  Updated at: {allOrganizationDto?.updated_at}</Timeline.Item>
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

export default OrganizationDetailsComponent;
