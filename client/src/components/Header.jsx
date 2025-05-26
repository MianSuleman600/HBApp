import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <SignedIn>
          <Link to="/admin/dashboard">Dashboard</Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  );
};

export default Header;