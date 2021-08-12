import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import AverageAge from '../assets/AverageAge'
import CoveredEmployees from '../assets/CoveredEmployees'
import CoveredSpouse from '../assets/CoveredSpouses'

function DemographicsTwo(props) {
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
        warningColorShade = '#ffe802'
    return (
        <>
            <Row>
                <Col md='7' sm='12'>
                    <AverageAge
                        direction={isRtl ? 'rtl' : 'ltr'}
                        warning={colors.warning.main}
                    />
                </Col>
                <Col md='5' sm='12'>
                    <Card>
                        <CardBody>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Spouse Ratio</h5>
                                <span>1:0.80</span>
                                <Progress className='avg-session-progress  progress-bar-warning mt-25' value='80' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Child Ratio</h5>
                                <span>1:1.05</span>
                                <Progress className='avg-session-progress  progress-bar-primary mt-25' value='70' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Parent Ratio</h5>
                                <span>1:1.46</span>
                                <Progress className='avg-session-progress  progress-bar-info mt-25' value='80' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee All Department</h5>
                                <span>1:3.30</span>
                                <Progress className='avg-session-progress  progress-bar-warning mt-25' value='80' />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='5'>
                    <Card>
                        <Table size='sm' responsive style={{ height: 600 }}>
                            <thead>
                                <tr >
                                    <th style={{ padding: 10 }}>AGE BAND</th>
                                    <th style={{ padding: 10 }}>EMPLOYEE</th>
                                    <th style={{ padding: 10 }}>SPOUSE</th>
                                    <th style={{ padding: 10 }}>CHILD</th>
                                    <th style={{ padding: 10 }}>PARENT</th>
                                    <th style={{ padding: 10 }}>GRAND TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: 60 }}>
                                    <td>0 - 18 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>9 - 25 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>26 - 35 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>36 - 45 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>46 - 55 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>56 - 65 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>66 - 70 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>71 - 75 Years</td> <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>76 - 79 Years</td>
                                    <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>80 Yaers And Above</td> <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>Grand Total</td> <td>
                                        <span className='d-flex justify-content-end' >1</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>5</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>517</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end' >-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>523</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <Card>
                        <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                            {/* <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                                Active Admissions
                            </CardTitle> */}
                            <UncontrolledDropdown className='chart-dropdown'>
                                <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
                                    Last 7 days
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Last 7 days
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 30 days
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 6 Months
                                    </DropdownItem>
                                    <DropdownItem>
                                        Last 1 Year
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </CardHeader>
                        <CardBody>
                            <CoveredEmployees direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                            <CoveredSpouse direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DemographicsTwo
