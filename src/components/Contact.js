import React from "react";

export default function Contact() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formDate,setFormData] = React.useState({
      name:"",  email:"",message:""
  })

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleChange(e){
      setFormData(prevFormData=>{
        return {
            ...prevFormData,
            [e.target.value]:""//e.target.value
        }
      })
  }

  function handleSubmit(e) {
    e.preventDefault();  
    console.log(name +" "+email+" "+message);
    alert("Message Sent successfully to the user!!");
    /*emailjs.sendForm("service_gd_gmail", "template_email_gd", form.current, "38RJhyjc4R9AeKNxQ").then(
      (result) => {
        alert("Message sent!");
        console.log(result.text)
      },(error) => alert(error)
    );
    */

    e.target.reset();

  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder={0} marginHeight={0}
            marginWidth={0} style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.747305185288!2d11.566239316508224!3d48.11511016070314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf152da11271%3A0xaf06a94dfcb0f99!2sThusneldastra%C3%9Fe%201%2C%2081543%20M%C3%BCnchen!5e0!3m2!1sen!2sde!4v1671108762468!5m2!1sen!2sde"/>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-2/5 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Thusneldastr. 1 <br />
                Munich 81543
              </p>
            </div>
            <div className="lg:w-3/5 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                dubeygaurav.tech@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+4917667403973</p>
            </div>
          </div>
        </div>
        <form netlify name="test" onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
          Glad you visited the website. Let me know if you would like to connect for opportunities.
          Drop your contact informations and I will reply to it promptly
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              //onChange={(e) => setName(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              //onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              //onChange={(e) => setMessage(e.target.value)}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
