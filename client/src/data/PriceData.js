const baseUrl = 'https://poloniex.com/public?command=returnTicker';


const handleJsonResponse = res => res.json();

class PriceData {

    static get() {

        return window.fetch(`${baseUrl}`).then(handleJsonResponse)

    }

}

export default PriceData