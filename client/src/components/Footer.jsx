import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-xl sm:text-2xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Ashutosh's
              </span>
              Blog
            </Link>
          </div>
          <div className=" grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://emartttttt.netlify.app/"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  React E-Commerce Website
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Ashutosh's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/AshutoshSarkar"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  GitHub
                </Footer.Link>
              
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel="noopner noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopner noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopner noreferrer">
                  Terms &amp; Service
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            href="#"
            by="Ashutosh Sarkar"
            year={new Date().getFullYear()}
          />
        </div>
        <div className="flex gap-6 justify-center mt-5">
          <div className="flex gap-2">
            <Footer.Icon href="https://www.instagram.com/ashurk18022022/" icon={BsInstagram} />
            
          </div>
          <div className="flex gap-2">
            <Footer.Icon href="https://twitter.com/AshuSar93431976" icon={BsTwitterX} />
            
          </div>
          <div className="flex gap-3">
            <Footer.Icon href="https://www.linkedin.com/in/ashu-sarkar-07362322b/" icon={BsLinkedin} />
            
          </div>
        </div>
      </div>
    </Footer>
  );
}
