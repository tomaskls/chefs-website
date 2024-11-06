import { Row } from "react-bootstrap";




export function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <Row className="bg-body-secondary mt-1">
            <div className=" d-flex flex-row justify-content-center align-items-center " >

            <p className="bg-danger">&copy; Chef Fabio {currentYear}</p>
            <p> created by tomazas</p>
            </div>
        </Row>
    )
}