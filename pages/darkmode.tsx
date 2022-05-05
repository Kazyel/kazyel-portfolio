import DayMode from '../pages/assets/icons/day-mode.png'
import NightMode from '../pages/assets/icons/night-mode.png'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme()
  function changeTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div>
      <button
        id="themeBtn"
        className="delay-200 ease-in-out flex"
        type="button"
        onClick={() => changeTheme()}
      >
        {theme === 'dark' ? (
          <Image
            className="duration-600 transition delay-75 ease-in-out dark:invert"
            src={NightMode}
          ></Image>
        ) : (
          <Image
            className="duration-600 transition delay-75 ease-in-out dark:invert"
            src={DayMode}
          ></Image>
        )}
      </button>
    </div>
  )
}

export default DarkModeButton
