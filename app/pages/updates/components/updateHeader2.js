function Header2(){
    return(
        <div id="Header2" className="p-3 flex-col justify-center">
            <div className="space-y-16">
            <div>
                 <div className="lg:text-display-lg md:text-display-lg sm:text-display-lg xsm:text-display-lg text-cyan font-bold">  Article & Blog </div>
                 <div className="lg:text-display-md font-bold text-darkblue">Stay curious to discover the ideas with expertise from writers on any topic.</div>
            </div>
            <div className="space-y-5">
                <p className="lg:text-title-md font-bold">Looking for something specific?</p>
                <div className="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                </div>
                   <input placeholder=" Search title,topic,.." className="pl-8 p-2 bg-gray rounded-full w-full"></input>
                </div>
                </div>
             

            </div>
        </div>
    )
}
export default Header2;