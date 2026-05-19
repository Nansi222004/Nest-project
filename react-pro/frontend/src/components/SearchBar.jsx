import {useState, useEffect} from "react";
import {swiperData}  from "../data/swiperData";
import {useNavigate} from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    
    const navigate = useNavigate();

    const handleSearch = (el) => {
        const data = el.target.value;
        setQuery(data);

        if(data === ""){
            setSuggestion([]);
            return;
        }

        const filtered = swiperData.filter((item) =>
            item.title.toLowerCase().includes(data.toLowerCase())
        );

        setSuggestion(filtered);
    }

    const handleClick = (item) => {
        setQuery("");
        setSuggestion([]);
        
        navigate(`/show/local/${item.id}`);
    }

return( <>

<form className=" relative searchBar hidden min-[992px]:flex  flex-1 items-center px-4">
<span className="text-sm font-bold">All Categories &nbsp; |</span>

<input
className="border-0 outline-none flex-1 ml-3 text-sm"
onChange={handleSearch}
value={query}
placeholder="Search for items..."
type="text"
/>

<i className="ri-search-line ml-auto text-xl opacity-50 "></i>
{suggestion.length > 0 &&
(
<div className="absolute w-full bg-white left-0 px-6 py-2 z-10 top-12  border-2 rounded-b-lg border-grey">
       {suggestion.map((item) => (
        <div
        className="flex items-center cursor-pointer"
        onClick={() => handleClick(item)}
        >
            <img className="h-10" src={item.images}/>
            <p>{item.title}</p>
        </div>
       ))}
    </div>
        
)}

</form>

{/* {suggestion.length > 0 &&  */}
   
   

</>
)
}