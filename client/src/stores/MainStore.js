import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'
import MainActions from '../actions/MainActions'
import PriceData from '../data/PriceData'

class MainStore extends EventEmitter {

    getPrice() {
        PriceData.get().then(data => this.emit(this.eventTypes.PRICE_FETCHED, data))   //emits change (price fetched) and sends the data with the emit
    }

    handleAction(action) {

        switch (action.type) {

            case MainActions.types.GET_PRICE: {

                this.getPrice();
                break
            }
            default:
                break
        }
    }
}

let mainStore = new MainStore();
mainStore.eventTypes = {

    PRICE_FETCHED: 'price_fetched',

};

dispatcher.register(mainStore.handleAction.bind(mainStore));
export default mainStore;