import React, { useState } from "react";
import { navbar } from "../data";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/myntra.svg";
import Whishlist from "../assets/images/heart.png";
import Profile from "../assets/images/profile.png";
import bag from "../assets/images/bag.png";
import search from "../assets/images/search.png";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { uniqueCategories } from "./uniqueCategories";
const Navbar = () => {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState(5);
  return (
    <div className="navContainer">
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
      </div>
      <div className="navItems "></div>

      <div className="search">
        <img src={search} alt="" />
        <input type="text" placeholder="Search for products brands and more" />
      </div>

      <div className="menu">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon w={25} h={25} />}
            variant="outline"
          />
          <MenuList bgColor="white" padding={10}>
            <MenuGroup title="Category">
              {uniqueCategories?.map((item) => {
                return (
                  <MenuItem
                    command={<ExternalLinkIcon />}
                    key={item}
                    as="a"
                    href={`/category/${item}`}
                  >
                    {" "}
                    {item}
                  </MenuItem>
                );
              })}
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Whishlist </MenuItem>
              <MenuItem command={cartItem}>Cart </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
