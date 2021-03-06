import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import { Circle } from 'react-feather'
import ClaimCostAverageRemCash from '../Assets/ClaimCostAverageRemCash'
import ClaimCostAverageClaimSummary from '../Assets/ClaimCostAverageClaimSummary'

function ClaimAnalysisThree(props) {
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
                            <CardTitle tag='h6'>Relationship wise Claim Analysis</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='sm' responsive style={{ height: 200 }}>
                                <thead>
                                    <tr>
                                        <th>CLAIM TYPE</th>
                                        <th>NO. OF CLAIMS</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cashless</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>77</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>728,407</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Reimbursement</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>36</span>
                                        </td>
                                        <td className='d-flex justify-content-end'>
                                            <span>4,180,731</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>58</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>1,909,138</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimCostAverageRemCash direction={isRtl ? 'rtl' : 'ltr'} />
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
                                    Overall cashless claims accounts for 38% of the total claim cost for Heinze India Pvt. Ltd is below industry
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Average claim cost for cashless claims is below industrty and rembuirsement claims is above Industry
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Status Wise Claim Summary & Claim ratos
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='lg' responsive style={{ height: 400 }}>
                                <thead>
                                    <tr>
                                        <th>AMOUNT BAND</th>
                                        <th>NO. OF CLAIMS</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> &lt; 10K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>86</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>45,543</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10K to Below 25K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>68</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>6,75,543</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>25K to Below 50K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>56</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>65,773</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>50K to Below 75K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>65</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>45,343</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75K to Below 100K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>56</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>4,35,043</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>150K to Below 200K</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>56</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>3,45,433</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td>
                                            <span className='d-flex justify-content-end'>488</span>
                                        </td>
                                        <td>
                                            <span className='d-flex justify-content-end'>4,35,543</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimCostAverageClaimSummary direction={isRtl ? 'rtl' : 'ltr'} />
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
                                    Most of the claim reported are i nbelow 50k amount band
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    For average claim cost only settled claims are considered
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysisThree
