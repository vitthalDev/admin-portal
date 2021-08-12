import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import { Circle } from 'react-feather'
import ClaimRatioProjection from '../Assets/ClaimRatioProjection'
import ClaimCostAverage from '../Assets/ClaimCostAverage'


function ClaimAnalysisTwo(props) {
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
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h6'>Claim Incidences Ratio & Projection</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='sm' responsive style={{ height: 300 }}>
                                <thead>
                                    <tr>
                                        <th>RELATION</th>
                                        <th>CURRENT MEMBERS</th>
                                        <th>EOP CLAIMS</th>
                                        <th>CURRENT INCIDENCES</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td>
                                            <span className='d-flex justify-content-end' >10</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>39</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>1%</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>5%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Spouse</td>
                                        <td>
                                            <span className='d-flex justify-content-end' >2</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>75</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>3%</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>4%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Child</td>
                                        <td>
                                            <span className='d-flex justify-content-end' >4</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>76</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>3%</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>3%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Parent</td>
                                        <td>
                                            <span className='d-flex justify-content-end' >3</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>23</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>4%</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>12%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td>
                                            <span className='d-flex justify-content-end' >4</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>54</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>15%</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>5%</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimRatioProjection
                        direction={isRtl ? 'rtl' : 'ltr'}
                        warning={colors.warning.main}
                    />
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='12'>
                    <Card>
                        <Table size='lg' responsive style={{ height: 390 }}>
                            <thead>
                                <tr>
                                    <th>CLAIM STATUS</th>
                                    <th>NO. OF CLAIMS</th>
                                    <th>CLAIM COST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employee</td>
                                    <td>
                                        <span className='d-flex justify-content-end'>10</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>2,33,434</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Spouse</td>
                                    <td>
                                        <span className='d-flex justify-content-end'>18</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>6,70,443</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Child</td>
                                    <td>
                                        <span className='d-flex justify-content-end'>-</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>-</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Parent</td>
                                    <td>
                                        <span className='d-flex justify-content-end'>20</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>1,99,566</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Grand Total</td>
                                    <td>
                                        <span className='d-flex justify-content-end'>48</span>
                                    </td>
                                    <td>
                                        <span className='d-flex justify-content-end'>19,99,566</span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimCostAverage direction={isRtl ? 'rtl' : 'ltr'} />
                </Col>
            </Row>

            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h5'>Notes</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Parent are the highest claming group in terms of both no. of claims and claim cost
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Average claim cost for Heinze India Pvt. Ltd. as a whole is above industry
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Onl;y settled claims arae considered for average claim cost
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysisTwo
