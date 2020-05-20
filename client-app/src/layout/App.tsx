import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../app/features/nav/NavBar";
import ActivityDashboard from "../app/features/nav/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import HomePage from "../app/features/home/HomePage";
import ActivityForm from "../app/features/nav/activities/form/ActivityForm";
import ActivityDetails from "../app/features/nav/activities/details/ActivityDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />

            <Container style={{ paddingTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
