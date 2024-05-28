import { signOut } from 'firebase/auth'
import { Check } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { Avatar, Dropdown, Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { auth } from '../../../firebase/firebase'
import { Options } from '../type/options'
import { UserState } from '@/store/user'

export function Perfil() {
  const [_, serLocatation] = useLocation()

  const user = UserState(state => state.user)
  const logout = UserState(state => state.logout)

  const handlelogout = async () => {
    await signOut(auth).then(() => {
      serLocatation('/')
      logout()
    })
  }

  const customTheme: CustomFlowbiteTheme = {
    dropdown: {
      arrowIcon: 'text-xl',
      floating: {
        base: '!top-3 p-3 rounded-md !border-0 shadow-lg !left-2 lg:!left-7 w-fit bg-white',
      },
    },
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Dropdown label="" size="sm" inline placement="bottom-start">
        <Dropdown.Item className="rounded-md">
          <div className="flex items-center relative text-start">
            <Check className="absolute right-2 top-1/2 -translate-y-1/2 text-lg" />
            <div className="w-14">
              {!(user as { photoURL: string }).photoURL
                ? (
                  <Avatar
                    placeholderInitials={(user as { email: string }).email
                      .slice(0, 1)
                      .toUpperCase()}
                    rounded
                  />
                  )
                : (
                  <Avatar
                    img={(user as { photoURL: string }).photoURL}
                    alt={`avatar of ${(user as { displayName: string }).displayName}`}
                    rounded
                  />
                  )}
            </div>
            <div>
              <h2 className="text-sm">
                {(user as { displayName: string }).displayName}
              </h2>
              <p className="text-sm">personal</p>
              <p className="text-sm">{(user as { email: string }).email}</p>
            </div>
          </div>
        </Dropdown.Item>
        {Options.map(option => (
          <Dropdown.Item key={option.value} className="rounded-md">
            <Link href={option.path} className="w-full text-left">
              {option.value}
            </Link>
          </Dropdown.Item>
        ))}
        <Dropdown.Item className="rounded-md">
          <button onClick={handlelogout} className="w-full text-left">
            Log out
          </button>
        </Dropdown.Item>
      </Dropdown>
    </Flowbite>
  )
}
