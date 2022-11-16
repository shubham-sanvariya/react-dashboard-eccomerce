import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart';
import {productData} from '../../dummyData.js';
import { Publish } from '@material-ui/icons';

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to={'/newproduct'}>
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
        <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales"
         title={"Sales Performance"} />
        </div>
        <div className="productTopRight">
        <div className="productInfoTop">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPo5ukjq53ltMsk9ILHXNCZwisqvaU7wyvA&usqp=CAU" alt="" 
            className="productInfoImg" />
            <span className="ProductName">Apple Airpods</span>
        </div>
        <div className="productInfoBottom">
            <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
            </div>
        </div>
        </div>
        </div>
        <div className="productBottom">
            <form action="" className="productForm">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Apple Airpod' />
                    <label htmlFor="">In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label htmlFor="">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPo5ukjq53ltMsk9ILHXNCZwisqvaU7wyvA&usqp=CAU" alt=""
                        className="productUploadImg" />
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="text" id='file' style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
