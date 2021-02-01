const currentExibitions = [
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw1",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw2",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw3",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw4",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw5",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw6",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw7",
  },
  {
    imgUrl: "http://placehold.it/1920x900",
    date: "12-22-2332",
    title: "lorem ipsum dolor",
    url: "qweqweqw8",
  },
];

const exibitionsOnView = [
  {
    imageUrl: "http://placehold.it/365x270",
    title: "Mutiny: Works by Géricault",
    time: "13 Oct 2018 - 15 Feb 2020",
    type: "EXHIBITION",
    path: "/exibition/1",
  },
  {
    imageUrl: "http://placehold.it/365x270",
    title: "Mutiny: Works by Géricault",
    time: "13 Oct 2018 - 15 Feb 2020",
    type: "EXHIBITION",
    path: "/exibition/2",
  },
  {
    imageUrl: "http://placehold.it/365x270",
    title: "Mutiny: Works by Géricault",
    time: "13 Oct 2018 - 15 Feb 2020",
    type: "EXHIBITION",
    path: "/exibition/1",
  },
  {
    imageUrl: "http://placehold.it/365x270",
    title: "Mutiny: Works by Géricault",
    time: "13 Oct 2018 - 15 Feb 2020",
    type: "EXHIBITION",
    path: "/exibition/1",
  },
  {
    imageUrl: "http://placehold.it/365x270",
    title: "Mutiny: Works by Géricault",
    time: "13 Oct 2018 - 15 Feb 2020",
    type: "EXHIBITION",
    path: "/exibition/1",
  },
];

const seedCollections = (cnt) => {
  const result = [];
  for (let i = 0; i < cnt; i++) {
    result.push({
      imageUrl: randomBetweenArray([
        "http://placehold.it/365x270/42526b",
        "http://placehold.it/365x500/838c3f",
        "http://placehold.it/365x320/8f3c47",
      ]),
      path: "collections/as3dasd" + i,
      title: "qweqwe" + i,
      author: "qweqweqweqw",
      period: randomBetweenArray(["past", "current", "upcoming"]),
      artist: randomBetweenArray(["1", "2", "3", "4", "5"]),
      period: randomBetweenArray(["past", "upcoming", "current"]),
    });
  }
  return result;
};
const randomBetweenArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
export const rootSeed = {
  currentExibit: currentExibitions,
  collections: seedCollections(50),
  exibitionsOnView: exibitionsOnView,
};
