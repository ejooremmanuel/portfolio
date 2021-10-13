import React, { useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment>
        <img
          src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
          alt="text"
        />
      </Segment>
    </div>
  );
};

export default MenuBar;
