import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BarIcon } from "../Icons";

export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 70px;
  display: flex;
  background: #8bc34a;
  justify-content: space-between;
  padding: 0.18rem;
  margin-bottom: 1.5rem;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 4rem;
  height: 100%;
  &.active {
    color: #000000;
  }
`;
