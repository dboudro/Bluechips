var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      balprice: 0,
      balcap: 0,
      balvol: 0,
      alldata: '',
      body: ''
    },
    methods: {

   getBalPrice: function() {
    let bal = '';
    // superagent is exposed as `window.superagent`
    // if you wish to use "request" instead please
    // uncomment the following line of code:
    // `window.request = superagent;`
    superagent
      .get('https://api.coingecko.com/api/v3/simple/price?ids=balancer&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true')
      .send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
      .set('X-API-Key', 'foobar')
      .set('accept', 'json')
      .end(function (err, res) {
       console.log(res.body.balancer.usd);
       bal = res.body.balancer.usd;

      });
    },
    },
    created() {
        this.$http.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Clend%2Cyearn-finance%2Cbalancer%2Cpolkadot%2Csynthetix-network-token%2Cnexus-mutual%2Cloopring%2Cbzx-protocol%2C&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true').then(function (data) {
            // this.bookmarks=data.body;
            return data;
        }).then(function (data) {
            this.alldata = data;
            this.body = data.body;
                
        })
        },
        computed() {
            p
        }
  })



