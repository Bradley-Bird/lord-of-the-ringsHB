import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BiBook } from 'react-icons/bi';
import { BsHouse } from 'react-icons/bs';
import { GiFilmProjector } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

function Nav() {
  return (
    <List>
      <Slink exact to="/">
        <BsHouse />
        <h4>Home</h4>
      </Slink>
      <Slink to="/films">
        <GiFilmProjector />
        <h4>Films</h4>
      </Slink>
      <Slink to="/books">
        <BiBook />
        <h4>Books</h4>
      </Slink>
      <Slink to="/characters">
        <FaHatWizard />
        <h4>Characters</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    position: absolute;
    top: 1.5rem;
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f17121, #e94057);

    h4 {
      color: white;
    }
    svg {
      color: white;
    }
  }
`;

export default Nav;
