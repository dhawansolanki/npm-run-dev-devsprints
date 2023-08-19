import React from 'react'
import './sidebar.css';
import LeftSidebar from './LeftSidebar';

const Sidebar = () => {
  return (
    <div className="page-background">


<LeftSidebar/>
      {/* <div class="p-4 sm:ml-64"> */}


        {/* <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="gentona-heading title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                <br class="hidden lg:inline-block" />Catalyzing a Sustainable Future
              </h1>
              <p class="mb-8 leading-relaxed">In our mission, we are unwaveringly dedicated to catalyzing positive transformation and nurturing sustainable progress that empowers a brighter world. Our unwavering commitment is to provide groundbreaking solutions that resonate with the United Nations' Sustainable Development Goals (SDGs), leading the charge toward a more harmonious and prosperous future.</p>

            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="./img_new_1.png" />
            </div>
          </div>
        </section> */}

        <section
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url('./page_1_new.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "contain"
          }}
        >
        </section>

        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Npm-Run-Dev: Your Recycling Partner</h1>
                <div class="leading-relaxed">Your eco-conscious companion for a greener world. Capture a photo of your waste, and let us guide you to the nearest recycling center. Explore local recycling tips shared by our vibrant community and engage in exciting challenges to earn eco-hero badges</div>
              </div>
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img class="object-cover object-center w-full h-full" src='./landing_page_3.jpg' alt="stats" />
            </div>
          </div>
        </section> */}

        {/* <section
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url('./page_2_new.png')`,
          }}
        >
        </section>
        <section className="relative h-screen">
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: `url('./page_3_new.png')`,
            }}
          ></div>
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Innovative Solutions</h2>
                  <p class="leading-relaxed"> We believe in the power of innovation to transform problems into opportunities. Our team of experts works tirelessly to develop cutting-edge solutions that tackle complex challenges head-on.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Collaboration</h2>
                  <p class="leading-relaxed">We understand that sustainable development requires collective effort. We actively engage with stakeholders, partners, and communities to foster collaboration and co-create impactful initiatives.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Education and Awareness</h2>
                  <p class="leading-relaxed">Knowledge is the first step toward change. Through educational programs and awareness campaigns, we empower individuals and organizations to make informed decisions that benefit both society and the environment.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Empowerment</h2>
                  <p class="leading-relaxed">Our projects are designed to empower communities, especially those that are marginalized or underserved. By providing access to resources and tools, we strive to create opportunities for sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="relative h-screen">
          {/* Background Image */}
          <div
            className="bg-cover bg-center h-full absolute inset-0"
            style={{
              backgroundImage: `url('./page_3_new.png')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap relative">
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto z-10 container-1">
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl container-text">Innovative Solutions</h2>
                  <p class="leading-relaxed container-text"> We believe in the power of innovation to transform problems into opportunities. Our team of experts works tirelessly to develop cutting-edge solutions that tackle complex challenges head-on.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto z-10">
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl container-text">Collaboration</h2>
                  <p class="leading-relaxed container-text"> We understand that sustainable development requires collective effort. We actively engage with stakeholders, partners, and communities to foster collaboration and co-create impactful initiatives.</p>
                </div>
              </div>
            </div>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto z-10">
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl container-text">Education and Awareness</h2>
                  <p class="leading-relaxed container-text">Knowledge is the first step toward change. Through educational programs and awareness campaigns, we empower individuals and organizations to make informed decisions that benefit both society and the environment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Innovative Solutions</h2>
                  <p class="leading-relaxed"> We believe in the power of innovation to transform problems into opportunities. Our team of experts works tirelessly to develop cutting-edge solutions that tackle complex challenges head-on.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Collaboration</h2>
                  <p class="leading-relaxed">We understand that sustainable development requires collective effort. We actively engage with stakeholders, partners, and communities to foster collaboration and co-create impactful initiatives.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Education and Awareness</h2>
                  <p class="leading-relaxed">Knowledge is the first step toward change. Through educational programs and awareness campaigns, we empower individuals and organizations to make informed decisions that benefit both society and the environment.</p>
                </div>
              </div>
            </div>
            <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Empowerment</h2>
                  <p class="leading-relaxed">Our projects are designed to empower communities, especially those that are marginalized or underserved. By providing access to resources and tools, we strive to create opportunities for sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Our team is a diverse group of passionate individuals working together to achieve a common goal of excellence and innovation</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="./team1.jpeg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Dhawan Solanki</h2>
                    <h3 class="text-gray-500 mb-3">Software Developer</h3>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="./team2.jpeg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Vasu Gupta</h2>
                    <h3 class="text-gray-500 mb-3">Software Developer</h3>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="./team3.jpeg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Nikhil Sharma</h2>
                    <h3 class="text-gray-500 mb-3">Software Developer</h3>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="./our_team_4.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Vyom Goyal</h2>
                    <h3 class="text-gray-500 mb-3">Software Developer</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url('./page_4_new.png')`,
          }}
        >
        </section>

        {/* <footer class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">SDGs</span>
              </a>
              <p class="mt-2 text-sm text-gray-500">The 17 Sustainable Development Goals</p>
            </div>
            <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">No Poverty</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Zero Hunger</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Good Health and Well-Being</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Quality Education</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Gender Equality</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Clean Water and Sanitation</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Affordable and Clean Energy</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Decent Work and Economic Growth</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Industry, Innovation, and Infrastructure</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Reduced Inequality</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Sustainable Cities and Communities</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Responsible Consumption and Production</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Climate Action</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Life Below Water</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Life on Land</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Peace and Justice Strong Institutions</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Partnerships to achieve the Goal</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

        </footer> */}

        <footer className="text-gray-600 body-font relative">
          {/* Background Image */}
          <section
            className="bg-cover bg-center h-full absolute inset-0"
            style={{
              backgroundImage: `url('./page_3_new.png')`,
            }}
          ></section>
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col relative">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <svg xmlns="" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl container-text">SDGs</span>
              </a>
              <p className="mt-2 text-sm text-gray-500 container-text">The 17 Sustainable Development Goals</p>
            </div>
            <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first relative z-10">
              {/* Your content for different sections */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"></h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">No Poverty</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">Zero Hunger</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">Good Health and Well-Being</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">Quality Education</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">Gender Equality</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 container-text">Clean Water and Sanitation</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Affordable and Clean Energy</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Decent Work and Economic Growth</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Industry, Innovation, and Infrastructure</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Reduced Inequality</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Sustainable Cities and Communities</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Responsible Consumption and Production</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Climate Action</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-80 container-text">Life Below Water</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Life on Land</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Peace and Justice Strong Institutions</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800 container-text">Partnerships to achieve the Goal</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      {/* </div> */}

    </div>
  )
}

export default Sidebar