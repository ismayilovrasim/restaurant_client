import { useEffect, useState } from "react";
import menu from '../../api/api';
import { Col, Divider, Row, Card } from 'antd';
const { Meta } = Card;

const Menu = () => {
  const [loader, setLoader] = useState(false)
  const [allMenu, setAllMenu] = useState([]);
  const [showMenu, setShowMenu] = useState([]);
  const [breackfast, setBreackfast] = useState([]);
  const [salad, setSalad] = useState([]);
  const [soup, setSoup] = useState([]);
  const [kebab, setKebab] = useState([]);
  const [chef, setChef] = useState([]);


  useEffect(() => {
    getData()
  }, []);


  const getData = async () => {
    await menu.get('menu').then((response)=>{
      console.log(response.data);
      const listMenu = response.data.filter((d)=>{return [6, 9, 11, 10, 12, 16].some((id)=>{
        return id == d.category_id
      })}).slice(0, 20)

      setShowMenu(listMenu)
      setAllMenu(listMenu)
      setBreackfast(response.data.filter((d)=>{return d.category_id == 4}))
      setSalad(response.data.filter((d)=>{return d.category_id == 6}))
      setSoup(response.data.filter((d)=>{return d.category_id == 7}))
      setKebab(response.data.filter((d)=>{return d.category_id == 9}))
      setChef(response.data.filter((d)=>{return d.category_id == 3}))

    }).catch((error)=>{ 
      console.log(error);
    }).finally(()=>{
      setLoader(false)
    })
  }

  return (
    
    <div className="container text-center">
      <h1 className="text-center">Our Menu</h1>
      <button className="btn btn-about me-2 mb-4 mt-1" onClick={()=>{setShowMenu(allMenu)}}>All</button>
      <button className="btn btn-about me-2 mb-4 mt-1"  onClick={()=>{setShowMenu(breackfast)}}>Breackfast</button>
      <button className="btn btn-about me-2 mb-4 mt-1"  onClick={()=>{setShowMenu(salad)}}>Salad</button>
      <button className="btn btn-about me-2 mb-4 mt-1"  onClick={()=>{setShowMenu(soup)}}>Soup</button>
      <button className="btn btn-about me-2 mb-4 mt-1"  onClick={()=>{setShowMenu(kebab)}}>Kebab</button>
      <button className="btn btn-about me-2 mb-4 mt-1"  onClick={()=>{setShowMenu(chef)}}>from the chef</button>

      <Row gutter={[16, 16]} className='mb-4'>
        {
          showMenu.map((item)=>(

            <Col lg={6} md={12} sm={24}>
              <Card
                key={item.id}
                hoverable
                cover={<img alt={item.title} src={item.image} />}
              >
                <Meta title={item.title} description={item.name} />
              </Card>
            </Col>
          ))
        }
      </Row>
      
    </div>
  )
}




export default Menu