import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import { SelectionButtonsContainer, Spacer } from "./styles";

export default function DropDownButtons({
  garmetInfo,
  size,
  setSize,
  setClothesInfo,
  color,
  setColor,
  setImageColor,
}) {
  function handleDropDownSize(event) {
    const choosenSize = event.replace("#", "");
    setSize(choosenSize);
    setClothesInfo([]);
  }
  function handleDropDownColor(event) {
    const choosenColor = event.replace("#", "");
    setImageColor(choosenColor.slice(0, 1));
    setColor(choosenColor.slice(1));
    setClothesInfo([]);
  }

  return (
    <SelectionButtonsContainer>
      <Dropdown
        itemRef=""
        style={{ height: "35px", minWidth: "100px" }}
        size="sm"
        onSelect={handleDropDownSize}
        as={ButtonGroup}
      >
        <Dropdown.Toggle
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "30px",
          }}
          variant="danger"
          id="dropdown-basic-1"
        >
          {`Size: ${size}`}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{
            height: "80px",
            mminWidth: "120px",

            overflowY: "auto",
          }}
        >
          {garmetInfo.variants[0].Sizes.map((size, index) => {
            return (
              <Dropdown.Item key={index} href={`#${size.SizeName}`}>
                {size.SizeName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown
        style={{ height: "35px", minWidth: "120px" }}
        size="sm"
        onSelect={handleDropDownColor}
        as={ButtonGroup}
      >
        <Dropdown.Toggle
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: "30px",
          }}
          variant="danger"
          id="dropdown-basic-2"
        >
          {`Color: ${color}`}
        </Dropdown.Toggle>
        <Dropdown.Menu
          style={{ height: "80px", minWidth: "120px", overflowY: "auto" }}
        >
          {garmetInfo.variants.map((color, index) => {
            if (index < 3) {
              return (
                <Dropdown.Item key={index} href={`#${index}${color.ColorName}`}>
                  {color.ColorName}
                </Dropdown.Item>
              );
            }
            return "";
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Spacer></Spacer>
    </SelectionButtonsContainer>
  );
}
