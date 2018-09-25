import React, { Component } from "react";
import _ from "lodash";
import { Search, Grid, Header } from "semantic-ui-react";
import { API_URL } from "../../utils/configVar";

export default class ProductSearch extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      results: [],
      searchInputValue: "",
      productSearchSource: {}
    };
  }

  getAllCategories = async () => {
    const response = await fetch(`${API_URL}our-products/categories`, {
      method: "GET"
    });

    if (response.ok) {
      return await response.json();
    }
  };

  getOneCategoryProducts = async category => {
    const response = await fetch(`${API_URL}our-products/${category}`, {
      method: "GET"
    });

    if (response.ok) {
      return await response.json();
    }
  };

  productSearchSource = async () => {
    const productSearchSource = {};
    const allCategories = await this.getAllCategories();
    allCategories.forEach(async category => {
      const categorisedProducts = await this.getOneCategoryProducts(category);
      const productSearchSourceResults = categorisedProducts.map(product => {
        return {
          title: product.details.description,
          description: product.details.code,
          image: product.details.imgSrc[0],
          _id: product._id,
          minQty: product.details.minQty,
          uom: product.details.uom
        };
      });
      productSearchSource[category] = {
        name: category,
        results: [...productSearchSourceResults]
      };
    });
    this.setState({
      productSearchSource
    });
  };

  componentDidMount() {
    this.resetComponent();
    this.productSearchSource();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], searchInputValue: "" });

  handleResultSelect = (e, { result }) => {
    this.props.handleSelect(result);
    this.setState({ searchInputValue: result.title });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, searchInputValue: value });

    setTimeout(() => {
      if (this.state.searchInputValue.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.searchInputValue), "i");
      const isMatch = result => re.test(result.title);

      const filteredResults = _.reduce(
        this.state.productSearchSource,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch);
          if (results.length) memo[name] = { name, results }; // eslint-disable-line no-param-reassign

          return memo;
        },
        {}
      );

      this.setState({
        isLoading: false,
        results: filteredResults
      });
    }, 300);
  };

  render() {
    const { isLoading, searchInputValue, results } = this.state;

    return (
      <Grid>
        <Grid.Column>
          <Header
            as="h3"
            style={{ position: "fixed", left: "3.8em", top: "5em" }}
          >
            Add a product to the RFQ:
          </Header>
          <Search
            category
            loading={isLoading}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            onResultSelect={this.handleResultSelect}
            results={results}
            value={searchInputValue}
            {...this.props}
            style={{ position: "fixed", top: "6.5em", left: "2.5em" }}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
