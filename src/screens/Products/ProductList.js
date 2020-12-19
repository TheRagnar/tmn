import React from "react";
import { View, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { ProductCard } from "../../components";
import { connect } from "react-redux";
import style from "./style";

import { addTovar } from "../../store/actions/card";


class ProductList extends React.Component {
  constructor() {
    super();
  }

  onAddTovarCard = (prd, count) => {
    const { cards, addTovarAction  } = this.props;
    addTovarAction(prd, count, cards)
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity style={style.item} onPress={() => {
        navigation.navigate("ProductScreen", {
          id: item.id
        })
      }}>
        <ProductCard
          id={item.id}
          feature={item.feature}
          discount={item.discount}
          count_stock={item.count_stock}
          name={item.name}
          description={item.description}
          price={item.price}
          onAddTovarCard={(prd, count) => { this.onAddTovarCard(prd, count) }}
        />
      </TouchableOpacity>
    )
  }
  handleLoadeMore = () => {
    console.log("LoadMore")
  }
  renderLoader = (isFetching) => {
    return (
      isFetching ?
        <ActivityIndicator size="large" color="rgba(30, 66, 160, 0.9)" /> : null
    )
  }

  render() {
    const { data, isFetching } = this.props;
    return (
      <FlatList
        style={style.lists}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={this.handleLoadeMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderLoader(isFetching)}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTovarAction: (prd, count, products) => {
      dispatch(addTovar(prd, count, products))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    cards: state.card.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
