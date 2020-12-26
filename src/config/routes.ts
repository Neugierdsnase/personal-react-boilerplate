import { AboutPage } from '../pages/AboutPage'
import { IndexPage } from '../pages/IndexPage'
import { Route } from '../types/navigation'

export const routes: Route[] = [{
  label: 'Index',
  path: '/',
  Component: IndexPage
}, {
  label: 'About',
  path: '/about',
  Component: AboutPage

}
]