import { useEffect, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'
import * as Icon from 'react-feather'

const TopBenefitsUtilized = props => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
    }, [])

    const options = {
        chart: {
            toolbar: {
                show: false
            }
        },
        labels: ['Employees', 'Spouse', 'Children', 'Parent'],
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        comparedResult: [2, -3, 8, -4],
        stroke: { width: 0 },
        colors: [props.primary, props.warning, props.danger, props.success]
    },
        series = [42, 32, 16, 10]

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle className='' tag='h4' style={{ color: '#645E78' }}>
                    Cashless vs Rembursement Claims
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
                <Chart className='my-1' options={options} series={series} type='donut' height={270} />
                {/* {renderChartInfo()} */}
                <div className='d-flex justify-content-between'>
                    <Icon.Square size={15} style={{ color: '#826AF9', backgroundColor: '#826AF9' }} /><span className='pr-1'>Employees</span>
                    <Icon.Square size={15} style={{ color: '#9F87FF', backgroundColor: '#9F87FF' }} /><span className='pr-1'>Children</span>
                    <Icon.Square size={15} style={{ color: '#D3B3FF', backgroundColor: '#D3B3FF' }} /><span className='pr-1'>Spouse</span>
                    <Icon.Square size={15} style={{ color: '#F8D3FF', backgroundColor: '#F8D3FF' }} /><span>Parent</span>
                </div>

            </CardBody>
        </Card>
    )
}
export default TopBenefitsUtilized
