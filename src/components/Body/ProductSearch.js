import React, { Component } from "react";
import _ from "lodash";
import { Search, Grid } from "semantic-ui-react";
import { API_URL } from "../../utils/configVar";

export default class ProductSearch extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      results: [],
      value: "",
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
          image: product.details.imgSrc[0]
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
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
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
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            category
            loading={isLoading}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            onResultSelect={this.handleResultSelect}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
