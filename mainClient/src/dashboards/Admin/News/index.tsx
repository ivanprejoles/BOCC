import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useModal } from '@/hooks/use-modal-store'
import { FaRegEdit } from "react-icons/fa";


const News = () => {
  const {onOpen} = useModal()

  const onAdd = () => {
    onOpen('AddNews')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEdit = (data: any) => {
    onOpen('EditNews', data)
  }

  const data = [
    {
      id: 1,
      title: 'News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    {
      id:2,
      title: 'News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    {
      id:3,
      title: 'News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    {
      id:4,
      title: 'News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    {
      id:5,
      title: 'News 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    {
      id:6,
      title: 'News 1dsadsa dsad asdas dasd asd asd asdasdsa dsadsad asdwad wadwadwa dwadawdwa dwa dwadaw dwadwa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2FAdd%20a%20heading%20(1).png?alt=media&token=1c507313-9115-4f73-accf-7cf68ba0f367',
      datePost: 'Saturday, May 25, 2024',
      dateUpdated: 'Saturday, May 25, 2024'
    },
    
  ]
  
  return (
    <div className='h-full grid grid-cols-1 grid-rows-1'>
      <Card className='row-span-1 flex flex-col'>
        <CardHeader>
          <CardTitle>News</CardTitle>
        </CardHeader>
          <div className="w-full h-auto p-4 flex flex-row">
            <Button onClick={onAdd}>Add News</Button>
          </div>
          <Separator />
        <ScrollArea className='overflow-y-auto relative flex-1 px-5 pt-2'>
          {/* <MainTable column={6} onClickItem={(row) => {alert(JSON.stringify(row))}} RightButton={MainButton} LeftButton={MainButton} RightButtonText={'Add'} LeftButtonText={'Delete'} onClickLeft={(row) => {alert(JSON.stringify(row))}} onClickRight={(row) => {alert(JSON.stringify(row))}}  /> */}
          {data.map((_, index) => {
            if (index % 2 === 0) { // Check for even indices
              const firstElement = data[index];
              const secondElement = data[index + 1] || null; // Handle odd length array

              return (
                <div key={index} className="grid-row h-[20rem] grid grid-cols-2 gap-5 pb-5 ">
                  <Card className="grid-item w-full h-full group transition-all relative hover:border-gray-400 hover:shadow-lg grid grid-rows-4 grid-cols-1 overflow-hidden">
                    <div className="row-span-2">
                      <CardHeader className='h-full'>
                          <CardTitle className='line-clamp-2 text-xl font-serif'>{firstElement.title}</CardTitle>
                          <Separator />
                          <CardDescription className=''>{firstElement.datePost} | {'Updated - '}{firstElement.dateUpdated}</CardDescription>
                          {/* <CardDescription className=''> <b>{'updated At : '}</b>{secondElement.dateUpdated}</CardDescription> */}
                      </CardHeader>
                    </div>
                    <div className="row-span-2 grid grid-cols-3">
                      <div className="w-full h-full overflow-hidden relative" >
                        <img src={firstElement.image} className='absolute w-full object-cover top-0 left-0'/>
                      </div>
                      <div className='col-span-2 w-full h-full p-3'>
                        <p className='w-full text-md line-clamp-1 relative h-full overflow-hidden'>{secondElement.description}</p>
                      </div>
                    </div>
                    <button onClick={() => onEdit(firstElement)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5">
                      <FaRegEdit className='w-full h-full' />
                    </button>  
                  </Card>
                  {secondElement && 
                    <Card className="grid-item w-full h-full group transition-all relative hover:border-gray-400 hover:shadow-lg grid grid-rows-4 grid-cols-1 overflow-hidden">
                    <div className="row-span-2">
                      <CardHeader className='h-full'>
                          <CardTitle className='line-clamp-2 text-xl font-serif'>{secondElement.title}</CardTitle>
                          <Separator />
                          <CardDescription className=''>{secondElement.datePost} | {'Updated - '}{secondElement.dateUpdated}</CardDescription>
                      </CardHeader>
                    </div>
                    <div className="row-span-2 grid grid-cols-3">
                      <div className="w-full h-full overflow-hidden relative" >
                        <img src={secondElement.image} className='absolute w-full object-cover top-0 left-0'/>
                      </div>
                      <div className='col-span-2 w-full h-full p-3'>
                        <p className='w-full text-md line-clamp-1 relative h-full overflow-hidden'>{secondElement.description}</p>
                      </div>
                    </div>
                    <button onClick={() => onEdit(secondElement)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5">
                      <FaRegEdit className='w-full h-full' />
                    </button>  
                  </Card>
                  }
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

export default News