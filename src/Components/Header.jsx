import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Arlogo from '../../public/65f9125b436481d96fdea320a7d5217923d26da1.png'; 
import { Link } from "react-router-dom";

const services = [
  { name: 'Website Development', path: '/website-development' },
  { name: 'Wordpress Development', path: '/wordpress-development' },
  { name: 'Shopify Development', path: '/shopify-development' },
  { name: 'Mobile Development', path: '/mobile-development' },
  { name: 'Software Development', path: '/software-development' },
];

const hybridCloud = [
  { name: 'Cloud Migration', path: '/cloud-migration' },
  { name: 'Hybrid Solutions', path: '/hybrid-solutions' },
  { name: 'Infrastructure', path: '/infrastructure' },
];

const products = [
  { name: 'Analytics', path: '/analytics' },
  { name: 'Engagement', path: '/engagement' },
  { name: 'Security', path: '/security' },
  { name: 'Integrations', path: '/integrations' },
  { name: 'Automations', path: '/automations' },
];

const support = [
  { name: 'Documentation', path: '/docs' },
  { name: 'API Reference', path: '/api' },
  { name: 'Help Center', path: '/help' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  const dropdownRefs = {
    services: useRef(null),
    hybridCloud: useRef(null),
    products: useRef(null),
    support: useRef(null)
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.entries(dropdownRefs).forEach(([name, ref]) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container flex items-center px-4 py-4 md:py-0 lg:px-5">
        <div className='flex flex-row-reverse'>
        {/* Logo */}
        <div className="flex items-center pl-2 md:pl-0 pr-0 md:pr-2 md:border-r-2 md:border-gray-200">
          <Link to="/" className="flex items-center" onClick={closeAllDropdowns}>
            <img src={Arlogo} alt="Company Logo" className="h-6 w-auto" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden pr-6 border-r-2 border-gray-200">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        </div>
        {/* Desktop Navigation */}
        <PopoverGroup className="hidden md:flex items-center  ">
          {/* Services Dropdown */}
          <Popover className="relative px-[16px] py-[13px]">
            <PopoverButton
              onClick={() => toggleDropdown('services')}
              className="flex items-center text-lg  text-gray-900 hover:text-purple-700 focus:outline-none"
            >
              AI
              <ChevronDownIcon
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openDropdown === 'services' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </PopoverButton>
            <PopoverPanel
              ref={dropdownRefs.services}
              static={openDropdown === 'services'}
              className="fixed top-16 left-0 z-10 mt-[-14px] w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-12 px-6 flex  flex-wrap gap-y-10">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllDropdowns}
                    className="basis-1/4 px-4 py-2 text-xl text-black-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Hybrid Cloud Dropdown */}
          <Popover className="relative px-[16px] py-[13px]">
            <PopoverButton
              onClick={() => toggleDropdown('hybridCloud')}
              className="flex items-center text-base  text-gray-900 hover:text-purple-700 focus:outline-none"
            >
              Hybrid Cloud
              <ChevronDownIcon
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openDropdown === 'hybridCloud' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </PopoverButton>
            <PopoverPanel
              ref={dropdownRefs.hybridCloud}
              static={openDropdown === 'hybridCloud'}
              className="fixed top-16 left-0 z-10 mt-[-14px] w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-12 px-6 flex  flex-wrap gap-y-10">
                {hybridCloud.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllDropdowns}
                    className="basis-1/4 px-4 py-2 text-lg text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Products Dropdown */}
          <Popover className="relative px-[16px] py-[13px]">
            <PopoverButton
              onClick={() => toggleDropdown('products')}
              className="flex items-center text-base  text-gray-900 hover:text-purple-700 focus:outline-none"
            >
              Products
              <ChevronDownIcon
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openDropdown === 'products' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </PopoverButton>
            <PopoverPanel
              ref={dropdownRefs.products}
              static={openDropdown === 'products'}
              className="fixed top-16 left-0 z-10 mt-[-14px] w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-12 px-6 flex  flex-wrap gap-y-10">
                {products.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllDropdowns}
                    className="basis-1/4 px-4 py-2 text-lg text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/about" className="text-base text-gray-900 hover:text-purple-700 px-[16px] py-[13px]">
            Consulting
          </Link>

          {/* Support Dropdown */}
          <Popover className="relative px-[16px] py-[13px] hover:bg-gray-200">
            <PopoverButton
              onClick={() => toggleDropdown('support')}
              className="flex items-center text-base text-gray-900  hover:text-purple-700 focus:outline-none"
            >
              Support
              <ChevronDownIcon
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openDropdown === 'support' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </PopoverButton>
            <PopoverPanel
              ref={dropdownRefs.support}
              static={openDropdown === 'support'}
              className="fixed top-16 left-0 z-10 mt-[-14px] w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-12 px-6 flex  flex-wrap gap-y-10">
                {support.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeAllDropdowns}
                    className="basis-1/4 px-4 py-2 text-lg text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* About Us Link */}
          <Link to="/about" className="text-base  text-gray-900 hover:text-purple-700 px-[16px] py-[13px]">
            Think
          </Link>

        </PopoverGroup>
        <div className='absolute right-5 px-5 '>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='px-3 text-grey-100' />
        <FontAwesomeIcon icon={faComment} className='px-3 text-grey-100'/>
        <FontAwesomeIcon icon={faUser} className='px-3 text-grey-100'/>
        </div>
        {/* Login Button */}
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5" onClick={closeAllDropdowns}>
              <img src={Arlogo} alt="Company Logo" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Services Mobile Dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {services.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            onClick={closeAllDropdowns}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* Hybrid Cloud Mobile Dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Hybrid Cloud
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {hybridCloud.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            onClick={closeAllDropdowns}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* Products Mobile Dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            onClick={closeAllDropdowns}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/about"
                  onClick={closeAllDropdowns}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Consulting
                </Link>
                {/* Support Mobile Dropdown */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Support
                        <ChevronDownIcon
                          className={`h-5 w-5 flex-none ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {support.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.path}
                            onClick={closeAllDropdowns}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* About Us Link */}
                <Link
                  to="/about"
                  onClick={closeAllDropdowns}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Thinks
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  onClick={closeAllDropdowns}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}