import { useState } from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";

const PopoverButton = (props) => {
  const [showPopover, setShowPopover] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{props.data.title}</Popover.Header>
      <Popover.Body>{props.data.content}</Popover.Body>
    </Popover>
  );

  const handleClick = () => setShowPopover(!showPopover);

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      show={showPopover}
      overlay={popover}
      onToggle={setShowPopover}
    >
      <Button variant="primary" onClick={handleClick}>
        Envoyer
      </Button>
    </OverlayTrigger>
  );
};

export default PopoverButton;
