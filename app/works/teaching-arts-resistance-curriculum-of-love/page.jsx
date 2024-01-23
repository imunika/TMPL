'use client'
import SocialIcons from "../../components/Socialicons";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const basePath = '/TMPL'

export default function InstallingPalaceLove() {
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
            “Take Me to the Palace of Love”: Teaching Out Loud about the Arts, Resistance and the Curriculum of Love
            </h1>
            <div className="flex items-center">
              <div><img src={`${basePath}/images/headshots/danielle_smith.png`} className="p-2 mx-auto w-16 h-16" alt="" /></div>
              <div>by <Link href="/contributors/danielle_smith" className="text-black font-black hover:text-[#be3a3b] hover:no-underline hover:font-black">Danielle Taana Smith</Link></div>
            </div>
            <div className="text-md text-slate-700 font-light leading-7">
              <div className="mt-6 border-t border-[#d3d3d3]">
              </div>
              <div>
                <p className="mt-4 pt-8 font-black mb-2 text-xl"><em>The historical</em></p>
                <p  className=" 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Despite serious contestations and attempts to establish new poles of power, palaces in Washington, London, Brussels, Paris, and other Western cities are understood as imperial seats, representing the core of the global empire from whence economo-political power reigns. However, Foucault reminds us that “power is everywhere,” even though the imperial structures and symbols of global power are typically concentrated in the West.<sup><Link href="#fn1" id="ref1" class="anchor">1</Link></sup>  This metapower, or one may add, this megapower, is pervasive and engages and consumes its global subjects. Edward Said’s 1978 book, <i>Orientalism</i>, conceptualizes the Western construction of ‘the other,’ in furtherance and ensuing counter-contestations of global empire.<sup><Link href="#fn2" id="ref2" class="anchor">2</Link></sup>  For more than half a millennium, the empire flourishes, and the Great Divergence ushered in a set of dominant principals and their subjects. The sun indeed still never sets on the breadth of the land the empire consumes.
                </p>
                <br />
                <p className="indent-16">Within the colonies, the sometimes deductive, sovereign power is omnipresent, and the good economic life is preserved for privileged peoples. In some instances, the subjects are deprived of basic physiological needs, agencies, and literacy and numeracy (education). Agamben conceives of this state with the subject as homo sacer.<sup><Link href="#fn3" id="ref3" class="anchor">3</Link></sup>  Historically, exploitation and subjugation were integral pillars upon which the weight of empire rested. ‘The others’ included the enslaved, colonized, indigenous, and people of color. The colonizers have determined the academic curriculum, or the standardized education system<sup><Link href="#fn4" id="ref4" class="anchor">4</Link></sup>  and other forms of expressions of the colonized, including their arts. Thus, the colonizers have determined the values, beliefs, and identities of the colonized. However, the subjects have contested and have not obediently followed the script.<sup><Link href="#fn5" id="ref5" class="anchor">5</Link></sup>  There are continuously contestations and counter-contestations. In this struggle for authenticity and sovereignty, Amilcar Cabral states that “the time has gone when, in an attempt to perpetuate the domination of people, culture was considered to be the prerogative of privileged peoples or nations.”<sup><Link href="#fn5" id="ref5" class="anchor">5</Link></sup>  Other poles of power and civilization were suppressed or ebbed but were not eviscerated completely.</p>
                <br />
                <p className="indent-16">The exhibition,<i>Take Me to the Palace of Love</i>, inspired by Rina Banerjee’s <i>Take Me, Take Me, Take Me…to the Palace of Love</i> (2003), invokes the Taj Mahal, considered one of the greatest architectural achievements in India. The “Palace of Love” then takes (and in some instances, returns) the audience to the spaces of the oppressed. It functions as an act of resistance to colonial domination, which exists because it destroys the cultures of ‘the others.’ The exhibition affirms Spivak’s contention that despite the suppression of their voices, the subaltern speaks.<sup><Link href="#fn4" id="ref4" class="anchor">4</Link></sup></p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src={`${basePath}/images/works/teaching-arts-resistance-curriculum-of-love/fig1.jpg`} alt="" />
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 1. Rina Banerjee, <i>Take me, Take me, Take me…to the Palace of Love</i>, 2003. Plastic, antique Anglo-Indian Bombay dark wood chair, steel and copper framework, floral picks, foam balls, cowry shells, quilting pins, red colored moss, antique stone globe, glass, synthetic fabric, shells, fake birds. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.
                    </figcaption> 
                </div>
                <br />
                <p className="indent-16">The vastness and scope of empire were branded on the minds, bodies, and souls of ‘the other’. Their traumatized memories are reflected in their creative works. These memories are alive in The “Palace of Love,” which reflects the complexities and divergences of the experiences of the colonized around the world. The colonized share in common the distortion of identity and erasure of memory, rendering an existential need to (re)define selves against the colonial imposition of values. The work of (re)constructing identity and (re)imagining personhood cannot be completed without a collective memory of where one came from.</p>
                <br />
                <p className="indent-16">Banerjee uses art as a medium to reconstruct memory and identity, and to give form and body, most particularly for colonized people whose lands, cultures and histories have been stripped away. Her art lays bare racial, economic, social, environmental, and other forms of violence and injustice, and demands the audience’s attention. The exhibition focuses on the experiences of the people of the former colony, moves their stories from the periphery to the center, and testifies to their resilience. The figure of the African migrant, floating in the air, memorializes the lives of courageous Africans who persevered despite the extraordinary brutality of the trans-Atlantic slave trade. They had the courage to love and to imagine a just world, beyond the circumstances of their lives.</p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src={`${basePath}/images/works/teaching-arts-resistance-curriculum-of-love/fig2.jpg`} alt="" />
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 2. Rina Banerjee, <i>Viola, from New Orleans…</i>, 2017. Murano glass horns, Indian rakes, seed beads, steel, Yoruba African mask, oyster shells, cowrie shells, Charlotte dolls, polyester horse hair trim, Korean silks, Indian silks, vintage Kashmir shawls, French wire ferris wheel, Congolese elbow bangles, colonial mirror sconces, Japanese seed glass beads, sequins, threads. Courtesy of the Pennsylvania Academy of the Fine Art, Philadelphia. Museum Purchase, 2017.53. Photograph courtesy of Syracuse University Art Museum.
                    </figcaption> 
                </div>
                <p className="mt-4 pt-8 font-black mb-2 text-xl"><em>The contemporary</em></p>
                <p  className=" 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  Banerjee’s exhibition also investigates how contemporary forms of coercion have replaced brute colonialism. Students can critically analyze the value of the exhibition in the context of both post-colonial history and contemporary coercive acts. In conversation with Banerjee at Syracuse University, Spivak questions the transformative power of art, if it does not address poverty, unemployment, homelessness, other societal ills, and failure of governments to meet the social contract agreements.
                </p>
                <br />
                <p className="indent-16">Within this milieu, the exhibit on climate change highlights contemporary environmental justice issues and shows the tragic consequences of human induced disasters that leave so many people in unbearable circumstances. The first week of July 2023 was the hottest week recorded in human history, and the summer of 2023 may be the hottest recorded, with extremely high sea level temperatures and extensive Antarctic Sea ice loss.<sup><Link href="#fn6" id="ref6" class="anchor">6</Link></sup>  The scorching heat is devastating for people, especially the elderly, ill, inadequately housed, and unhoused, who are also among ‘the others.’</p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src={`${basePath}/images/works/teaching-arts-resistance-curriculum-of-love/fig3.jpg`} alt="" />
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 3. Rina Banerjee, <i>A World Lost</i>, 2013. Black synthetic horns, wire, netting, lightbulbs, scale, ostrich eggs, textiles, cowrie shells, pebbles, coins, feathers, fish vertebrae, greenery, coral, glass birds, miniature human and animal figurines, plastic cups, and red thread. Artist’s Collection, New York City. Photograph courtesy of Syracuse University Art Museum.
                    </figcaption> 
                </div>
                <br />
                <p className="indent-16">Mass migration in many instances is propelled by environmental crisis and interlinked social, political and economic crises. Banerjee demands mobility&mdash;take me&mdash;a mobility which is often blocked for the others&mdash;to the point of death. In June 2023, hundreds of migrants fleeing poverty died on an overcrowded vessel that sank off the coast of Greece,<sup><Link href="#fn7" id="ref7" class="anchor">7</Link></sup>  while governmental security forces stood by and did not act to rescue them. Economists argue that globalization is inevitable, but only when it concerns the other. State security apparatuses are mobilized to curtail their border crossings. Thus, mass migration, particularly from the global south to the north, is identified as a threat to safety, employment, prosperity, housing, education, cultures, and values. The others become those who threaten national identity and existence.</p>
                <br />
                <p className="indent-16">However, Banerjee overturns these common understandings of the workings of political power. The “Palace of Love” is not the seat of political bureaucracy, rather, it is a place of love, where there is no least among us. As Dr. Martin Luther King Jr. taught us, we must have courage if we are to love each other. Dr. King’s beloved community is built on brotherly love for all humanity. The beloved community convened when Congolese women, many of them refugees who had fled from brutal and protracted civil war&mdash;fueled by our consumption of conflict minerals, met at Salt City Market in Syracuse, to braid strands of hair for the “Palace of Love.” It was at the braiding table that a college student asked a woman about her journey to Syracuse. The palace of love is the local marketplace, where over food and laughter, cross-cultural conversations begin.</p>
                <br />
                <div  className="flex flex-col justify-center items-center">
                  <img src={`${basePath}/images/works/teaching-arts-resistance-curriculum-of-love/fig4.jpg`} alt="" className="w-[70%]"/>
                    <figcaption className="mt-3 ml-1 text-xs text-slate-600 dark:text-gray-400">
                    Fig. 4. Participants braid with Rina Banerjee for <i>Love in Syracuse: Making Art Together</i>, Salt City Market, Syracuse, New York. February 25, 2023.
                    </figcaption> 
                </div>
                <p className="mt-4 pt-8 font-black mb-2 text-xl"><em>The curriculum of love</em></p>
                <p  className=" 
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 
                    first-letter:mr-4 first-letter:float-left first-letter:font-italiana">
                  It is important that we study and teach the histories of the oppressed. The university campus has become more diverse and multicultural. However, often in American classrooms, understanding of non-western cultures is superficial and stereotypical. Our lack of knowledge of the histories and lived experiences of ‘other’ people around the world blinds us to their humanity. As teachers, it is our moral responsibility to affirm and teach the humanity of all persons to students. At the “Palace of Love,” power is dispersed among the people through their love for each other. It is not concentrated among the privileged. Banerjee’s exhibition has enriched our beloved Syracuse community. It has allowed students to see their own humanity in others, and to see the humanity of others within themselves. It has allowed students to ask new questions and to explore new areas of knowledge. It has empowered teachers and students to continue to be loving agents of transformative social change.
                </p>
                <br />
                <br />
                <p className="border-t border-[#dadada] mb-4"></p>
                <sup id="fn1">1. Michel Foucault, <i>The History of Sexuality: Vol. 1 An Introduction</i>, (London: Allen Lane, 1979), 93. <Link href="#ref1" title="Jump back to footnote 1 in the text.">↩</Link></sup>
                <br />
                <sup id="fn2">2. Edward W. Said, <i>Orientalism</i>, (London: Penguin Books, 1978). <Link href="#ref2" title="Jump back to footnote 2 in the text.">↩</Link></sup>
                <br />
                <sup id="fn3">3. Giorgio Agamben, <i>Homo Sacer: Sovereign Power and Bare Life</i>, (Stanford: Stanford University Press, 1998).<Link href="#ref3" title="Jump back to footnote 3 in the text.">↩</Link></sup>
                <br />
                <sup id="fn4">4. Gayatri Chakravorty Spivak, <i>Can the Subaltern Speak?</i> In Marxism and the Interpretation of Culture, ed. Cary Nelson and Lawrence Grossberg. (Urbana: University of Illinois Press, 1988), 271–313.<Link href="#ref4" title="Jump back to footnote 4 in the text.">↩</Link></sup>
                <br />
                <sup id="fn5">5. Amilcar Cabral, “National Liberation and Culture.” <i>Transition</i>, no. 45 (1974), 12–17.<Link href="#ref5" title="Jump back to footnote 5 in the text.">↩</Link></sup>
                <br />
                <sup id="fn6">6. World Meteorological Organization. “Preliminary Data Shows Hottest Week on Record. Unprecedented Sea Surface Temperatures and Antarctic Sea Ice Loss.” July 10, 2023. <a href="https://public.wmo.int/en/media/news/preliminary-data-shows-hottest-week-record-unprecedented-sea-surface-temperatures-and" target="_blank">https://public.wmo.int/en/media/news/preliminary-data-shows-hottest-week-record-unprecedented-sea-surface-temperatures-and</a><Link href="#ref6" title="Jump back to footnote 6 in the text.">↩</Link></sup>
                <br />
                <sup id="fn7">7. Richard Perez-Pena. “5 Deaths at Sea Gripped the World. Hundreds of Others Got a Shrug.” New York Times, June 23, 2023, <a href="https://www.nytimes.com/2023/06/23/world/europe/titan-sub-greek-migrant-boat.html" target="_blank">https://www.nytimes.com/2023/06/23/world/europe/titan-sub-greek-migrant-boat.html</a><Link href="#ref7" title="Jump back to footnote 7 in the text.">↩</Link></sup>
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
                <Link href="/works/stanger-in-the-palace-of-love" className="font-italiana text-md md:text-xl">
                Stranger in the Palace of Love
                </Link>
              </div>
            </div>
            <div className="text-right flex-1">
              <div className="flex gap-1 items-center justify-end">
                <Link href="/works/tell-me-whom-you-love" className="font-italiana text-md md:text-xl">
                “Tell Me Whom You Love”: ‘Mixed’ Marriage & Racial Mutability
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