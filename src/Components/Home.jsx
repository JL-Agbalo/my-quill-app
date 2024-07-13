import React, { useState } from 'react'
import { generateSlug } from '../libs/generateSlug';
function Home() {

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("")

      function handleTitle(e) {
        const newTitle = e.target.value;
        setTitle(newTitle);
        const autoSlug = generateSlug(newTitle);
        setSlug(autoSlug);
      }

    async function handleSubmit(e){
        e.preventDefault();
        const newBlog= {
            title, 
            slug, 
            description
        };
    }

    return (
    <div>
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand text-center" href="#">Amazing Rich Text Editor (Lenard)</a>
        </div>
      </nav>

      <div className="card shadow mt-4">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">Blog Editor</h2>
              <form action="" onSubmit={handleSubmit}>
                <div class="mb-3">
                <label for="" class="form-label">Blog Ttile</label>
                <input 
                    onChange={handleTitle}
                    type="text" 
                    name ="title"
                    id = "title"
                    autoComplete='given-name'
                    class="form-control"
                />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Blog Slug</label>
                    <input 
                    onChange={(e)=> setSlug(e.target.value)}
                    type="text" 
                    name ="slug"
                    id = "slug"
                    autoComplete='slug'
                    value = {slug}
                    class="form-control"
                    // placeholder='Type the Course title'
                />
                </div>
                <div class="mb-3">
                <label for="" class="form-label">Blog Description</label>
                    <div class="form-floating">
                    <textarea 
                    class="form-control" 
                    placeholder="Leave a comment here" 
                    id="blogDescription"
                    onChange={(e) => setDescription(e.target.value)}
                    >

                    </textarea>
                    <label for="blogDescription">Description</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary">
                    <i className="bi bi-plus"></i> Create Blog Post
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body border-left">
              <h2 className="card-title">Blog View</h2>
              <div class="mb-3">
              <h2>{title}</h2>
              </div>

              <div class="mb-3">
                <label for="" class="">Blog Slug</label>
                <div className="border p-2 rounded">
                    <p>{slug}</p>
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="">Blog Description</label>
                <div className="border p-2 rounded">
                    <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home