import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navItems = [
    {
      title: 'Features',
      route: '#',
    },
    { title: 'Create', route: '#' },
    { title: 'About', route: '#' },
    { title: 'Pricing', route: '#' },
    { title: 'Contact Us', route: '#' },
  ];

  return (
    <nav className="hidden md:flex gap-10 justify-center items-center text-white py-4">
      {navItems.map((item, idx) => (
        <Link key={idx} href={item.route}>
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
