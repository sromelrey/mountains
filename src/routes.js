import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import MountainListPage from "containers/MountainListPage";
import MountainDetailPage from "containers/MountainDetailPage";
import BasicLayout from "layout/basic-layout";

const Routes = (props) => {
  const { location } = props;

  const routes = [
    {
      path: "/",
      exact: true,
      isPrivate: false,
      Layout: BasicLayout,
      Component: MountainListPage,
    },
    {
      path: "/:slug",
      exact: true,
      isPrivate: false,
      Layout: BasicLayout,
      Component: MountainDetailPage,
    },
  ];

  return (
    <Switch location={location}>
      {routes.map(({ path, exact, Layout, Component }, key) => {
        return (
          <Route
            key={key}
            path={path}
            exact={exact}
            render={(props) => (
              <Layout location={location}>
                <Component {...props} />
              </Layout>
            )}
          />
        );
      })}
    </Switch>
  );
};

export default withRouter(Routes);
