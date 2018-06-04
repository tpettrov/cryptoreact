import dispatcher from '../dispatcher'


const MainActions = {

    types: {

        GET_PRICE: 'GET_PRICE',

    },

    getPrice() {

        dispatcher.dispatch({

            type: this.types.GET_PRICE,

        })
    },
};

export default MainActions;