import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../app/features/nav/NavBar";
import ActivityDashboard from "../app/features/nav/activities/dashboard/ActivityDashboard";
import LoadingComponent from "../app/layout/LoadingComponent";
import ActivityStore from "../app/stores/activityStore";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities..." />;

  return (
    <Fragment>
      <NavBar />

      <Container style={{ paddingTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
