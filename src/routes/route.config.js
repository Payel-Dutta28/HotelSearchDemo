import HomeContainer from "../modules/Home/HomeContainer";
import SearchResultContainer from "../modules/SearchResult/SearchResultContainer";
// import CreateOfferContainer from "../modules/CreateOffer/CreateOfferContainer";
import EditOfferContainer from "../modules/EditOffer/EditOfferContainer";
import HotelSearchResultContainer from "../modules/HotelResults/HotelResultContainer";

const routes = [
  {
    path: "/",
    component: HomeContainer,
    breadcrumb: "HOME",
    routes: [
      {
        path: "/search",
        exact: true,
        component: SearchResultContainer
      },
      {
        path: "/hotelsearchresult",
        exact: true,
        component: HotelSearchResultContainer
      },
      {
        path: "/",
        exact: true,
        component: SearchResultContainer
      },
      // {
      //   path: "/create",
      //   exact: true,
      //   component: CreateOfferContainer
      // },
      {
        path: "/edit",
        exact: true,
        component: EditOfferContainer
      }
    ]
  }
  // {
  //   path:'/*',
  //   component: PageNotFoundContainer
  // }
];

export default routes;
