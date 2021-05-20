import { renderLogoPaths } from '../utils/renderLogoPaths'

const Logo = () => {
  const desktopLogoPaths = 'goldenviOL'
  const mobileLogoPaths = 'gV'

  return (
    <>
      <svg className="logo-desktop" viewBox="0 0 929.205 139">
        <g>{renderLogoPaths(desktopLogoPaths)}</g>
      </svg>
      <svg className="logo-mobile" viewBox="0 0 141.333 292">
        <g>{renderLogoPaths(mobileLogoPaths)}</g>
      </svg>
    </>
  )
}

export default Logo
