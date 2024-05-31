import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const LoanCreation = () => {
  const data = [
    {
      LoanType:'loan1',
      loanAmount: {title: 'Loan Amount', value: 10000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 440.96},
      totalInterest: {title: 'Total Interest', value: 583.03},
      totalPayment: {title: 'Total Payment', value: 10583.03},
      APR: {title: 'APR', value: 5.99},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
      
    },
    {
      LoanType:'loan2',
      loanAmount: {title: 'Loan Amount', value: 9000},
      numberOfMonths: {title: 'Number of Months', value: 14},
      monthlyPayment: {title: 'Monthly Payment', value: 370.96},
      totalInterest: {title: 'Total Interest', value: 483.03},
      totalPayment: {title: 'Total Payment', value: 10083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
    {
      LoanType:'loan3',
      loanAmount: {title: 'Loan Amount', value: 8000},
      numberOfMonths: {title: 'Number of Months', value: 24},
      monthlyPayment: {title: 'Monthly Payment', value: 340.96},
      totalInterest: {title: 'Total Interest', value: 403.03},
      totalPayment: {title: 'Total Payment', value: 95083.03},
      APR: {title: 'APR', value: 5.9},
      paymentMethod: {title: 'Payment Method', value: 'Start of Period'},
    },
  ]
  
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>Loan Applications</CardTitle>
          {/* <CardDescription>member applicants</CardDescription> */}
        </CardHeader>
          <div className="w-full h-auto p-4 flex flex-row">
            <Button >Add Button</Button>
          </div>
        <ScrollArea className='overflow-y-auto relative flex-1 px-5 py-0'>
          {/* <MainTable column={6} onClickItem={(row) => {alert(JSON.stringify(row))}} RightButton={MainButton} LeftButton={MainButton} RightButtonText={'Add'} LeftButtonText={'Delete'} onClickLeft={(row) => {alert(JSON.stringify(row))}} onClickRight={(row) => {alert(JSON.stringify(row))}}  /> */}
          {data.map((_, index) => {
            if (index % 2 === 0) { // Check for even indices
              const firstElement = data[index];
              const secondElement = data[index + 1] || null; // Handle odd length array

              return (
                <div key={index} className="grid-row h-[20rem] grid grid-cols-2 gap-5 pb-5 ">
                  <Card className="grid-item">{firstElement.LoanType}</Card>
                  {secondElement && <Card className="grid-item">{secondElement.LoanType}</Card>}
                </div>
              );
            }
            return null; // Don't render anything for odd indices
          })}
        </ScrollArea>  
      </Card>
    </div>
  )
}

export default LoanCreation