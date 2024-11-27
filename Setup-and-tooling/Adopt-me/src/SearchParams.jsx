import { useState } from "react";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = ()=>{
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const Breeds = [];
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
                <label htmlFor="breeds">
                    Breeds
                    <select disabled={Breeds.length===0} id="breeds" onChange={e => setBreed(e.target.value)}>
                        <option/>
                        {Breeds.map((breed)=>(
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;