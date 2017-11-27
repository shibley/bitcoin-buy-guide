export default function() {
  this.namespace = '/api';

let sites = [
      {
        type: 'sites',
        id: 'localbitcoins',
        attributes: {
          title: 'LocalBitcoins',
          description: 'At LocalBitcoins.com, people from different countries can exchange their local currency to bitcoins. The site allows users to post advertisements where they state exchange rate and payment methods for buying or selling bitcoins. You reply to these advertisements and agree to meet the person to buy bitcoins with cash, or trade directly with online banking. Bitcoins are placed in LocalBitcoins.com web wallet from where you can pay your bitcoin purchases directly.',
          url: 'http://localbitcoins.com',
          city: 'San Francisco',
          image: '/assets/images/localbitcoins.png'
        }
      }, {
        type: 'sites',
        id: 'gidera',
        attributes: {
          title: 'Glidera',
          description: 'Clients enjoy Glidera’s service because it enables secure one-click buying and selling of bitcoin straight from their favorite wallet via convenient ACH bank transfers. Clients have added peace of mind knowing that Glidera never takes custody of their funds during the process. Glidera currently supports around 10 of the top wallets including Airbitz, Copay, Mycelium and Multibit, with many more in the development pipeline.',
          url: 'https://www.glidera.io',
          city: 'Portland',
          image: '/assets/images/glidera.png'
        }
      }, {
        type: 'sites',
        id: 'coingate',
        attributes: {
          title: 'Coingate',
          description: 'CoinGate acts only as a referrer to card processor Simplex for debit / credit card orders. Only orders made via https://coingate.com are shown on your CoinGate account. Buying bitcoins on https://buy.coingate.com is done via Simplex and not via your CoinGate account.',
          url: 'https://coingate.com',
          city: 'Seattle',
          image: '/assets/images/coingate.png'
        }
      }, {
        type: 'sites',
        id: 'cexio',
        attributes: {
          title: 'Cex.io',
          description: 'CEX.IO offers cross-platform trading via website, mobile app, WebSocket and REST API, providing access to high liquidity orderbook for top currency pairs on the market. Instant Bitcoin buying and selling is available via simplified bundle interface.',
          url: 'https://cex.io/buysell',
          city: 'Seattle',
          image: '/assets/images/cexio.png'
        }
      }, {
        type: 'sites',
        id: 'coinmama',
        attributes: {
          title: 'Coinmama',
          description: 'Virtual currency is becoming more popular by the minute. It’s starting to seem that everyone wants in, yet it isn’t always so easy to get a hold of.',
          url: 'http://coinmama.com',
          city: 'Seattle',
          image: '/assets/images/coinmama.png'
        }
      }, {
        type: 'sites',
        id: 'coinbase',
        attributes: {
          title: 'Coinbase',
          description: 'Coinbase is the world’s most popular way to buy and sell bitcoin, ethereum, and litecoin.',
          url: 'http://coinbase.com',
          city: 'Seattle',
          image: '/assets/images/coinbase.png'
        }
      }];


  this.get('/sites', function(db, request) {
    // if (request.queryParams.city !== undefined) {
    //   let filteredRentals = rentals.filter(function (i) {
    //     return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
    //   });
    //   return { data: filteredRentals };
    // } else {
      return { data: sites  };
    //}
  });

  // Find and return the provided site from our site list above
  this.get('/sites/:id', function (db, request) {
    return { data: sites.find((site) => request.params.id === site.id) };
  });
}
