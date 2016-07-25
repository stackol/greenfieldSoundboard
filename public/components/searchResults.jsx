class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: props.getSearchResults()
    };
  }

  render() {
    return (
      <div className="">
        { this.state.searchResults.map((searchItem, idx) =>
          <SearchResultItem searchItem={ searchItem } key={ idx } />
        )}
      </div>
    )
  }
}

window.SearchResults = SearchResults;
