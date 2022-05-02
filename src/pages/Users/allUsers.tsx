import React, { useEffect, useState } from "react";
import { Row, Col, Card, Divider, Statistic } from "antd";

import userService from "src/services/users/userService";
import { AllUserDto } from "src/services/users/dto/allUserDto";
import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import LoadingComponent from "src/components/Loading/loading";
import NotFoundComponent from "src/components/Not Found";

const AllUserComponent = ({ searching }: { searching: boolean }) => {
  const [searchLoading, setSearchLoading] = useState<boolean>(
    searching ?? true
  );
  const [allUsersDto, setAllUsersDto] = useState<AllUserDto[] | null>([]);

  let navigate = useNavigate();

  useEffect(() => {
    try {
      userService
        .getAllUsers()
        .then((result: AllUserDto[]) => {
          setSearchLoading(false);
          if (result !== undefined) {
            setAllUsersDto(result);
          }
        })
        .finally(() => {
          setSearchLoading(false);
        });
    } catch (e) {}
  }, []);

  const gotoNext = (x: string | undefined) => {
    navigate("/user-details?username=" + x);
  };

  return (
    <React.Fragment>
      <section id="cards-section" className="cards-section wf-section">
        <div className="centered-container w-container">
          <div style={{ marginTop: "5%" }}>
            {searchLoading === true ? (
              <LoadingComponent searchLoading={searchLoading} />
            ) : (
              <>
                <Row>
                  <Col className="gutter-row" style={{ marginBottom: "2%" }}>
                   <b>Total User:{" "} {allUsersDto?.length! > 0 ? allUsersDto?.length : 0}</b>
                  </Col>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {allUsersDto !== null &&
                  searchLoading === false &&
                  allUsersDto.length > 0 ? (
                    allUsersDto.map((x: AllUserDto) => (
                      <Col
                        className="gutter-row"
                        span={6}
                        style={{ marginBottom: "2%" }}
                        key={x.login}
                      >
                        <Card
                          size="small"
                          className="border-0 work-container"
                          style={{
                            background: "#eeeeee",
                            borderRadius: "16px",
                          }}
                          key={x.login}
                          hoverable
                          cover={
                            <img
                              width={130}
                              height={160}
                              src={`${x.avatar_url}`}
                            />
                          }
                          onClick={() => {
                            gotoNext(x.login);
                          }}
                        >
                          <Meta title="Profile Name" description={x.login} />
                          <Divider />
                          <Meta
                            title={"Learn more on Github"}
                            className="text-truncate"
                          />
                          <a
                            href={x.html_url}
                            target="_blank"
                            style={{ color: "grey" }}
                          >
                            view
                          </a>
                        </Card>
                      </Col>
                    ))
                  ) : (
                    <NotFoundComponent />
                  )}
                </Row>
              </>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AllUserComponent;
