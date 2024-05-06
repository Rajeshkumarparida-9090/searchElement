import React, { createContext, useState } from "react";

const DataContext = createContext();
// export const DAtaProvider = ({ children }) => {
//    const [data, setData] = useState([]);

    

//     return (
//         <DataContext.Provider value={{data, setData}}>
//             {children}
//         </DataContext.Provider>
//     )
// }

export default DataContext;