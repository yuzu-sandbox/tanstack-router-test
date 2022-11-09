import {
  Outlet,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: <Index />,
  }),
  createRoute({
    path: "about",
    element: <About />,
  }),
]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <router.Link to="/">Home</router.Link>
          <router.Link to="/about">About</router.Link>
        </div>
        <hr />
        <Outlet />
      </RouterProvider>
    </>
  );
}

export default App;

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}

function About() {
  return <div>Hello from About!</div>;
}
