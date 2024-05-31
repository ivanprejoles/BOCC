import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MainTable from '@/dashboards/_main-components/main-table'
import { useModal } from '@/hooks/use-modal-store'
import { useEffect, useState } from 'react'

const Transactions = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mainRows, setMainRows] = useState<any[]>([])
  const [transformedRows , setTransFormedRow] = useState<{name: string, date: number}[]>([])
  const [col, setCol] = useState<number>(0)
  const {onOpen} = useModal()

  useEffect(() => {
    setMainRows([
      { dashboard: 'dsewa43', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa4', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa432as', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa432s', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa432s', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'ds423432das', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsada432s', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsad432342as', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsad423as', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsad432as', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa423342das', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa4324das', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'ds43242adas', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'd42sadas', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
      { dashboard: 'dsa432432das', date: '23232', name: 'dwadada dawdw', transaction: 'huhaudhsai dhsaihdsuaidhiaus' },
    ])
  }, [])
  
  useEffect(() => {
    if (mainRows.length <= 0) return
    
    const transformedData = mainRows?.map((row) => ({
      name: row.name,
      date: row.date,
    }));

    setCol(Object.keys(transformedData[0]).length)
    setTransFormedRow(transformedData); 
  }, [mainRows]); 

  const onClickItem = (data: number) => {
    console.log( mainRows[data])
  }
  
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>Membesr Applicants</CardTitle>
          {/* <CardDescription>member applicants</CardDescription> */}
        </CardHeader>
        <CardContent className='overflow-y-auto relative flex-1 px-5 py-0'>
          <MainTable data={transformedRows} column={col} onClickItem={(data) => onClickItem(data)} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions