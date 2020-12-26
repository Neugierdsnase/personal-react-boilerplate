import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes'

export const MainMenu: FunctionComponent = () => (
  <ul>
    {routes.map(({ label, path }, index) => (
      <li key={index}>
        <Link to={path}>{label}</Link>
      </li>
    ))}
  </ul>
)
