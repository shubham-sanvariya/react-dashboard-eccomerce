import "./widgetLg.css";

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>
      {type}
    </button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        {/* creating table  */}
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://www.ibm.com/in-en/employment/entrylevel/img/developer_image.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">ritika vyas</span>
            </td>
            <td className="widgetLgDate">7 Nov 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://www.ibm.com/in-en/employment/entrylevel/img/developer_image.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">ritika vyas</span>
            </td>
            <td className="widgetLgDate">7 Nov 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Decline" />
            </td>
          </tr>
          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://www.ibm.com/in-en/employment/entrylevel/img/developer_image.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">ritika vyas</span>
            </td>
            <td className="widgetLgDate">7 Nov 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://www.ibm.com/in-en/employment/entrylevel/img/developer_image.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">ritika vyas</span>
            </td>
            <td className="widgetLgDate">7 Nov 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
    </div>
  )
}
