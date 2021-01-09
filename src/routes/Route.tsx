/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AuthLayout from "~/pages/_layouts/Auth";
import DefaultLayout from "~/pages/_layouts/Default";

// import { store } from "~/store";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.FC<any>;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  // isPrivate = false,
  ...rest
}) => {
  // const { isLogged: signed } = store.getState().auth;
  // if (!signed && isPrivate) {
  //   return <Redirect to="/login" />;
  // }

  // if (signed && !isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // const Layout = signed ? DefaultLayout : AuthLayout;
  const Layout = AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
