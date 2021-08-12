import { useState } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const OverallClaims = ({ direction, warning, primary, success }) => {
    const [active, setActive] = useState('daily')

    const options = {
        chart: {
            zoom: {
                enabled: true,
                type: 'xy'
            },
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        colors: [warning, primary, success],

        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            name: 'Health Cover Claims',
            data: [344, 343, 254, 235, 287, 123, 400, 234, 221, 323, 123, 344]
        },
        {
            name: 'Life Cover Claims',
            data: [244, 313, 224, 285, 297, 193, 240, 234, 231, 353, 223, 324]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Overall No. of Claims
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
                <Chart options={options} series={series} type='scatter' height={400} />
            </CardBody>
        </Card>
    )
}

export default OverallClaims
