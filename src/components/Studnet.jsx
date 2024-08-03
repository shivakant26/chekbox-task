import { useState } from "react";
import { StudentData } from "../utils";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

const Student = () => {
  const [selectedData, setSelectedData] = useState([]);
  const handleChange = (e) => {
    console.log(e.target.checked);
    const value = e.target.value;
    if (e.target.checked === true) {
      setSelectedData([...selectedData, value]);
    } else {
      setSelectedData(selectedData.filter((item) => item !== value));
    }
  };
  console.log(123456, selectedData);
  return (
    <>
      <div className="main-class">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {StudentData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            value={item.name}
                            onChange={(e) => handleChange(e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col sm={12} md={6}>
              <div className="selected-Item">
                <h3>Seleted Data</h3>
                {selectedData.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Student;
