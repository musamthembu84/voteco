import React from "react";
import { withRouter } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col
} from "reactstrap";

class Uport extends React.Component {

    routeChange=()=> {
        this.props.history.push("/admin/index");
    }
    render() {
        return (
            <>
                <Col lg="5" md="7">
                    <Card className="bg-secondary shadow border-0">

                        <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center">
                                    <Button className="my-4" color="primary" type="button" onClick={this.routeChange}>
                                        Sign in using uPort
                                    </Button>
                                </div>
                        </CardBody>
                    </Card>
                </Col>
            </>
        );
    }
}

export default Uport;
