import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Divider,
} from "antd";

import { useNavigate } from "react-router-dom";
import Meta from "antd/lib/card/Meta";
import organizationService from "src/services/organization/organisationService";
import { AllOrganizationDto } from "src/services/organization/dto/allOrganizationDto";
import LoadingComponent from "src/components/Loading/loading";
import NotFoundComponent from "src/components/Not Found";



const AllOrganizationComponent = () => {
  const [searchLoading, setSearchLoading] = useState<boolean>(true);
  const [allOrganizationDto, setAllOrganizationDto] = useState<AllOrganizationDto[] | null>([]);

  let navigate = useNavigate();

  useEffect(() => {
    console.count("All Organizations");
    try {
      organizationService
        .getAllOrganization()
        .then((result: AllOrganizationDto[]) => {
          setSearchLoading(false);
          if (result !== undefined) {
            setAllOrganizationDto(result);
          }
        })
        .finally(() => {
          setSearchLoading(false);
        });
    } catch (e) {}
  }, []);


  const gotoNext = (x: string | undefined) => {
    navigate("/organization-details?username=" + x);
  };


  return (
    <React.Fragment>
      <section id="cards-section" className="cards-section wf-section">
        <div
          className="centered-container w-container"
          
        >
          <div style={{ marginTop: "5%" }}>
            {searchLoading === true ? (
              <LoadingComponent searchLoading={searchLoading} />
            ) : (
              <>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {allOrganizationDto !== null &&
                  searchLoading === false &&
                  allOrganizationDto.length > 0 ? (
                    allOrganizationDto.map((x: AllOrganizationDto) => (
                    
                      <Col className="gutter-row" span={6} style={{marginBottom: '2%'}} key={x.login}>
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
                          onClick={() => {gotoNext(x.login)}}
                        >
                          <Meta title="Profile Name" description={x.login} />
                          <Divider />
                          <Meta
                            title={"Learn more on Github"}
                            className="text-truncate"
                            description={x.description?? 'No description'}
                          />
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

export default AllOrganizationComponent;
