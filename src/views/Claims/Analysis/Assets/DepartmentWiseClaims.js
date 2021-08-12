import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const DepartmentWiseClaims = ({ direction, warning }) => {
    const options = {
        chart: {
            zoom: {
                enabled: false
            },
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },

        markers: {
            strokeWidth: 7,
            strokeOpacity: 1,
            strokeColors: ['#fff'],
            colors: [warning]
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        colors: [warning],
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        tooltip: {
            custom(data) {
                return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
            }
        },
        xaxis: {
            categories: ['Accounts', 'IT', 'Marketing', 'GST', 'Income Tax', 'Others']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [200000, 100050, 160000, 300000, 150000, 100000]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Department Wise Claims
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
                <Chart options={options} series={series} type='line' height={350} />
            </CardBody>
        </Card>
    )
}

export default DepartmentWiseClaims
