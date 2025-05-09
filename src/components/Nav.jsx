import React, {useContext} from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon  } from '@heroicons/react/24/outline'
import { Link,useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/ContextStore'
import Cookies from 'js-cookie'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Nav() {
    const { carrito } = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('email');
        navigate('/login');
    };

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Menú', href: '/menu' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Cerrar sesión', onClick: handleLogout }
    ];
    
    return (
        <Disclosure as="nav" className="bg-white/30 backdrop-blur-md fixed w-full z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#402d07] hover:text-[#573d0a]">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
  
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
              <div className="flex shrink-0 items-center justify-center sm:justify-start w-full sm:w-auto">
                <Link to="/">
                  <img alt="Your Company" src="/logo.png" className="h-12 w-auto" />
                </Link>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                <div className="flex space-x-8">
                  {navigation.filter(item => item.href).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-3 py-2 rounded-md text-sm font-medium text-[#402d07] hover:text-[#573d0a]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to="/cart"
                className="relative rounded-full p-1 text-[#402d07] hover:text-[#573d0a] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <ShoppingCartIcon aria-hidden="true" className="size-6" />
                {carrito.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {carrito.length}
                  </span>
                )}
              </Link>
  
              <button
                onClick={handleLogout}
                className="ml-4 hidden sm:inline px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-full"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
  
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              item.href ? (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    'text-[#402d07] hover:bg-[#402d07] hover:text-white'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ) : (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="block w-full text-left rounded-md bg-red-500 text-white px-3 py-2 text-base cursor-pointer font-medium hover:bg-red-600"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    )
}

export default Nav