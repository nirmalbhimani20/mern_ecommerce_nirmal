import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import Button from '../../components/Common/Button';
import { BarsIcon } from '../../components/Common/Icon';
import CartIcon from '../../components/Common/CartIcon';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

import actions from '../../actions';

export class Navigation extends Component {
  componentDidMount() {
    this.props.fetchStoreCategories();
  }

  toggleMenu() {
    this.props.fetchStoreCategories();
    this.props.toggleMenu();
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const BoldName = (suggestion, query) => {
      const matches = AutosuggestHighlightMatch(suggestion.name, query);
      const parts = AutosuggestHighlightParse(suggestion.name, matches);

      return (
        <div>
          {parts.map((part, index) => {
            const className = part.highlight
              ? 'react-autosuggest__suggestion-match'
              : null;
            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </div>
      );
    };

    return (
      <Link to={`/product/${suggestion.slug}`}>
        <div className='d-flex'>
          <img
            className='item-image'
            src={`${
              suggestion.imageUrl
                ? suggestion.imageUrl
                : '/images/placeholder-image.png'
            }`}
          />
          <div>
            <Container>
              <Row>
                <Col>
                  <span className='name'>{BoldName(suggestion, query)}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className='price'>${suggestion.price}</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    const {
      authenticated,
      categories,
      searchValue,
      suggestions,
      onSearch,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested,
      toggleCart,
      toggleMenu,
      isMenuOpen,
      isCartOpen,
      cartItems
    } = this.props;

    const inputProps = {
      placeholder: 'Search Products',
      value: searchValue,
      onChange: (_, { newValue }) => {
        onSearch(newValue);
      }
    };
    return (
      <header className='header fixed-mobile-header'>
        <div className='header-info'>
          <Container>
            <Row>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-truck' />
                <span>Free Shipping</span>
              </Col>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-credit-card' />
                <span>Payment Methods</span>
              </Col>
              <Col md='4' className='text-center d-none d-md-block'>
                <i className='fa fa-phone' />
                <span>Call us 951-999-9999</span>
              </Col>
              <Col xs='12' className='text-center d-block d-md-none'>
                <i className='fa fa-phone' />
                <span> Need advice? Call us 951-999-9999</span>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className='align-items-center top-header'>
            <Col
              xs={{ size: 12, order: 1 }}
              sm={{ size: 12, order: 1 }}
              md={{ size: 3, order: 1 }}
              lg={{ size: 3, order: 1 }}
              className='pr-0'
            >
              <div className='brand'>
                {categories && categories.length > 0 && (
                  <Button
                    borderless
                    variant='empty'
                    className='d-none d-md-block'
                    ariaLabel='open the menu'
                    icon={<BarsIcon />}
                    onClick={() => this.toggleMenu()}
                  />
                )}
                <Link to='/'>
                  <h1 className='logo'>MERN Store</h1>
                </Link>
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 4 }}
              sm={{ size: 12, order: 4 }}
              md={{ size: 12, order: 4 }}
              lg={{ size: 5, order: 2 }}
              className='pt-2 pt-lg-0'
            >
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(_, item) => {
                  history.push(`/product/${item.suggestion.slug}`);
                }}
              />
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 4, order: 1 }}
              lg={{ size: 5, order: 3 }}
              className='desktop-hidden'
            >
              <div className='header-links'>
                <Button
                  borderless
                  variant='empty'
                  ariaLabel='open the menu'
                  icon={<BarsIcon />}
                  onClick={() => this.toggleMenu()}
                />
                <CartIcon cartItems={cartItems} onClick={toggleCart} />
              </div>
            </Col>
            <Col
              xs={{ size: 12, order: 2 }}
              sm={{ size: 12, order: 2 }}
              md={{ size: 9, order: 1 }}
              lg={{ size: 4, order: 3 }}
            >
              <Navbar color='light' light expand='md' className='mt-1 mt-md-0'>
                <CartIcon
                  className='d-none d-md-block'
                  cartItems={cartItems}
                  onClick={toggleCart}
                />
                <Nav></Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.category.storeCategories,
    authenticated: state.authentication.authenticated,
    suggestions: state.navigation.searchSuggestions,
    searchValue: state.navigation.searchValue,
    cartItems: state.cart.cartItems,
    isMenuOpen: state.navigation.isMenuOpen,
    isCartOpen: state.navigation.isCartOpen
  };
};
export default connect(mapStateToProps, actions)(withRouter(Navigation));
