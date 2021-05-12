import React from "react";

interface Props {
  onSearch: (text: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTxt, setSearchTxt] = React.useState("");

  return (
    <div className="search-field">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search text"
        onChange={(e) => {
          setSearchTxt(e.target.value);
          onSearch(searchTxt);
        }}
      ></input>
      <button onClick={() => onSearch(searchTxt)}>Search</button>
    </div>
  );
};
// onClick={()=>onSearch(searchTxt)}

// class _Search extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       search: "",
//     };
//   }
//   handleValueChange(e: any) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <div className="search-field">
//         <input
//           type="text"
//           id="search"
//           name="search"
//           placeholder="Search text"
//           onChange={this.handleValueChange.bind(this)}
//         ></input>
//         <button >Search</button>
//       </div>
//     );
//   }
// }
export default Search;
