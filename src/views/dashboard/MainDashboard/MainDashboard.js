import { React, Fragment, useContext } from 'react'
import Avatar from '@components/avatar'
import { Breadcrumb, BreadcrumbItem, Row, Col, Card, CardBody, CardHeader, CardTitle, Media, Table, Progress, FormGroup } from 'reactstrap'
import { Menu, User, Users, Archive, File, CreditCard, Download, MoreVertical, Circle, DownloadCloud } from 'react-feather'
import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { Chart } from 'react-apexcharts'
import grid from '@src/assets/images/icons/grid.png'
import TableSmall from '../../tables/reactstrap/TableSmall'
import TableServerSide from '../../tables/data-tables/advance/TableServerSide'
import ApexScatterChart from '../../charts/apex/ApexScatterCharts'
import PolarAreaChart from '../../charts/chart-js/ChartjsPolarAreaChart'
import SessionByDevice from '../../ui-elements/cards/analytics/SessionByDevice'
import LineChart from '../../charts/chart-js/ChartjsLineChart'
import CardEmployeesTasks from '../../ui-elements/cards/advance/CardEmployeesTask'
import ProductOrders from '../../ui-elements/cards/analytics/ProductOrders'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { tableSmall } from '../../tables/reactstrap/TableSourceCode'
import employees from '@src/assets/images/icons/employees.png'
import group from '@src/assets/images/icons/group.png'
import paper from '@src/assets/images/icons/paper.png'
import papers from '@src/assets/images/icons/papers.png'
import fileClock from '@src/assets/images/icons/fileClock.png'
import cloudDownload from '@src/assets/images/icons/cloudDownload.png'
import male1 from '@src/assets/images/icons/male1.png'
import male2 from '@src/assets/images/icons/male2.png'
import male3 from '@src/assets/images/icons/male3.png'
import male4 from '@src/assets/images/icons/male4.png'
import female1 from '@src/assets/images/icons/female1.png'
import female2 from '@src/assets/images/icons/female2.png'
import female3 from '@src/assets/images/icons/female3.png'
import female4 from '@src/assets/images/icons/female4.png'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import PolicyOverview from './Assets/PoliciesOverview'
import PolicyTenure from './Assets/PolicyTenure'
import DateRange from './Assets/DateRange'
import PlanOne from './Assets/PlanOne'
import PlanTwo from './Assets/PlanTwo'
import PlanThree from './Assets/PlanThree'
import PlanFour from './Assets/PlanFour'
import CardSubtitle from 'reactstrap/lib/CardSubtitle'
import ActiveAdmissions from './Assets/ActiveAdmissions'


function MainDashboard(props) {
    const [isRtl, setIsRtl] = useRTL()
    const context = useContext(ThemeColors)
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
        trackBgColor = '#e9ecef',
        labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
        tooltipShadow = 'rgba(0, 0, 0, 0.25)',
        gridLineColor = 'rgba(200, 200, 200, 0.2)',
        lineChartPrimary = '#666ee8',
        lineChartDanger = '#ff4961',
        warningColorShade = '#ffe802',
        warningLightColor = '#FDAC34',
        successColorShade = '#28dac6',
        primaryColorShade = '#836AF9',
        infoColorShade = '#299AFF',
        yellowColor = '#ffe800',
        greyColor = '#4F5D70',
        blueColor = '#2c9aff',
        blueLightColor = '#84D0FF',
        greyLightColor = '#EDF1F4'
    return (
        <>
            <Fragment>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active >
                        <span>Home</span>
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

            <Row>
                <Col lg='8'>
                    <PolicyTenure
                        warningColorShade={warningColorShade}
                        lineChartDanger={lineChartDanger}
                        lineChartPrimary={lineChartPrimary}
                        labelColor={labelColor}
                        tooltipShadow={tooltipShadow}
                        gridLineColor={gridLineColor}
                    />
                </Col>

                <Col lg='4' >
                    <ActiveAdmissions

                    />
                </Col>
            </Row>

            <Row>
                <Col sm='12'>
                    <Card title='ActiveAdmission' noBody>
                        {/* <CardHeader style={{ marginBottom: -50 }}>
                            <h5>Active Admissions</h5>
                        </CardHeader> */}
                        <CardBody>
                        </CardBody>
                        {/* <TableSmall /> */}
                        <TableServerSide />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg='4'>
                    <ProductOrders
                        primary={context.colors.primary.main}
                        warning={context.colors.warning.main}
                        danger={context.colors.danger.main}
                    />
                </Col>
                <Col lg='8'>
                    <Card>
                        <CardHeader>
                            <h3>Active Health Challenges</h3>
                        </CardHeader>
                        <CardBody>
                            <Row className='mb-2'>
                                <Col md='8'>
                                    <h5 style={{ color: 'blue' }}>#FittestWomen</h5>
                                    <small><i>150 participants</i></small>
                                    <Progress className='avg-session-progress  progress-bar-primary mt-25' value='20' />
                                </Col>
                                <Col md='2'>
                                    <h6>Neha</h6>
                                    <small>leading</small><br />
                                    <i>10 days left</i>
                                </Col>
                                <Col md='2' style={{ marginTop: -10 }}>
                                    <Avatar img={avatar2} imgHeight='70' imgWidth='70' />
                                </Col>
                            </Row>
                            <Row className='mb-2 pt-2'>
                                <Col md='8'>
                                    <h5 style={{ color: 'red' }}>#FitIn40</h5>
                                    <small><i>100 participants</i></small>
                                    <Progress className='avg-session-progress  progress-bar-danger mt-25' value='50' />
                                </Col>
                                <Col md='2'>
                                    <h6>Rahul</h6>
                                    <small>leading</small><br />
                                    <i>06 days left</i>
                                </Col>
                                <Col md='2' style={{ marginTop: -10 }}>
                                    <Avatar img={avatar1} imgHeight='70' imgWidth='70' />
                                </Col>
                            </Row>
                            <Row className='mb-2 pt-2'>
                                <Col md='8'>
                                    <h5 style={{ color: 'orange' }}>#10KStepsDaily</h5>
                                    <small><i>100 participants</i></small>
                                    <Progress className='avg-session-progress  progress-bar-warning mt-25' value='30' />
                                </Col>
                                <Col md='2'>
                                    <h6>Nikhil</h6>
                                    <small>leading</small><br />
                                    <i>02 days left</i>
                                </Col>
                                <Col md='2' style={{ marginTop: -10 }}>
                                    <Avatar img={avatar4} imgHeight='70' imgWidth='70' />
                                </Col>
                            </Row>
                            <Row className='mb-1 pt-2'>
                                <Col md='8'>
                                    <h5 style={{ color: 'green' }}>#FitIn50</h5>
                                    <small><i>50 participants</i></small>
                                    <Progress className='avg-session-progress  progress-bar-success mt-25' value='90' />
                                </Col>
                                <Col md='2'>
                                    <h6>Pooja</h6>
                                    <small>leading</small><br />
                                    <i>06 days left</i>
                                </Col>
                                <Col md='2' style={{ marginTop: -10 }}>
                                    <Avatar img={avatar3} imgHeight='70' imgWidth='70' />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default MainDashboard
