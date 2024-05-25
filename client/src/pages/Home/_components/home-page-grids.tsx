const HomePageGrids = () => {
    return (  
        <div className="grid grid-rows-8 grid-cols-8 gap-4 w-full h-full">
            <div className="col-start-1 col-end-9 row-start-1 row-end-3 w-full h-full overflow-hidden">
                <h1 className="">dsadsa</h1>
            </div>
            <div className="col-start-1 col-end-3 row-start-3 row-end-7 overflow-hidden"></div>
            <div className="col-start-1 col-end-9 row-start-7 row-end-9"></div>
            <div className="col-start-3 col-end-9 row-start-3 row-end-5"></div>
            <div className="col-start-3 col-end-9 row-start-5 row-end-6"></div>
            <div className="col-start-3 col-end-9 row-start-6 row-end-7"></div>
        </div>
    );
}
 
export default HomePageGrids;