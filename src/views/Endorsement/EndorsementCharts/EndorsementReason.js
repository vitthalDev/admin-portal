import React from 'react'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { HorizontalBar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


const EndorsementReason = ({ tooltipShadow, gridLineColor, labelColor, info }) => {
    const options = {
        elements: {
            rectangle: {
                borderWidth: 2,
                borderSkipped: 'right',
                borderSkipped: 'top'
            }
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
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
            display: false
        },
        layout: {
            padding: {
                bottom: -30,
                left: -25
            }
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        zeroLineColor: gridLineColor,
                        borderColor: 'transparent',
                        color: gridLineColor,
                        drawTicks: false
                    },
                    scaleLabel: {
                        display: true
                    },
                    ticks: {
                        min: 0,
                        fontColor: labelColor
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: true
                    },
                    ticks: {
                        fontColor: labelColor
                    }
                }
            ]
        }
    },
        data = {
            labels: ['ADDRESS CHANGE', 'CONTACT UPDATE', 'MEMBERS UPDATE', 'TERM UPDATE', 'POLICY UPDATE'],
            datasets: [
                {
                    data: [35, 54, 65, 43, 65, 65],
                    backgroundColor: info,
                    borderColor: 'transparent',
                    barThickness: 15
                }
            ]
        }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Endorsement Reasons
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
                    <HorizontalBar data={data} options={options} height={400} />
                </div>
            </CardBody>
        </Card>
    )
}

export default EndorsementReason

