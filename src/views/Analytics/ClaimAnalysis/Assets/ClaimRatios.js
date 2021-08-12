import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const ClaimRatios = ({ info, direction }) => {
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '30%',
                endingShape: 'rounded'
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        colors: info,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['YTD Ratio', 'Ratio on Earned Premium', 'EOP Ratio']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [70, 50, 80]
        }
    ]

    return (
        <Card style={{ marginBottom: -10 }}>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Claim Ratios
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
                <Chart options={options} series={series} type='bar' height={140} />
            </CardBody>
        </Card>
    )
}

export default ClaimRatios
