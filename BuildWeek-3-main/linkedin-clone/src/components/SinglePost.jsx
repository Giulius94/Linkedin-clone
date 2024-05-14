import React from "react";

export default function SinglePost() {
  const homepagePost = useSelector((state) => state.homepageUser.homepageArr);
  const [open, setOpen] = useState(false);
  const loading = useSelector((state) => state.homepageUser.loading);
  //console.log(loading);

  return (
    <>
      <Card className="w-100 my-2">
        <div className="d-flex align-items-center mx-2">
          <img
            src={e.user.image}
            alt="profile-img"
            style={{ height: "5em", width: "5em" }}
            className="rounded-circle border border-white border-3 postHeight"
          />
          <div className="w-100 d-flex align-items-center justify-content-between mx-2">
            <div className="d-flex flex-column">
              <h6 className="m-0 mt-2">
                {e.user.name} {e.user.surname}
              </h6>
              <p className="d-inline m-0">{e.user.title}</p>
              <p>
                {e.createdAt.slice(0, 10)} •{" "}
                <i className="bi bi-globe-asia-australia text-secondary"></i>
              </p>
            </div>
            <Button
              variant="outline-primary"
              className="border-0 d-flex align-items-center"
            >
              <FaPlus className="me-1" />
              Segui
            </Button>
          </div>
        </div>
        <Card.Body className="p-0 pt-1">
          <Card.Text className="px-3">{e.text}</Card.Text>
          <Card.Img
            variant="top"
            className="rounded-0"
            src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
          />
          <div className="d-flex justify-content-between mx-3">
            <div>
              <AiFillLike className="text-primary" />
              <FcLike className="text-danger" />
              <PiHandsClapping className="text-success" />
            </div>
            <p className="my-1 text-secondary">
              {" "}
              {Math.floor(Math.random() * 2000)} commenti •{" "}
              {Math.floor(Math.random() * 2000)} diffusioni post
            </p>
          </div>
          <hr className="mx-2 my-2 text-secondary" />
          <div className="d-flex flex-row justify-content-around my-1 mx-2">
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3">
              <SlLike className="fs-4 me-1" /> Consiglia
            </Button>
            <Button
              variant="outline-secondary border-0 d-flex align-items-center p-3"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
            >
              <BiCommentDetail className="fs-4 me-1" /> Commenta
            </Button>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3">
              <HiMiniArrowPathRoundedSquare className="fs-4 me-1" /> Diffondi il
              post
            </Button>
            <Button variant="outline-secondary border-0 d-flex align-items-center p-3">
              <IoIosSend className="fs-4 me-1" /> Invia
            </Button>
          </div>
        </Card.Body>

        <Collapse in={open}>
          <Card className="w-100 border-0">
            <div className="createPost d-flex align-items-center">
              <img
                src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
                alt="profile-img"
                style={{ height: "5em", width: "5em" }}
                className="rounded-circle border border-white border-3 commentImg ms-2"
              />

              <div className="d-flex align-items-center w-100 border rounded-5 mx-2">
                <Form.Control
                  required
                  type="text"
                  placeholder="Aggiungi un commento..."
                  className="w-100 border-0 rounded-5 py-2"
                />
                <FaRegSmile className="me-2 fs-4" />
                <SlPicture className="me-4 fs-4" />
              </div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg"
                alt="profile-img"
                style={{ height: "5em", width: "5em" }}
                className="rounded-circle border border-white border-3 commentImg ms-2"
              />
              <Card.Body className="px-1">
                <Card.Text className="commentBg p-2 me-2 rounded">
                  <h6 className="my-1">Cristiano Scaramucci</h6>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Collapse>
      </Card>
    </>
  );
}
