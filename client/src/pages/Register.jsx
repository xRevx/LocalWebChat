import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

const Register = () => {
    return (
        <Form>
          <Row>
            <Col xs="6">
             <Stack gap={3}>
                <h2>
                    Register
                </h2>
                <Form.Control type="text" placeholder="Name"/>
                <Form.Control type="text" placeholder="Password"/>
                <Form.Control type="text" placeholder="Re enter Password"/>
             </Stack>
            </Col>
          </Row> 
        </Form>
    );
}
 
export default Register;