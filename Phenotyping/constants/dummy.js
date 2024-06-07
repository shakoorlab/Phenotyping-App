import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "Climate Smart",
    creator: "Fischer Farm",
    price: 4.25,
    description:
      "Two commercial grain sorghum varieties that grow well in this region have been selected for a 5-year field trial at Fischer Farm. The two varieties will represent the highest and lower/average root biomass estimates based on data from our field experiments. We planted 56 hybrids from 6 of the major sorghum seed companies, including Bayer (Dekalb), Corteva (Pioneer), S&W, Richardson, Scott, and Advanta. In 1.68-acre blocks, two commercial grain varieties will be subjected to 8 combinations of field management practices (total ~13.4 acres).",
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
];

export { NFTData };
