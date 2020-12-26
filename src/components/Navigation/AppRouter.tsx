import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../config/routes'

export const AppRouter: FunctionComponent = () => (
  <Switch>
    {routes.map(({ path, Component }, index) => (
      <Route key={index} exact path={path}>
        <Component />
      </Route>
    ))}
  </Switch>
)
