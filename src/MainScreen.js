import React from "react"
import { Root } from "native-base"
import { createStackNavigator, createDrawerNavigator } from "react-navigation"
import SideBar from "./components/sideBar"
import PlantesList from "./screens/plantes/plantesList"
import PlantesDetail from "./screens/plantes/plantesDetail"
import PlantesFavorite from "./screens/plantes/plantesFavorite"
import ProductsList from "./screens/products/productsList"
import ProductsDetail from "./screens/products/productsDetail"
import Register from "./screens/register/register"
import Login from "./screens/login/login"
import CheckIn from "./screens/checkin/"
import About from "./screens/about/about"
import Progress from "./screens/progress/progress"
import Scanner from "./screens/scanner/scanner"
import ProductNearMe from "./screens/productnearme/productNearMe" 	 				


const Drawer = createDrawerNavigator(
  {
    PlantesList: {
      screen: (props) => <PlantesList {...props} titleHeader={"Liste des plantes"} />
    },
    PlantesFavorite: {
      screen: (props) => <PlantesFavorite {...props} titleHeader={"Liste des plantes"} />
    },
    ProductsList: {
      screen: (props) => <ProductsList {...props} titleHeader={"Liste des produits"} />
    },
    Progress: {
      screen: (props) => <Progress {...props} titleHeader={"Nature et progrès"} />
    },
    About: {
      screen: (props) => <About {...props} titleHeader={"A propos"} />
    },
    PlantesDetail: { screen: PlantesDetail },
    ProductsDetail: { screen: ProductsDetail },
    Register: { screen: Register },
    Login: { screen: Login },
    CheckIn: { screen: CheckIn },
    Scanner: { screen: Scanner },
    ProductNearMe: {screen: ProductNearMe}
    
  },
  {
    initialRouteName: "PlantesList",
    contentOptions: {
      activeTintColor: "#FFB129"
    },
    contentComponent: props => <SideBar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    // PlantesList: { screen: PlantesList },
    // PlantesDetail: { screen: PlantesDetail },
    // ProductsList: { screen: ProductsList },
    // Register: { screen: Register },
    // SideBar: { screen: SideBar },
    // Scanner: { screen: Scanner }
  },
  {
    headerMode: "none"
  }
)

export default () =>
  <Root>
    <AppNavigator />
  </Root>
