class GiftController {
	constructor(giftService) {
	  this.giftService = giftService;
  }

	show() {
      const products = this.giftService.get();
      document.querySelector(".gift-list").innerHTML = products.reduce((acc, product) => acc+= this.buildProductHtml(product), '');
  }

	buildProductHtml(product) {
  	return `
        <div class="card gift-list__item">
        <a href="${product.link}" target="_blank">
            <img class="card-img-top" src="${product.image}" />
        </a>
            <div class="card-body">
                <a href="${product.link}" target="_blank">
                   <div class="card-title">${product.title}</div>
                </a>
                <div class="card-text gift-list__price">${product.price}</div>
            </div>
        </div>
    `;
  }
}

class GiftService {
	constructor() {}

	get() {
  	return [    	
      {
      	title: 'Duvet Cover',
        price: "£55",
        image: 'https://johnlewis.scene7.com/is/image/JohnLewis/000137499alt7?$rsp-pdp-main-1080$',
        link: 'https://www.johnlewis.com/john-lewis-200-thread-count-egyptian-cotton-bedding/pink/p292174?size=king-duvet-cover'
      },
      {
        title: 'Fitted Sheets',
      price: "£24",
      image: 'https://johnlewis.scene7.com/is/image/JohnLewis/000137499alt7?$rsp-pdp-main-1080$',
      link: 'https://www.johnlewis.com/john-lewis-200-thread-count-egyptian-cotton-standard-fitted-sheet/pink/p3112246?size=king'
    },
    {
        title: 'Pillow Cases',
      price: "£9.50 x2",
      image: 'https://johnlewis.scene7.com/is/image/JohnLewis/000137499alt7?$rsp-pdp-main-1080$',
      link: 'https://www.johnlewis.com/john-lewis-200-thread-count-egyptian-cotton-bedding/pink/p292174?size=standard-pillowcase'
    },
      {
        title: 'ProCook Professional X50 Bread Knife',
      price: "£22",
      image: 'https://www.procook.co.uk/images/library/stock/originals/4698_2.jpg',
      link: 'https://www.procook.co.uk/product/procook-professional-x50-bread-knife-23cm-9'
    },
    {
        title: 'Rice Cooker',
      price: "£149",
      image: 'https://www.muji.eu/img/prd/1260/4549738973096_1260.jpg',
      link: 'https://www.muji.eu/pages/online.asp?lan=uk&ShopSel=y&scrn=1920&wndw=1920&sec=8&sub=62&pid=9188'
    },
    {
      title: 'John Lewis Water Hyacinth Laundry Hamper',
      price: "£55",
      image: 'https://johnlewis.scene7.com/is/image/JohnLewis/233646713?$rsp-pdp-main-1080$',
      link: 'https://www.johnlewis.com/john-lewis-water-hyacinth-laundry-hamper/p1467233'
    },
    
    {
        title: 'Joseph Joseph Bathroom Easy-Store Toothbrush Caddy, White/Blue',
        price: "£10",
        image: 'https://images-na.ssl-images-amazon.com/images/I/61uyC5uNPwL._SL1500_.jpg',
        link: 'https://www.amazon.co.uk/Joseph-Bathroom-Easy-Store-Toothbrush-Caddy/dp/B0732YNC97/ref=sr_1_4?ie=UTF8&qid=1533022563&sr=8-4&keywords=joseph%2Bjoseph&th=1'
    },

    {
        title: 'Premier Housewares 2-Tier Spice Rack with 16 Schwartz Spices',
        price: "£20.99",
        image: 'https://images-na.ssl-images-amazon.com/images/I/914GJhuTpbL._SL1500_.jpg',
        link: 'https://www.amazon.co.uk/Premier-Housewares-2-Tier-Schwartz-Spices/dp/B004N81JIW/ref=sr_1_9?s=kitchen&ie=UTF8&qid=1533020629&sr=1-9&refinements=p_n_feature_two_browse-bin%3A3327592031'
    },
    {
        title: 'ProCook Professional Steel Frying Pan',
        price: "£44",
        image: 'https://www.procook.co.uk/images/library/stock/originals/6326_1.jpg',
        link: 'https://www.procook.co.uk/product/newprocook-professional-steel-frying-pan-28cm'
    },
    {
        title: 'ProCook Professional Steel Shallow Casserole & Lid',
        price: "£44",
        image: 'https://www.procook.co.uk/images/library/stock/originals/6330_1.jpg',
        link: 'https://www.procook.co.uk/product/newprocook-professional-steel-shallow-casserole-lid-24cm-36l'
    },
    {
        title: 'Eve - White premium memory foam pillow',
        price: "£59",
        image: 'https://bestmattressuk.com/wp-content/uploads/2017/05/eve-pillow-featured-759x500.jpeg',
        link: 'https://www.debenhams.com/webapp/wcs/stores/servlet/prod_10701_10001_64575+64575EVEPF_-1'
    }
    ];
  }
}

class App {
	constructor() {
  	this.service = new GiftService();
	this.controller = new GiftController(this.service);
    this.controller.show();
  }
}

new App();