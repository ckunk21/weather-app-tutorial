"use client";

import { AiOutlineSearch } from "react-icons/ai";

interface InputProps {
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({handleSearch, setLocation} : InputProps) => {
    return (
        <form className="flex items-center md:w-2/4 w-full order-2 md:order-1">
            <input 
                type="text"
                placeholder="Search City"
                className="w-full bg-transparent border-b-2
                placeholder-white outline-none text-white"
                onKeyDown={handleSearch}
                onChange={(e) => setLocation(e.target.value)}
            />
            <div className="ml-[-25px] text-white cursor-pointer">
                <AiOutlineSearch />
            </div>
        </form>
    )
};
export default Input;