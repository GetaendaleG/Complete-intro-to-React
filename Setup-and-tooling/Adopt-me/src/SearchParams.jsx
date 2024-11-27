import { useState } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = ()=>{
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="Location" onChange={(e)=> setLocation(e.target.value)} value={location} />
                </label>
                <button>Submit</button>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" onChange={e => setAnimal(e.target.value)}>
                        <option/>
                        {Animals.map((animal)=>(
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;