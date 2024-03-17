import { useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./table";


//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [query, setQuery] = useState("");
  const keys = ['first_name', 'last_name', 'email'];
  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className='app'>
      <input
        className='search'
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      <ul className='list'>
        {<Table data={search(Users)} />}
      </ul>
    </div>
  );
};

export default App;
