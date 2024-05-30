import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Climate Smart",
    creator: "Fischer Farm",
    price: 4.25,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  // {
  //   id: "NFT-02",
  //   name: "HPI Diversity Panel",
  //   creator: "Fischer Farm",
  //   price: 7.25,
  //   description:
  //     "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
  //   image: assets.nft02,
  //   bids: [
  //     {
  //       id: "BID-21",
  //       name: "Jessica Tan",
  //       price: 7.05,
  //       image: assets.person04,
  //       date: "December 12, 2019 at 12:10 PM",
  //     },
  //   ],
  // },
  // {
  //   id: "NFT-03",
  //   name: "Climate Smart",
  //   creator: "Fischer Farm",
  //   price: 95.25,
  //   description:
  //     "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
  //   image: assets.nft03,
  //   bids: [
  //     {
  //       id: "BID-31",
  //       name: "Jessica Tan",
  //       price: 95.25,
  //       image: assets.person02,
  //       date: "December 12, 2019 at 12:10 PM",
  //     },
  //     {
  //       id: "BID-32",
  //       name: "Jennifer Sia",
  //       price: 95.5,
  //       image: assets.person03,
  //       date: "December 27, 2019 at 1:50 PM",
  //     },
  //   ],
  // },
];

export { NFTData };
