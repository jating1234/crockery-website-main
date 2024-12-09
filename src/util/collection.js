const dinnerwareItems = [
    {
      id:1,
      name: "Elegant Dinner Set",
      image: "https://www.nilkamalfurniture.com/cdn/shop/products/YorkSolidWood6SeaterDiningTable-WithBench_2000x.jpg?v=1672977511",
      sales_price:"₹65,900",
      old_prices:"MRP ₹ 115,500"
    },
    {
      id:2,
      name: "Stylish Cup",
      image: "https://th.bing.com/th/id/OIP.sUgQbAxj3-G6qRIwI_GjYgHaHX?rs=1&pid=ImgDetMain",
      sales_price:"₹50,900",
      old_prices:"MRP ₹ 15,500"
    },
    {
      id:3,
      name: "Crystal Glasses (Set of 6)",
      image: "https://th.bing.com/th/id/OIP.anC0Ay2-lvbjN31acw-A9QHaJ4?rs=1&pid=ImgDetMain",
      sales_price:"₹230,900",
      old_prices:"MRP ₹ 150,500"
    },
    {
      id:4,
      name: "Classic Dinner Set",
      image: "https://i5.walmartimages.com/asr/ecdffdc9-8659-4853-aaf7-1fdcb3d3a3d0_2.6336756450f332bb49855fa8cf38595a.jpeg",
      sales_price:"₹800,900",
      old_prices:"MRP ₹ 959,500"
    },
    {
      id:5,
      name: "Modern Cup",
      image: "https://i.pinimg.com/originals/b7/21/ef/b721ef5aa4c53fd0155b008d53231686.jpg",
      sales_price:"₹500,900",
      old_prices:"MRP ₹ 359,500"
    },
    {
      id:6,
      name: "Vintage Glasses (Set of 4)",
      image: "https://i.etsystatic.com/9242994/r/il/ac6231/1947679988/il_fullxfull.1947679988_1nc1.jpg",
      sales_price:"₹400,900",
      old_prices:"MRP ₹ 359,500"
    },
    {
      id:7,
      name: "Premium Dinner Set",
      image: "https://www.vivaterra.com/medias/sys_master/images/images/h42/h7f/11236673028126/V4650-VTHO19-AF9419.jpg",
      sales_price:"₹600,900",
      old_prices:"MRP ₹ 509,500"
    },
    {
      id:8,
      name: "Sleek Cup",
      image: "https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/7/07-11-2019_rivers_wallmugsleek_doublewalledreusablecoffeecup_beige350ml_rvrs-slbe-bg_tc_3.jpg",
      sales_price:"₹300,900",
      old_prices:"MRP ₹ 359,500"
    },
    {
      id:9,
      name: "Contemporary Glasses (Set of 8)",
      image: "https://www.kitchenstuffplus.com/media/catalog/product/9/0/90557_KSP_Eclipse__Etched__Stemless_Wine_Glass___Set_of_8__Clear_1.jpg?width=1000&height=1000&canvas=1000:1000&optimize=high&fit=bounds",
      sales_price:"₹200,900",
      old_prices:"MRP ₹ 300,500"
    },
    {
      id:10,
      name: "Minimalist Dinner Set",
      image: "https://th.bing.com/th/id/OIP.MfMJo2aFvIE1Tzd-ZwIPhAHaHa?rs=1&pid=ImgDetMain",
      sales_price:"₹800,900",
      old_prices:"MRP ₹ 400,500"
    },
    {
      id:11,
      name: "Chic Cup",
      image: "https://th.bing.com/th/id/OIP.RqPGW3te_RumaZl1Jq8GewHaFj?rs=1&pid=ImgDetMain",
      sales_price:"₹800,900",
      old_prices:"MRP ₹ 400,500"
    },
    {
      id:12,
      name: "Luxury Glasses (Set of 12)",
      image: "https://th.bing.com/th/id/R.3893bba7451cea59d062562580a32af8?rik=BApOjItQHd%2bBSw&riu=http%3a%2f%2fimg0.etsystatic.com%2f000%2f0%2f5500795%2fil_fullxfull.277513632.jpg&ehk=oDFfN30e7J2YTy7aPbFxvrQjlNdyeU4wDnGnbBuaLsQ%3d&risl=&pid=ImgRaw&r=0",
      sales_price:"₹750,900",
      old_prices:"MRP ₹ 500,500"
    },
    {
      id:13,
      name: "Rustic Dinner Set",
      image: "https://th.bing.com/th/id/OIP.y7-mV0JbWkXiAmWIQ0vGRAHaHa?rs=1&pid=ImgDetMain",
      sales_price:"₹500,500",
      old_prices:"MRP ₹ 400,500"
    },
    {
      id:14,
      name: "Patterned Cup",
      image: "https://madeheart.com/media/productphoto/344/70461246/1_09_002.jpg",
      sales_price:"₹590,500",
      old_prices:"MRP ₹ 200,500"
    },
    {
      id:15,
      name: "Antique Glasses (Set of 6)",
      image: "https://images.antiquesatlas.com/dealer-stock-images/penroseantiques/Coalport_Batwing_Pattern_Cup_a_as470a301z-1.jpg",
      sales_price:"₹400,100",
      old_prices:"MRP ₹ 200,500"
    },
    {
      id:16,
      name: "Festive Dinner Set",
      image: "https://i.pinimg.com/originals/03/b5/22/03b5224a89f632287cc9d6d3572d58a6.jpg",
      sales_price:"₹500,100",
      old_prices:"MRP ₹ 300,500"
    },
    {
      id:17,
      name: "Colorful Cup",
      image: "https://thumbs.dreamstime.com/z/lot-coffee-beans-some-colorful-espresso-cups-table-191966465.jpg",
      sales_price:"₹540,100",
      old_prices:"MRP ₹ 400,500"
    },
    {
      id:18,
      name: "Artistic Glasses (Set of 8)",
      image: "https://th.bing.com/th/id/OIP.ybnpuoBg4N5HU6kGOFDxewAAAA?rs=1&pid=ImgDetMain",
      sales_price:"₹400,100",
      old_prices:"MRP ₹ 300,500"
    },
    {
      id:19,
      name: "Royal Dinner Set",
      image: "https://i0.wp.com/www.edensdecor.com/wp-content/uploads/2021/12/Royal-luxury-Set-001.jpeg?fit=2048%2C1762&ssl=1",
      sales_price:"₹350,100",
      old_prices:"MRP ₹ 300,500"
    },
    {
      id:20,
      name: "Mug",
      image: "https://d3d71ba2asa5oz.cloudfront.net/72001144/images/sab-198051%20(2).jpg",
      sales_price:"₹650,100",
      old_prices:"MRP ₹ 300,500"
    },
    {
      id:21,
      name: "Whiskey Glasses (Set of 4)",
      image: "https://th.bing.com/th/id/OIP.PznpsZGWVx68V15RbiitoAHaHa?rs=1&pid=ImgDetMain",
      sales_price:"₹600,100",
      old_prices:"MRP ₹ 300,500"
    }
  ];
  
  export default dinnerwareItems;
  