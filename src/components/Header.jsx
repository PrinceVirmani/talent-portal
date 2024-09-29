import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

function Header() {
  const [showSignedIn, setShowSignedIn] = useState(false);

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignedIn(true);
    }
  }, [search]);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignedIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button
              onClick={() => {
                setShowSignedIn(true);
              }}
              variant="outline"
            >
              Log In
            </Button>
          </SignedOut>
          <SignedIn>
            {/* add a condition here  */}
            <Link to="/postjobs"></Link>
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/myjobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/savedjobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignedIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn signUpForceRedirectUrl="/" fallbackRedirectUrl="/" />
        </div>
      )}
    </>
  );
}

export default Header;
