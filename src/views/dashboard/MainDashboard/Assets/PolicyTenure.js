import { Fragment, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Flatpickr from 'react-flatpickr'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const PolicyTenure = ({
    tooltipShadow,
    gridLineColor,
    labelColor,
    warningColorShade,
    lineChartDanger,
    lineChartPrimary
}) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: false,
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                padding: 25,
                boxWidth: 10
            }
        },
        hover: {
            mode: 'label'
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
        layout: {
            padding: {
                top: -15,
                bottom: -25,
                left: -15
            }
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true
                    },
                    gridLines: {
                        display: true,
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    },
                    ticks: {
                        fontColor: labelColor
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    scaleLabel: {
                        display: true
                    },
                    ticks: {
                        stepSize: 100000,
                        min: 0,
                        max: 500000,
                        fontColor: labelColor
                    },
                    gridLines: {
                        display: true,
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    }
                }
            ]
        },
        legend: {
            position: 'top',
            align: 'start',
            labels: {
                usePointStyle: true,
                padding: 25,
                boxWidth: 9
            }
        }
    },
        data = {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    data: [270000, 210000, 160000, 160000, 200000, 265000, 210000, 270000, 255000, 290000, 360000, 375000],
                    label: 'Family Floater Plan',
                    borderColor: lineChartDanger,
                    lineTension: 0.5,
                    pointStyle: 'circle',
                    backgroundColor: lineChartDanger,
                    fill: false,
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderWidth: 5,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: lineChartDanger,
                    pointShadowOffsetX: 1,
                    pointShadowOffsetY: 1,
                    pointShadowBlur: 5,
                    pointShadowColor: tooltipShadow
                },
                {
                    data: [80000, 125000, 100000, 130000, 210000, 19000, 140000, 160000, 230000, 300000, 220000, 170000, 210000],
                    label: 'Joint Health Insurance',
                    borderColor: lineChartPrimary,
                    lineTension: 0.5,
                    pointStyle: 'circle',
                    backgroundColor: lineChartPrimary,
                    fill: false,
                    pointRadius: 1,
                    pointHoverRadius: 5,
                    pointHoverBorderWidth: 5,
                    pointBorderColor: 'transparent',
                    pointHoverBorderColor: '#fff',
                    pointHoverBackgroundColor: lineChartPrimary,
                    pointShadowOffsetX: 1,
                    pointShadowOffsetY: 1,
                    pointShadowBlur: 5,
                    pointShadowColor: tooltipShadow
                }
            ]
        }

    //** To add spacing between legends and chart
    const plugins = [
        {
            beforeInit(chart) {
                chart.legend.afterFit = function () {
                    this.height += 20
                }
            }
        }
    ]

    const [picker, setPicker] = useState(new Date())

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle tag='h4'>Policy Tenure</CardTitle>
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
                <div style={{ height: '450px' }}>
                    <Line data={data} options={options} height={500} plugins={plugins} />
                </div>
            </CardBody>
        </Card>
    )
}

export default PolicyTenure
