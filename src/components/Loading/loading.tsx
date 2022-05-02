import { Skeleton } from "antd";
import React from "react";

const LoadingComponent = ({searchLoading}:{searchLoading:boolean}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default LoadingComponent;
