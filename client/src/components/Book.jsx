import { useForm } from "react-hook-form";
import axios from 'axios';
import { useEffect } from "react";

function Book() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  async function allData(data) {
    await axios.post('http://localhost:5000/library/add', data)
      .then(() => alert('data inserted successfully'))
      .catch((err) => console.log(err))
  }

  async function View(){
   const data = await axios.get('http://localhost:5000/library/view')
    console.log(data.data.records)
  }

  useEffect(()=>{
    View()
  },[]);

  return (
    <>
      <div className="mt-5 col-lg-6 mx-auto shadow">
        <form className="p-3" onSubmit={handleSubmit(allData)}>
          <div className="mt-3">
            <input type="text" placeholder="enter title name" className="form-control" {...register('title', { required: true })} />
            {errors.title && <p className="text-danger">title is required.</p>}
          </div>
          <div className="mt-3">
            <input type="text" placeholder="enter author name" className="form-control" {...register('author', { required: true })} />
            {errors.author && <p className="text-danger">author name is required.</p>}
          </div>
          <div className="mt-3">
            <select className="form-select" {...register('genre')}>
              <option value="#">select genre</option>
              <option value="poetry">poetry</option>
              <option value="frictional">frictional</option>
            </select>
          </div>
          <div className="mt-3">
            <input type="number" placeholder="enter ISBN number" className="form-control" {...register('isbn', { required: true })} />
            {errors.isbn && <p className="text-danger">ISBN number is required.</p>}
          </div>
          <div className="mt-3">
            <input type="number" placeholder="enter publication year" className="form-control" {...register('year', { required: true })} />
            {errors.year && <p className="text-danger">publication year is required.</p>}
          </div>
          <button className="mt-3 btn btn-success">submit</button>
        </form>
      </div>

    </>
  )
}

export default Book;