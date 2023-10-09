import { RootRoute, Route, Router } from '@tanstack/react-router';

import { DashboardPage } from './features/dashboard';
import { IndexPage } from './index.page';

const rootRoute = new RootRoute();

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});
const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: DashboardPage,
});

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
