import { Button, Col, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundComponent = () => {
  let navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <Col className="gutter-row" span={5}></Col>
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, resources not exist kindly use the search filter to begin new search."
          extra={
            <Button onClick={() => gotoHome()} type="primary">
              Back Home
            </Button>
          }
        />
      </Col>
    </React.Fragment>
  );
};

export default NotFoundComponent;
