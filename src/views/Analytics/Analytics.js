import React from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Breadcrumb, BreadcrumbItem, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import Demographics from './Demographics/Demographics'
import ClaimAnalysis from './ClaimAnalysis/ClaimAnalysis'
import grid from '@src/assets/images/icons/grid.png'

function Analytics(props) {
    // const [active, setActive] = React.useState("demographics")
    const [active, setActive] = React.useState("demographics")
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Analytics</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <div>
                <Nav tabs justified>
                    <NavItem>
                        <NavLink
                            active={active === 'demographics'}
                            onClick={() => {
                                toggle('demographics')
                            }}
                        >
                            Demographics
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={active === 'claimAnalysis'}
                            onClick={() => {
                                toggle('claimAnalysis')
                            }}
                        >
                            Claim Analysis
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            <Row>
                {active === 'demographics' ? (
                    <Col md='12' sm='12'>
                        <Demographics {...props} />
                    </Col>
                ) : null}

                {active === 'claimAnalysis' ? (
                    <Col md='12' sm='12'>
                        <ClaimAnalysis {...props} />
                    </Col>
                ) : null}
            </Row>
        </>
    )
}

export default Analytics
