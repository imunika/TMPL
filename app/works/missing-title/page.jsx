'use client'
import Carousel from "../../components/Carousel";
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


const slides = [
  "/images/works/missing-title/fig1.jpg",
  "/images/works/missing-title/fig2.jpg",
  "/images/works/missing-title/fig3.jpg",
  "/images/works/missing-title/fig4.jpg",
  "/images/works/missing-title/fig5.jpg",
  // "/images/works/missing-title/fig6.jpg",
  // "/images/works/missing-title/fig7.jpg",
]

export default function InstallingPalaceLoveEssayAC() {
  return (
    <>          
      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6 bg-[rgba(190,58,59,0.03)]">
          <div className="flex justify-end">
            <SocialIcons />
          </div>
          <div className="px-5 pb-10 sm:mx-10 xl:mx-20 2xl:mx-28">                
            <h1 className="font-italiana font-light pb-3 text-5xl">
            Missing Title
            </h1>
            <div className="flex items-center">
              <div><img src="/images/headshots/melissa_yuen.png" className="p-2 mx-auto w-16 h-16" alt="" /></div>
              <div>by <a href="/contributors/melissa_yuen" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Melissa Yuen</a></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3] flex items-center justify-center">

              </div>
              <div>
                <p  className="mt-4 pt-8 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  On view during the Spring 2023 semester, <i>Take Me to the Palace of Love</i> showcased the importance of art and highlighted the central role a university art museum plays on a college campus (fig. 1). Featuring sculptures and drawings made by Rina Banerjee, the installation was visually compelling and conceptually rich, with the large sculptures and intricate drawings highlighting a riot of colors and a wide range of textures (fig. 2). In addition, the engineering and fabrication expertise needed to create the sculptures steel armatures form an interesting juxtaposition with the creativity required to dream up the different components that adorned the sculptures and the labor needed to carefully attach them to the works (fig. 3). This contrast is best seen in <i>Viola, from New Orleans…</i> (2017), which was on loan from the Pennsylvania Academy of the Fine Arts (fig. 4). The figure stands on two feet with her metal skeleton exposed. Wings sprout from her shoulder blades, acting as a counterbalance to the parachute that trails behind her. On each segment of her wings, hundreds of threads were individually tied to the armature, so that they, along with the attached textiles, create a diaphanous and gauzy effect that belie the weight of the sculpture (fig. 5).</p>
                <br />
                <div className="mt-10 max-w-4xl">
                  <Carousel>
                    {slides.map((s) => (
                      <img src={s} />
                    ))}
                  </Carousel>
                </div>
                <br />
                <p className="indent-16">The multitude of materials used in each sculpture create different visual qualities, allowing for multiple points of access, all of which were evident during the run of the exhibition. Students’ jaws dropped when they rounded the corner and encountered the spectacle of <i>Take me, Take me, Take me… to the Palace of Love</i> (2013), a pink Saranwrap covered reduction of the Taj Mahal, which was suspended from the ceiling. A tween spent 20 minutes poring over the painting on the floor of <i>A World Lost</i> (2013), gleefully pointing out the many whimsical details, including the Eiffel Tower, angel heads, bears, toy soldiers, and a single black feather contributed by one of Syracuse’s many crows, that Banerjee nestled among brightly colored sand (fig. 6). Faculty made connections between the artworks to their lived experiences and critical theory in the same conversation. These experiences would not be possible without the museum nor the artworks on view in the galleries.</p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src="/images/works/missing-title/fig6.jpg" alt="" />
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 6. Rina Banerjee, floor detail, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Syracuse University Art Museum. Artist’s Collection, New York City.
                    </figcaption> 
                </div>
                <br />
                <p className="indent-16">These wide-ranging interactions with the exhibition are also borne out in the class visits and programs that occurred in the museum’s galleries, a space where different audiences (from Syracuse University and beyond) came together around tangible objects and worked through the ideas presented (fig. 7). As a curator, witnessing these conversations in the galleries is one of the most gratifying parts of my work. With each exhibition, my colleagues and I spend so much time thinking through the conceptual frameworks and installation details, while also making countless contingency plans in case arrangements go awry. Yet, what we often cannot account for are the visitors’ reactions&mdash;the joy, bewilderment, awe, and excitement&mdash;expressed in the galleries. These emotions on display in the art museum, alongside the objects that elicited them, affirm the importance of art for the academic humanity and for humanity more broadly.</p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src="/images/works/missing-title/fig7.jpg" alt="" className="w-[70%]"/>
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 7. <i>Love in Syracuse: Making Art Together</i>, Salt City Market, Syracuse, New York, February 2023.
                    </figcaption> 
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-6 m-6">
        <div></div>
        <div className="my-10 md:col-span-4 col-span-6">
          <div className="flex items-center gap-20">
            <div className="text-left flex-1">
              <div className="flex gap-1 items-center justify-start">
              <div><BsChevronCompactLeft size={80} color="#be3a3b" /></div>
                <Link href="/works/mermaid-thoughts" className="font-italiana text-md md:text-xl">
                Mermaid Thoughts
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/other-routes-of-the-image" className="font-italiana text-md md:text-xl">
                Other Routes of the Image: Looking at Rina Banerjee by Way of Istanbul
                </Link>
                <div><BsChevronCompactRight size={80} color="#be3a3b" /></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}