import React, { useState } from 'react'

function Home() {

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("")

    function handleTitle(e){
        const newTitle= e.target.value;
        setTitle(newTitle)
        // const autoSlug = generateSlug(newTitle);
        // setSlug(autoSlug);
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
        <h2>
            Amazing Rich Text Editor(LENARD)
        </h2>
    </div>
  )
}

export default Home