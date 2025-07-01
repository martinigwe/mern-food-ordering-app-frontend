import landing from "../assets/landing.png"
import appdownload from "../assets/appDownload.png"
import SearchBar, { type SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = ()=> {
    const navigate =  useNavigate()

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`
        })
    }
    return (
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-13">
                <h1 className="text-5xl font-bold tracking-tight text-black">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is just a click away</span>
                <SearchBar placeholder="Search by city or town" onSubmit={handleSearchSubmit}/>
            </div>
            <div className="grid md-grid-cols-2 gap-4">
                <img src={landing}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeway even faster!
                    </span>
                    <span>
                        Download LocalBukka App for faster ordering and personalised recommendations
                    </span>
                    <img src={appdownload}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;