import React from 'react'
import { Link } from 'react-router'

function PaymentCancel() {
  return (
    <div>
      <h1 className='text-red-600 text-3xl font-semibold text-center'>Payment has been cancelled. Please try again later.</h1>
      <Link to={"/dashboard"}>Go back to Home</Link>
    </div>
  )
}

export default PaymentCancel
