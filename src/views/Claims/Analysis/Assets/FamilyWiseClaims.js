import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const DepartmentWiseClaims = ({ info, direction }) => {
    const columnColors = {
        series1: '#826af9',
        series2: '#d2b0ff',
        bg: '#f8d3ff'
    }

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
                barHeight: '15%',
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
        // colors: [columnColors.series1, columnColors.series2],
        colors: info,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Parents', 'Spouse', 'Self', 'Children']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [700000, 350000, 480000, 600000]
        }
        // {
        //   name: 'Apple',
        //   data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
        // },
        // {
        //   name: 'Samsung',
        //   data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
        // }
    ]

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Family Wise Claims
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
                <Chart options={options} series={series} type='bar' height={300} />
            </CardBody>
        </Card>
    )
}

export default DepartmentWiseClaims
