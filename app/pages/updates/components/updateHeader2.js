function Header2(){
    return(
        <div className="p-3 flex-col justify-center">
            <div className="space-y-16">
            <div>
                 <div className="lg:text-display-lg md:text-display-lg sm:text-display-lg xsm:text-display-lg text-cyan font-bold">  Article & Blog </div>
                 <div className="lg:text-display-md font-bold text-darkblue">Stay curious to discover the ideas with expertise from writers on any topic.</div>
            </div>
            <div className="space-y-5">
                <p className="lg:text-title-md font-bold">Looking for something specific?</p>
                <input placeholder="Search title,topic,.." className="p-2 bg-gray rounded-full w-full"></input>
            </div>
            </div>
        </div>
    )
}
export default Header2;