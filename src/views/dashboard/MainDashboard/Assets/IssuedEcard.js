import { React, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Breadcrumb, BreadcrumbItem, Table, Label, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Download, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'react-feather'
import grid from '@src/assets/images/icons/grid.png'
import group from '@src/assets/images/icons/group.png'
import papers from '@src/assets/images/icons/papers.png'
import fileClock from '@src/assets/images/icons/fileClock.png'
import cloudDownload from '@src/assets/images/icons/cloudDownload.png'

function IssuedEcard() {
    return (
        <>
            <Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <Link to='/dashboard'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active >
                        <span>E Card</span>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Fragment>
            <Row className='mt-1' >
                <Col lg='3' sm='4'>
                    <Link to='/dashboard/employees'>
                        <Card>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>136</h2>
                                        <p className='card-text' style={{ color: '#625F6E' }}>Employees</p>
                                    </div>
                                    <div className='avatar avatar-stats p-50 m-0 bg-light-primary'>
                                        <img src={group} style={{ height: 30, width: 30 }} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col lg='3' sm='4'>
                    <Link to='/dashboard/policies'>
                        <Card>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>04</h2>
                                        <p className='card-text' style={{ color: '#625F6E' }}>Policies</p>
                                    </div>
                                    <div className='avatar avatar-stats p-50 m-0 bg-light-info'>
                                        <img src={papers} style={{ height: 30, width: 30 }} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col lg='3' sm='4'>
                    <Link to='/dashboard/claims'>
                        <Card>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>10</h2>
                                        <p className='card-text' style={{ color: '#625F6E' }}>Claims</p>
                                    </div>
                                    <div className='avatar avatar-stats p-50 m-0 bg-light-danger'>
                                        <img src={fileClock} style={{ height: 30, width: 30 }} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col lg='3' sm='4'>
                    <Link to='/dashboard/issuedcard'>
                        <Card>
                            <CardBody>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h2 className='font-weight-medium mb-0' >136</h2>
                                        <p className='card-text' style={{ color: '#625F6E' }}>E card issued</p>
                                    </div>
                                    <div className='avatar avatar-stats p-50 m-0 bg-light-success'>
                                        <img src={cloudDownload} style={{ height: 30, width: 30 }} />
                                        {/* <DownloadCloud size={30} /> */}
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </Row>

            <Fragment>
                <Card>
                    <Row className='mx-0 mt-1 mb-50'>
                        <Col xl='3' lg='12'>
                            <div className='d-flex justify-content-star align-items-center'>
                                <Label className='pr-1' for='sort-select'>show</Label>
                                <Input
                                    className='dataTable-select'
                                    type='select'
                                    id='sort-select'
                                    // value={rowsPerPage}
                                    // onChange={e => handlePerPage(e)}
                                    style={{ width: 70 }}
                                >
                                    <option value={7}>7</option>
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={75}>75</option>
                                    <option value={100}>100</option>
                                </Input>
                                <Label className='pl-1' for='sort-select'>Entries</Label>
                            </div>
                        </Col>

                        <Col xl='3' />

                        <Col xl='4' lg='12'>
                            <Input
                                className='dataTable-filter'
                                type='text'
                                bsSize='sm'
                                id='search-input'
                                placeHolder='Search'
                                // value={searchValue}
                                // onChange={handleFilter}
                                style={{ height: 40, marginLeft: 70 }}
                            />
                        </Col>
                    </Row>

                    <CardBody>
                        <Table size='lg' responsive>
                            <thead>
                                <tr>
                                    <th className='font-weight-bold pt-1' style={{ fontSize: 10, height: 40, color: '#757575' }} ><div>E CARD NO.</div></th>
                                    <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }} ><div>EID</div></th>
                                    <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }} ><div>EMPLOYEE NAME</div></th>
                                    <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }} ><div>GENERATION DATE</div></th>
                                    <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }} ><div>ACTION</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: 60 }} >
                                    <td>
                                        <span className='d-flex justify-content-end '>7825683853</span>
                                    </td>
                                    <td>
                                        TT01
                                    </td>
                                    <td>
                                        Rahul Saxena
                                    </td>
                                    <td className='d-flex justify-content-end' >
                                        <span className='d-flex justify-content-end'>29 Jan 2021</span>
                                    </td>
                                    <td>
                                        <Download />
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }} >
                                    <td>
                                        <span className='d-flex justify-content-end '>7562683853</span>
                                    </td>
                                    <td>
                                        TT02
                                    </td>
                                    <td>
                                        Nikhil Singh
                                    </td>
                                    <td  >
                                        <span className='d-flex justify-content-end'>25 Jan 2021</span>
                                    </td>
                                    <td>
                                        <Download />
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }} >
                                    <td>
                                        <span className='d-flex justify-content-end '>2694683853</span>
                                    </td>
                                    <td>
                                        TT03
                                    </td>
                                    <td>
                                        Rekha Sharma
                                    </td>
                                    <td >
                                        <span className='d-flex justify-content-end'>22 Feb 2021</span>
                                    </td>
                                    <td>
                                        <Download />
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }} >
                                    <td>
                                        <span className='d-flex justify-content-end '>1124683853</span>
                                    </td>
                                    <td>
                                        TT04
                                    </td>
                                    <td>
                                        Jay Singh
                                    </td>
                                    <td >
                                        <span className='d-flex justify-content-end'> 28 Jan 2021</span>
                                    </td>
                                    <td>
                                        <Download />
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }} >
                                    <td>
                                        <span className='d-flex justify-content-end '>8874683853</span>
                                    </td>
                                    <td>
                                        TT05
                                    </td>
                                    <td>
                                        Dev Sharma
                                    </td>
                                    <td  >
                                        <span className='d-flex justify-content-end'>   11 Mar 2021</span>
                                    </td>
                                    <td>
                                        <Download />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Row>
                            <Col xl='6'>
                                <div style={{ paddingTop: 25, marginLeft: 10 }}>
                                    <span>showing 1 to 6 of 130 entries</span>
                                </div>
                            </Col>
                            <Col xl='6'>
                                <Pagination className='d-flex justify-content-end mt-1 mr-1'>
                                    <PaginationItem>
                                        <PaginationLink href='#'><ChevronsLeft size={18} /></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'><ChevronLeft size={18} /></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href='#'>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'>2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'>3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'>4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'>5</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'><ChevronRight size={18} /></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href='#'><ChevronsRight size={18} /></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Fragment>
        </>
    )
}

export default IssuedEcard
