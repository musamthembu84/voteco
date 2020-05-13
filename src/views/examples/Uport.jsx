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
import uPortLogo from '../../img/uport-logo.svg'


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

                                    <li className="pure-menu-item">
                                        <a href="#" className="pure-menu-link" onClick={(event) => this.routeChange(event)}><img className="uport-logo" src={uPortLogo} alt="UPort Logo" />Login with UPort</a>
                                    </li>
                                </div>
                        </CardBody>
                    </Card>
                </Col>
            </>
        );
    }
}

export default Uport;
