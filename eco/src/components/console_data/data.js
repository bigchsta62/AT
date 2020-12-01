import ProductList from "../productList";
import FormCard from "../FormCard";
import Report from "../Report"
import ProfilePage from '../../pages/ProfilePage'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  // faCoffee,
  faUserCircle,
  faListAlt,
  faEdit,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";

export const AdminSideBar = [
  // {
  //   name: "Admin Console",
  //   id: "",
  //   resources: "<ProductList/>",
  //    icon: faCoffee,
  // },
  {
    name: "Manage Profile",
    order: "s1",
    id: "1",
    main: () => <ProfilePage />,
    icon: faUserCircle,
  },
  {
    name: "View Products",
    order: "s2",
    id: "ProductList",
    main: () => <ProductList />,
    icon: faListAlt,
  },
  {
    name: "Add Product",
    order: "s3",
    id: "FormCard",
    main: () => <FormCard />,
    icon: faEdit,
  },
  // {
  //   name: "Remove Product",
  //    order: "",
  //    id: "",
  //   path: "/ADMIN",component:""
  //    icon: faCoffee,
  // },
  {
    name: "Reports",
    order: "s4",
    id: "4",
    main: () => <Report />,
    icon: faChartBar,
  },
];
export const UserSideBar = [
  {
    name: "User Console",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    name: "Manage Profile",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    name: "Payment Methods",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    // name: "Purchase History",
    // order: "",
    // path: "",
    // component: "",
    // icon: faCoffee,
  },
];
