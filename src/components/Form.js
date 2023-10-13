import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function Form() {
    const [id,setId] = useState('');
    const [title,setTitle] = useState('');
    const [brand,setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [des,setDes] = useState('');
    const [imgurl,setImgurl] = useState('');
    const [products,setProducts] = useState([{}]);

    const productsData = {
        productId:id,
        title:title,
        brand:brand,
        price:price,
        des:des,
        imgurl:imgurl
    }

    useEffect(()=>{
      axios.get('http://localhost:3003/productsData')
        .then((res)=>{
            setProducts(res.data)
        }).catch((error)=>{
          console.error("Error Get Add data")
        })
    },[])

    console.log(products)
    const handleSubmit = (e)=>{
        e.preventDefault();
        //console.log(productsData)
        axios.post('http://localhost:3003/productsData',productsData).then((res)=>{
            alert("success")
            setId('')
          }).catch((error)=>{
            console.error("Error to Add data")
        })
    }
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3003/productsData/${id}`)
      .then((res)=>{
        alert("Product Deleted")
      })
    }
    let sno=1
  return (
    <>
    <div className='row justify-content-center'>
      <div className='col-md-6 img-thumbline'>
        <h3 className='text-center text-primary'>Add Product</h3>
      <form action="" method='post' onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="id">product id</label>
    <input type="text" class="form-control" value={id}id="id" onChange={(e)=>{setId(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="title">title</label>
    <input type="text" class="form-control" value={title}id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="brand">brand:</label>
    <input type="text" class="form-control"value={brand} id="brand" onChange={(e)=>{setBrand(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="price">price:</label>
    <input type="text" class="form-control" value={price}id="price" onChange={(e)=>{setPrice(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="des">description:</label>
    <input type="text" class="form-control" value={des}id="des" onChange={(e)=>{setDes(e.target.value)}}/>
  </div>
  <div class="form-group md-3">
    <label for="imgurl">Img url:</label>
    <input type="text" class="form-control" value={imgurl}id="imgurl" onChange={(e)=>{setImgurl(e.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
</div>

  </div>
  <table className='table table-bordered'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>P Id</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>

      <tbody>
          {
            products.map((e,i)=>{
              return(
                <tr>
                  <td>{sno++}</td>
                  <td>{e.productId}</td>
                  <td>{e.title}</td>
                  <td>{e.brand}</td>
                  <td>{e.price}</td>
                  <td>{e.des}</td>
                  <td><img src={e.imgurl}  height="100px" /></td>
                  <td><button type="submit" class="btn btn-info" on click={e.id}>Edit</button></td>
                  <td><button type="submit" class="btn btn-danger" on click={e.id}><i class="fa-solid fa-trash"></i></button></td>
              

                </tr>
              )
            })
          }
      </tbody>
    </table>

    </>
  )
}