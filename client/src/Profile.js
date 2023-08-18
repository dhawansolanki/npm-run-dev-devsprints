import React from 'react'
import DashboardFooter from './DashboardFooter'
import axios from 'axios'

const ProfilePage=()=> {
    
axios.get("http://localhost:8080/profile/dhawansolanki")
.then(response => {
  console.log(response.data); 
})
.catch(error => {
  console.error(error);
});
  return (
    <div>
        <div class="max-w-2xl mx-auto">

<div class="px-3 py-2">
  
    <div class="flex flex-col gap-1 text-center">
        <a class="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg" href="" style={{"background-image": "url('./team1.jpeg')"}}></a>
        <p class="font-serif font-semibold">Dhawan Solanki</p>
        <span class="text-sm text-gray-400">BMSCE - Bangalore, India</span>
        {/* <span class="text-sm text-gray-400">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span> */}
    </div>



    <div class="flex justify-center items-center gap-2 my-3">
        <div class="font-semibold text-center mx-4">
            <p class="text-black">6</p>
            <span class="text-gray-400">Posts</span>
        </div>
        <div class="font-semibold text-center mx-4">
            <p class="text-black">0</p>
            <span class="text-gray-400">Followers</span>
        </div>
        <div class="font-semibold text-center mx-4">
            <p class="text-black">3</p>
            <span class="text-gray-400">Folowing</span>
        </div>
    </div>
  


    <div class="flex justify-center gap-2 my-5">
        <button class="bg-pink-500 px-10 py-2 rounded-full text-white shadow-lg">Follow</button>
        <button class="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">Message</button>
    </div>
    

 
    
    <div class="flex justify-between items-center">
        <button class="w-full py-2 border-b-2 border-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
        </button>
        <button class="w-full py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
        </button>
    </div>


       <div class="grid grid-cols-3 gap-2 my-3">
            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage1.avif')"}}></a>
            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage2.avif')"}}></a>
            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage3.avif')"}}></a>

            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage4.avif')"}}></a>
            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage5.avif')"}}></a>
            <a class="block bg-center bg-no-repeat bg-cover h-40 w-full rounded-lg" href="" style={{"background-image": "url('./profileimage6.avif')"}}></a>

       </div>

</div>


<DashboardFooter/>

</div>
    </div>
  )
}

export default ProfilePage