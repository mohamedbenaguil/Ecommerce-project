import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrdersItem from './UserAllOrdersItem'

const UserAllOrders = () => {
    return (
        <div>
        <Row className="justify-content-between ">
          <div className="admin-content-text">Hello Ali</div>
          <UserAllOrdersItem/>
        </Row>
      </div>
    )
}

export default UserAllOrders
