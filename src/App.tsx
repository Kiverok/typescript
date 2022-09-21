import {Product} from './components/Product'
import { useProducts } from './hooks/products';
import {Loader} from './components/loader'
import {ErrorMessage} from './components/ErrorMessage'
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useState} from "react"
import { IProduct } from './models'
//import {products} from './data/products'


function App() {
  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
   <div className="container mx-auto max-w-2xl pt-5">
{ loading && <Loader />}
{ error && <ErrorMessage error={error} />}
{ products.map(product => <Product product={product} key={product.id} />)}
{modal && <Modal title="Create new product">
  <CreateProduct onCreate={createHandler} />
  </Modal>}
 {/* <Product product={products[0]} />
 <Product product={products[1]} /> */}
   </div>
  )
}

export default App;
