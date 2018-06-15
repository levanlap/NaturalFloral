import React from "react"
import { Root } from "native-base"
import { createStackNavigator, createDrawerNavigator } from "react-navigation"
import SideBar from "./components/sidebar"
import PlantesList from "./screens/plantes/plantesList"
import PlantesDetail from "./screens/plantes/plantesDetail"
import ProductsList from "./screens/products/productsList"
import Register from "./screens/register/register"
import About from "./screens/about/about"
import Progress from "./screens/progress/progress"
import Scanner from "./screens/scanner/scanner"
 
 				


const Drawer = createDrawerNavigator(
  {
    PlantesList: {
      screen: (props) => <PlantesList {...props} titleHeader={"Liste des plantes"} />
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
    Register: { screen: Register },
    Scanner: { screen: Scanner }
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
