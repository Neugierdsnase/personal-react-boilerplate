import { ElementType } from 'react'

export type Route = {
  label: string
  path: string
  Component: ElementType
  showInMenu?: boolean
}
