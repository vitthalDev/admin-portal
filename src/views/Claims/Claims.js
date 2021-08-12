import { React, Fragment, useState } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import Flatpickr from 'react-flatpickr'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { Calendar } from 'react-feather'
import { Link } from 'react-router-dom'
import ActiveAdmissions from './ActiveAdmissions/ActiveAdmissions'
import PastClaims from './PastClaims/PastClaims'
import Analysis from './Analysis/Analysis'
import grid from '@src/assets/images/icons/grid.png'

function Claims(props) {
    const [picker, setPicker] = useState(56)
    const [active, setActive] = useState("activeAdmissions")
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Claims</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </div>

            <div>
                <Nav tabs justified>
                    <NavItem>
                        <NavLink
                            active={active === 'activeAdmissions'}
                            onClick={() => {
                                toggle('activeAdmissions')
                            }}
                        >
                            Active Admissions
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === 'pastClaims'}
                            onClick={() => {
                                toggle('pastClaims')
                            }}
                        >
                            Past Claims
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === 'analysis'}
                            onClick={() => {
                                toggle('analysis')
                            }}
                        >
                            Analysis
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            {active === 'activeAdmissions' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy Type</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Employee Name/ID</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Designation</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Hospital Name</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Location</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Status</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <ActiveAdmissions {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
            {active === 'pastClaims' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy Type</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Employee Name/ID</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Designation</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Hospital Name</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Location</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Status</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <PastClaims {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
            {active === 'analysis' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <div className='pt-0    '>
                                                    <Label>Range</Label>
                                                </div>
                                                <div className='d-flex align-items-center'>
                                                    <Calendar size={14} />
                                                    {/* <Flatpickr
                                                        options={{
                                                            mode: 'range',
                                                            defaultDate: ['2019-05-01', '2019-05-10']
                                                        }}
                                                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                                                    /> */}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <Analysis {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
        </>
    )
}

export default Claims
