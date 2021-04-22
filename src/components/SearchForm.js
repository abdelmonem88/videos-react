import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
 state = { searchTerm: '' };

 onInputChanged = (e) => this.setState({ searchTerm: e.target.value });

 onFormSubmit = (e) => {
  e.preventDefault();

  this.props.onSearchSubmit(this.state.searchTerm);
 };

 render() {
  return (
   <form className='search-form' onSubmit={this.onFormSubmit}>
    <label htmlFor='searchInput'>Search for your favorite videos!</label>
    <div className='input-control'>
     <input
      type='text'
      id='searchInput'
      className='search-input'
      value={this.state.searchTerm}
      onChange={this.onInputChanged}
     />
    </div>
   </form>
  );
 }
}

export default SearchForm;
