// import { Component } from "react";
import './search-box.styles.css';
const SearchBox = (props) => (
    <input
        className= {`search-box ${props.className}`}
        type= "search"
        placeholder= {props.placeholder}
        // instead of rerendering the same function over and over again it can just call the method.
        onChange= {props.onChangeHandler}
    />
);



export default SearchBox;