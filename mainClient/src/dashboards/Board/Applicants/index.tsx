/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MainTable from "@/dashboards/_main-components/main-table"
import { MainButton } from "@/dashboards/_main-components/mainButton"
import { useModal } from "@/hooks/use-modal-store"
import { useEffect, useState } from "react"
import { string } from "zod"

const Applicants = () => {
  const [mainRows, setMainRows] = useState<any[]>([])
  const [transformedRows, setTransFormedRow] = useState<{fullName: string, date: number}[]>([])
  const [col, setCol] = useState<number>(0)
  const {onOpen} = useModal()

  useEffect(() => {
    setMainRows([
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota5', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota3', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
      { first_name: 'Toyota2', middle_name: 'Corolla', last_name: 'Corolla', mother: 'Corolla', father: 'Corolla', spouse: 'Corolla',date_birth: '1212121', place_of_birth: 'Corolla', civil_status: 'Corolla', gender: 2020, citizenship: 'silver', contact_number: 232323242, email: 'dawdwadwadwadwadwa', residential_address: 'dsadasdsadas', provincial_address: 'dsadasda', occupation: 'dsadsadsa', employer: 'sdadasdsadsada', tin: 23232 },
    ])
  }, [])
  
  useEffect(() => {
    if (mainRows.length <= 0) return
    
    const transformedData = mainRows?.map((row) => ({
      fullName: `${row.first_name} ${row.middle_name} ${row.last_name}`,
      date: row.date_birth,
    }));

    setCol(Object.keys(transformedData[0]).length)
    setTransFormedRow(transformedData); 
  }, [mainRows]); 

  const onClickItem = (data: number) => {
    onOpen('ShowForm', mainRows[data])
  }

  const onClickLeft = (data: number) => {
    const name = mainRows[data].first_name
    onOpen('Request', {name, requestType: 'accept'})
  }
  
  const onClickRight = (data: number) => {
    const name = mainRows[data].first_name
    onOpen('Request', {name, requestType: 'delete'})
  }
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>Member Applicants</CardTitle>
        </CardHeader>
        <CardContent className='overflow-y-auto relative flex-1 px-5 py-0'>
          <MainTable data={transformedRows} column={col+2} onClickItem={(data) => onClickItem(data)} LeftButton={MainButton} RightButton={MainButton} RightButtonText={'dsadsa'} LeftButtonText={'dsadawdss'} onClickLeft={(row) => {onClickLeft(row)}} onClickRight={(row) => {onClickRight(row)}}/>
        </CardContent>
      </Card>
    </div>
  )
}

export default Applicants