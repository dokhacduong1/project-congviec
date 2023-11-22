import "./SliderHome.scss"
import { Menu } from 'antd';
import { ShoppingCartOutlined, HomeOutlined, ConsoleSqlOutlined, ShopOutlined, RightCircleOutlined, CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";
function SliderHome(props) {
  const { collapsed, setCollapsed } = props
  console.log(props)
  const location = useLocation()

  function getItem(key, label, icon, children) {
    return {
      key,
      icon,
      label,
      children,

    };
  }
  const items = [
    getItem('/', <span className="layout__slider-item">Home</span>, <span className="layout__slider-item"><HomeOutlined /></span>, [
      getItem('/', <Link to="/">Go Home</Link>, null),
    ]),
    getItem('category', <span className="layout__slider-item">Category</span>, <span className="layout__slider-item"><ConsoleSqlOutlined /></span>, [
      getItem('/add-category', <Link to="add-category">Add Category</Link>, null),
      getItem('/category-management', <Link to="category-management">Category Management</Link>, null)
    ]),
    getItem('shop', <span className="layout__slider-item">Shop</span>, <span className="layout__slider-item"><ShopOutlined /></span>, [
      getItem('/source-shop', <Link to="add-source-shop">Add Shop</Link>, null),
      getItem('/source-shop-management', <Link to="source-shop-management">Source Shop</Link>, null)
    ]),
    getItem('products', <span className="layout__slider-item">Product</span>, <span className="layout__slider-item"><ShoppingCartOutlined /></span>, [
      getItem('/add-products', <Link to="add-products">Add Product</Link>, null),
      getItem('/product-management', <Link to="product-management">Product Management</Link>, null)
    ]),

  ];
  function clickCollapsed() {
    setCollapsed(!collapsed);
  }
  return (
    <>

      <Menu className="layout__slider-menu"

        defaultSelectedKeys={location.pathname}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />

      {
        collapsed ? (
          <span onClick={clickCollapsed} className="layout_slider-collab"><CaretRightOutlined /></span>
        ) : (
          <span onClick={clickCollapsed} className="layout_slider-collab-no-active"><CaretLeftOutlined /></span>
        )
      }


    </>
  )
}
export default SliderHome