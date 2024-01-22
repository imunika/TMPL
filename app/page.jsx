import Card from "./components/Card";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-stone-500 to-stone-600 h-screen relative">
        <img src="/images/TMPL_SU.jpg" className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="lg-px-10 lg:p-40 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          <h1 className="text-white text-center px-20 pt-14 my-10 font-italiana font-extralight text-2xl md:text-3xl lg:text-5xl relative">
          Reflections on 
          </h1>
          <h2 className="text-white text-center px-20 mt-20 font-italiana font-extralight text-4xl md:text-5xl lg:text-7xl relative"> 
          <i>Take Me to the Palace of Love</i>,
          </h2>
          <p className="text-white text-center px-20 pt-20 mt-32 font-italiana font-extralight  text-2xl md:text-3xl lg:text-3xl mb-4 relative">
              Syracuse University Art Museum
            </p>
        </div>

      </section>

      {/* Brief introduction */}
      <div className="grid grid-cols-8 bg-[rgba(190,58,59,0.03)] mb-6 p-8">
        <div></div>
        <div className="mb-6 md:col-span-6 col-span-8">
          <p className="text-sm text-justify text-slate-700 font-light leading-7">
          Lorem ipsum dolor sit amet <a href="http://suart.syr.edu/" target="_blank">Syracuse University Art Galleries</a> dolor sit amet consectetur adipisicing elit. Similique labore, eligendi est quaerat enim atque exercitationem ipsam soluta veniam, maiores aliquid! Quos consectetur odit, voluptates provident similique, aliquam obcaecati in ea aliquid libero facere autem voluptatibus eveniet consequatur sapiente cupiditate vel rem deserunt assumenda hic quia quidem quisquam natus! Reprehenderit voluptas, assumenda minus sed autem, totam vitae aliquam repellat tenetur iste, veniam quis dolorum officiis accusamus dolores quisquam ex nulla earum non? Delectus, enim ea tempore sed suscipit velit ab sit nihil. Quod nisi voluptatibus veritatis, soluta harum tempore esse alias inventore vero recusandae quia dignissimos architecto sint nulla eaque dolores consequuntur assumenda et, molestiae explicabo est. Ab fugit quos officia, veritatis beatae voluptate voluptatibus corrupti quis aut nisi, velit tempore autem architecto praesentium officiis quod distinctio impedit fuga modi? Esse quibusdam quod aperiam cupiditate est magni magnam. Nulla, laboriosam!
          </p>
        </div>
        <div></div>
      </div>  
      
      {/* Display of works */}
      <div className="grid grid-cols-8 pb-6">
        <div></div>
        <div className="col-span-6 bg-[rgba(190,58,59,0.03)] border-[#be3a3b] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8 p-6 ">
          <Card />               
        </div>
        <div></div>
      </div>  
    </>
  );
}