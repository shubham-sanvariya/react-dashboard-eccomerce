import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredinfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
              <span className="featuredTitle">Revanue</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4
                <ArrowDownward className="featuredIcon negative" />
                </span>
              </div>
              <span className="featuredSub">compared to last month</span>
        </div>
        <div className="featuredItem">
              <span className="featuredTitle">Sales</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,515</span>
                <span className="featuredMoneyRate">-1.4
                      <ArrowDownward className="featuredIcon negative" />
                </span>
              </div>
              <span className="featuredSub">compared to last month</span>
        </div>
        <div className="featuredItem">
              <span className="featuredTitle">Cost</span>
              <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+2.5
                      <ArrowUpward className="featuredIcon" />
                </span>
              </div>
              <span className="featuredSub">compared to last month</span>
        </div>
    </div>
  )
}
