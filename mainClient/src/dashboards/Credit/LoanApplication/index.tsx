import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MainTable from '@/dashboards/_main-components/main-table'
import { MainButton } from '@/dashboards/_main-components/mainButton'
import React from 'react'

const LoanApplication = () => {
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
          {/* <CardDescription>member applicants</CardDescription> */}
        </CardHeader>
        <CardContent className='overflow-y-auto relative flex-1 px-5 py-0'>
          <MainTable column={6} onClickItem={(row) => {alert(JSON.stringify(row))}} RightButton={MainButton} LeftButton={MainButton} RightButtonText={'Add'} LeftButtonText={'Delete'} onClickLeft={(row) => {alert(JSON.stringify(row))}} onClickRight={(row) => {alert(JSON.stringify(row))}}  />
        </CardContent>  
      </Card>
    </div>
  )
}

export default LoanApplication