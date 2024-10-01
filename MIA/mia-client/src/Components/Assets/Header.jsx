import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex justify-end items-center p-2.5 bg-white mb-1">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center space-x-2">
          {/* User Icon */}
          <UserCircleIcon className="w-8 h-8 text-blue-500" />
          <span>admin</span>
          {/* Dropdown Toggle */}
          <Menu.Button>
            <ChevronDownIcon className="w-5 h-5" />
          </Menu.Button>
        </div>
        {/* Dropdown Menu */}
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  } block px-4 py-2 text-sm`}
                >
                  Change password
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </header>
  );
};

export default Header;
