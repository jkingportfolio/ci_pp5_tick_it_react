import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LogInForm";
import TaskCreateForm from "./pages/tasks/TaskCreateForm";
import TaskDetail from "./pages/tasks/TaskDetail";
import TasksListings from "./pages/tasks/TasksListings";
import TaskEditForm from "./pages/tasks/TaskEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import EditProfileForm from "./pages/profiles/EditProfileForm";
import PackCreateForm from "./pages/packs/PackCreateForm";
import PackDetail from "./pages/packs/PackDetail";
import PackListings from "./pages/packs/PackListings";
import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>

        {!currentUser ? (
          <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/signin" render={() => <LogInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />         
          <Route render={() => <LandingPage />} />
        </Switch>
        ) : (
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route
            exact
            path="/tasks"
            render={() => (
              <TasksListings message="Opps, that search didnt return anything, please try again." />
            )}
          />
          <Route
            exact
            path="/packs"
            render={() => (
              <PackListings message="It seems there are no packs. Click here to create one." />
            )}
          />
          <Route
            exact
            path="/watched"
            render={() => (
              <TasksListings
                message="You dont seem to be watching any tasks right now."
                filter={`watches__owner__profile=${profile_id}&ordering=-watches__created_on&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <LogInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
          <Route exact path="/tasks/:id" render={() => <TaskDetail />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <EditProfileForm />}
          />
          <Route exact path="/packs/create" render={() => <PackCreateForm />} />
          <Route exact path="/packs/:id" render={() => <PackDetail />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
        )}
      </Container>
    </div>
  );
}

export default App;
