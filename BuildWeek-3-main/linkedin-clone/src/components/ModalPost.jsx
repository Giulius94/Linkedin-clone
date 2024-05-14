import { useState, useEffect } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavUser } from "../redux/slice/NavUserSlice";

function ModalPost({ handleCloseModal, show }) {
  const dispatch = useDispatch();

  const userFetch = useSelector((state) => state.navUser.navUser);
  console.log(userFetch);
  useEffect(() => {
    dispatch(fetchNavUser());
  }, []);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [areAdditionalButtonsVisible, setAreAdditionalButtonsVisible] =
    useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
    setAreAdditionalButtonsVisible(!areAdditionalButtonsVisible);
  };

  const handleCloseAndReset = () => {
    setIsClicked(false);
    setAreAdditionalButtonsVisible(false);
  };

  const dinamicClassToggle = isClicked
    ? "modalPostBtn me-2 d-none"
    : "modalPostBtn me-2";
  const dinamicClassHidden = isClicked
    ? "modalPostBtn me-2"
    : "modalPostBtn me-2 d-none";

  return (
    <>
      {userFetch && (
        <Modal show={show} onHide={handleCloseModal}>
          <Modal.Header
            className="border-0 d-flex justify-content-between align-items-top"
            closeButton
            onClick={handleCloseAndReset}
          >
            <Modal.Title className="d-flex gap-2">
              <div>
                <img
                  className="rounded-circle"
                  src={userFetch.image}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <h5>
                  {userFetch.name} {userFetch.surname}
                </h5>
                <h6>
                  Pubblica: <span>Solo veri amici</span>
                </h6>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                placeholder="Di cosa vorresti parlare?"
                onChange={handleInputChange}
                as="textarea"
                rows={3}
                value={inputValue}
                className="border-0 outline-0"
              />
            </Form.Group>
            <Modal.Footer className="border-0 ms-0 ps-0 justify-content-start">
              <div className="d-flex">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Aggiungi contenuto multimediale</Tooltip>}
                >
                  <Button className="modalPostBtn me-2">
                    <i class="modalBtnIcon bi bi-image"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Crea un evento</Tooltip>}
                >
                  <Button className="modalPostBtn me-2">
                    <i class="modalBtnIcon bi bi-calendar3"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Festeggia un'occasione speciale</Tooltip>}
                >
                  <Button className="modalPostBtn me-2">
                    <i class="modalBtnIcon bi bi-stars"></i>
                  </Button>
                </OverlayTrigger>

                {/*bottoncino input "Make Toggleino"*/}
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Altro</Tooltip>}
                >
                  <Button
                    className={dinamicClassToggle}
                    onClick={handleClicked}
                  >
                    <i className="modalBtnIcon bi bi-three-dots"></i>
                  </Button>
                </OverlayTrigger>

                {/*bottoncini da nascondere*/}
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Altro</Tooltip>}
                >
                  <Button
                    className={dinamicClassHidden}
                    onClick={handleClicked}
                  >
                    <i class="modalBtnIcon bi bi-briefcase-fill"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Altro</Tooltip>}
                >
                  <Button
                    className={dinamicClassHidden}
                    onClick={handleClicked}
                  >
                    <i class="modalBtnIcon bi bi-bar-chart-line-fill"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Altro</Tooltip>}
                >
                  <Button
                    className={dinamicClassHidden}
                    onClick={handleClicked}
                  >
                    <i class="modalBtnIcon bi bi-file-earmark-text-fill"></i>
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Altro</Tooltip>}
                >
                  <Button
                    className={dinamicClassHidden}
                    onClick={handleClicked}
                  >
                    <i class="modalBtnIcon bi bi-file-person-fill"></i>
                  </Button>
                </OverlayTrigger>
              </div>
            </Modal.Footer>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex gap-2 align-items-center">
              <i className="bi bi-clock fs-5 m-0 p-0"></i>
              <div onClick={handleCloseAndReset}>
                <Button
                  className={
                    inputValue === ""
                      ? "bg-secondary disabled border-0 rounded-pill"
                      : "bg-primary border-0 rounded-pill"
                  }
                  onClick={handleCloseModal}
                >
                  Pubblica
                </Button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ModalPost;
