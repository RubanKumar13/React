import { useState } from "react";

export function useFilter(Names){
    const [search,setsearch] = useState("");

    const filter = Names.filter((names)=>
        names.toLowerCase().includes(search.toLowerCase())
    );

    return {
        filter,
        search,
        setsearch
    }
}
