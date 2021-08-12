import { useContext } from 'react'
import { Table, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'

const EndorsementTableData = () => {
  const { colors } = useContext(ThemeColors)
  const [skin, setSkin] = useSkin(),
    pending = '#4F5D70'
  return (
    <Table size='md' responsive>
      <thead>
        <tr style={{ height: 50 }}>
          <th>ENDORSEMENT NUMBER</th>
          <th>TYPE</th>
          <th>EMPLOYEE NAME</th>
          <th>SUBMISSION DATE</th>
          <th>REASON</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: 60 }}>
          <td>
            <Link to='/dashboard/endorsement/tracker' style={{ color: '#9B9B9B' }}>
              <span className='d-flex justify-content-end'> 5645644464</span>
            </Link>
          </td>
          <td>
            <Link to='/dashboard/endorsement/newendorsement' style={{ color: '#9B9B9B' }}>
              Paid
            </Link>
          </td>
          <td>Rahul Sharma</td>
          <td>
            <span className='d-flex justify-content-end'>29 Jan 2021</span>
          </td>
          <td>Address Change</td>
          <td>
            <Badge color='info' pill className='badge' >
              Accepted
            </Badge>
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <span className='d-flex justify-content-end'>476589435</span>
          </td>
          <td>Paid</td>
          <td>Nikhil Singh</td>
          <td>
            <span className='d-flex justify-content-end'>25 Jan 2021</span>
          </td>
          <td>Contact Info Update</td>
          <td>
            <Badge color='warning' pill className='badge'>
              In-process
            </Badge>
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <span className='d-flex justify-content-end'> 984757458</span>
          </td>
          <td>Nill</td>
          <td>Rekha Sharma</td>
          <td>
            <span className='d-flex justify-content-end'>29 Jan 2021</span>
          </td>
          <td>Add Spouse</td>
          <td>
            <Badge color='warning' pill className='badge'>
              In-process
            </Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default EndorsementTableData