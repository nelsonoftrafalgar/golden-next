import { logoPathContent } from './logoPathContent'

export const renderLogoPaths = (paths: string) => {
  return paths
    .split('')
    .map((path) => <path key={path} stroke={'#dd7f0f'} strokeWidth={'2'} d={logoPathContent[path]} />)
}
