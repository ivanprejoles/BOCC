import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MainTable from '@/dashboards/_main-components/main-table'
import React from 'react'

const LoanStatus = () => {
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>Loan Status</CardTitle>
          {/* <CardDescription>member applicants</CardDescription> */}
        </CardHeader>
        <CardContent className='overflow-y-auto relative flex-1 px-5 py-0'>
          <MainTable column={4} onClickItem={(data) => (alert(JSON.stringify(data)))} />
        </CardContent>
      </Card>
    </div>
  )
}

export default LoanStatus