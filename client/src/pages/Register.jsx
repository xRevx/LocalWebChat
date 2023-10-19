import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Register = () => {

    const {registerInfo, updateRegisterInfo} = useContext(AuthContext)

    return (
        <Form>
          <Row style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "5%",
          }}>
            <Col xs={5}>
             <Stack gap={3}>
                <h2>
                    Register
                </h2>
                <Form.Control type="text" placeholder="Name"
                 onChange={(e) => updateRegisterInfo({...registerInfo, name: e.target.value})}/>

                <Form.Control type="email" placeholder="Email"
                 onChange={(e) => updateRegisterInfo({...registerInfo, email: e.target.value})}/>

                <Form.Control type="password" placeholder="Password"
                 onChange={(e) => updateRegisterInfo({...registerInfo, password: e.target.value})}/>
                 
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Alert variant="danger" ><p>An error occured</p></Alert>
             </Stack>
            </Col>
          </Row> 
        </Form>
    );
}
 
export default Register;