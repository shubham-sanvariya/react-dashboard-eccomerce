import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import {userData} from '../../dummyData.js';
import WidgetSm from "../../components/WidgetSmall/WidgetSm";
import WidgetLg from "../../components/WidgetLarge/WidgetLg";

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
