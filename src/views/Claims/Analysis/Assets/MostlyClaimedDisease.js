import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const MostlyClaimedDisease = () => {
    const donutColors = {
        series1: '#ffe700',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#2b9bf4',
        series5: '#FFA1A1'
    }

    const options = {
        colors: [donutColors.series1, donutColors.series2, donutColors.series4],
        plotOptions: {
            radialBar: {
                size: 185,
                hollow: {
                    size: '25%'
                },
                track: {
                    margin: 15
                },
                dataLabels: {
                    name: {
                        fontSize: '2rem',
                        fontFamily: 'Montserrat'
                    },
                    value: {
                        fontSize: '1rem',
                        fontFamily: 'Montserrat'
                    },
                    total: {
                        show: true,
                        fontSize: '1rem',
                        label: 'Claim Amount',
                        formatter(w) {
                            return '10 Lakh'
                        }
                    }
                }
            }
        },
        grid: {
            padding: {
                top: -35,
                bottom: -30
            }
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Covid', 'Heart Attacks', 'Typhoid']
    }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Statics
                </CardTitle>
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
                <Chart options={options} series={[80, 50, 35]} type='radialBar' height={390} />
            </CardBody>
        </Card>
    )
}

export default MostlyClaimedDisease
