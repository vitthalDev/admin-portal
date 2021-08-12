import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const EndorsementMonthwise = ({ tooltipShadow, gridLineColor, labelColor, successColorShade }) => {
    const options = {
        elements: {
            rectangle: {
                borderWidth: 2,
                borderSkipped: 'bottom'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
            display: false
        },
        tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: '#fff',
            titleFontColor: '#000',
            bodyFontColor: '#000'
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: true,
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    },
                    scaleLabel: {
                        display: false
                    },
                    ticks: {
                        fontColor: labelColor
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    },
                    ticks: {
                        stepSize: 10,
                        min: 0,
                        max: 100,
                        fontColor: labelColor
                    }
                }
            ]
        }
    },
        data = {
            labels: ['Jan', ' Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: [27, 90, 19, 25, 12, 85, 55, 87, 12, 15, 23, 28, 19],
                    backgroundColor: successColorShade,
                    borderColor: 'transparent',
                    barThickness: 15
                }
            ]
        }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Endorsement Monthwise
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
                <div style={{ height: '400px' }}>
                    <Bar data={data} options={options} height={400} />
                </div>
            </CardBody>
        </Card>
    )
}

export default EndorsementMonthwise

