// get all the toggle buttons to use in toggleStyle function (toggle part)
const toggleAll = document.getElementById("toggle-all")
const toggleOpen = document.getElementById("toggle-open")
const toggleClosed = document.getElementById("toggle-closed");

toggleAll.classList.add('bg-[#4A00FF]', 'text-white')

const issue = document.getElementById('issue');    

function toggleStyleAll(){    
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-all');
    selected.classList.add('bg-[#4A00FF]', 'text-white')

    issue.innerText = allPost.length;
    
    const container = document.getElementById('postContainer');
    container.innerHTML = "";
    allPost.forEach((post) => {
        const card = document.createElement("div");

        let img = 
        post.status === "open" 
        ? "./assets/Open-Status.png"
        : "./assets/Closed-Status.png";

        let border =
        post.status === "open" 
        ? "border-green-500"
        : "border-purple-500";

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 ${border} shadow-md bg-base-100 rounded-md p-4">
                    <div class="flex items-center justify-between pb-3">
                        <img src="${img}" alt="">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1">${post.priority}</h3>
                    </div>
                    <div class="h-30">
                        <h2 class="text-md font-semibold pb-1">${post.title}</h2>
                        <p class="text-sm text-gray-500 pb-1">${post.description}</p>
                    </div>
                    <div class="flex items-center gap-2 py-4">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1 border">${post.labels[0]}</h3>
                        <h3 class="bg-amber-100 rounded-full text-sm text-amber-700 px-4 py-1 border">${post.labels[1]}</h3>
                    </div>
                    <div class="text-gray-300 w-74 border-t items-center -mx-4"></div>
                    <p class="text-sm text-gray-500 pt-4">#${post.id} ${post.author}</p>
                    <p class="text-sm text-gray-500 py-1">${post.createdAt}</p>
                </div>
        `;
        container.appendChild(card);
    });
} 

function toggleStyleOpen(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-open');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
    
    let count = 0;
    const container = document.getElementById('postContainer');
    container.innerHTML = "";
    allPost.filter(post => post.status === "open").forEach((post) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 border-green-500 shadow-md bg-base-100 rounded-md p-4">
                    <div class="flex items-center justify-between pb-3">
                        <img src="./assets/Open-Status.png" alt="">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1">${post.priority}</h3>
                    </div>
                    <div class="h-30">
                        <h2 class="text-md font-semibold pb-1">${post.title}</h2>
                        <p class="text-sm text-gray-500 pb-1">${post.description}</p>
                    </div>
                    <div class="flex items-center gap-2 py-4">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1 border">${post.labels[0]}</h3>
                        <h3 class="bg-amber-100 rounded-full text-sm text-amber-700 px-4 py-1 border">${post.labels[1]}</h3>
                    </div>
                    <div class="text-gray-300 w-74 border-t items-center -mx-4"></div>
                    <p class="text-sm text-gray-500 pt-4">#${post.id} ${post.author}</p>
                    <p class="text-sm text-gray-500 py-1">${post.createdAt}</p>
                </div>
        `;
        container.appendChild(card);
        count++;
    });
    issue.innerText = count;
}  

function toggleStyleClosed(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-closed');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
    
    let count = 0;
    const container = document.getElementById('postContainer');
    container.innerHTML = "";
    allPost.filter(post => post.status === "closed").forEach((post) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 border-purple-500 shadow-md bg-base-100 rounded-md p-4">
                    <div class="flex items-center justify-between pb-3">
                        <img src="./assets/Closed-Status.png" alt="">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1">${post.priority}</h3>
                    </div>
                    <div class="h-30">
                        <h2 class="text-md font-semibold pb-1">${post.title}</h2>
                        <p class="text-sm text-gray-500 pb-1">${post.description}</p>
                    </div>
                    <div class="flex items-center gap-2 py-4">
                        <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1 border">${post.labels[0]}</h3>
                        <h3 class="bg-amber-100 rounded-full text-sm text-amber-700 px-4 py-1 border">${post.labels[1]}</h3>
                    </div>
                    <div class="text-gray-300 w-74 border-t items-center -mx-4"></div>
                    <p class="text-sm text-gray-500 pt-4">#${post.id} ${post.author}</p>
                    <p class="text-sm text-gray-500 py-1">${post.createdAt}</p>
                </div>
        `;
        container.appendChild(card);
        count++;
    });
    issue.innerText = count;
}

// store data globally
let allPost = [];
const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            allPost = data.data;
            // console.log(allPost);
            // displayPost();
            toggleStyleAll();
        });
    
        
// const container = document.getElementById('postContainer');
// container.innerHTML = "";
// const displayPost = () => {
//     const container = document.getElementById('postContainer');
//     container.innerHTML = "";
//     allPost.forEach((post) => {
//         const card = document.createElement("div");

//         let img = 
//         post.status === "open" 
//         ? "./assets/Open-Status.png"
//         : "./assets/Closed-Status.png";

//         let border =
//         post.status === "open" 
//         ? "border-green-500"
//         : "border-purple-500";

//         card.innerHTML = `
//             <div class="cards w-74 h-80 border-t-4 ${border} shadow-md bg-base-100 rounded-md p-4">
//                     <div class="flex items-center justify-between pb-3">
//                         <img src="${img}" alt="">
//                         <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1">${post.priority}</h3>
//                     </div>
//                     <div class="h-30">
//                         <h2 class="text-md font-semibold pb-1">${post.title}</h2>
//                         <p class="text-sm text-gray-500 pb-1">${post.description}</p>
//                     </div>
//                     <div class="flex items-center gap-2 py-4">
//                         <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1 border">${post.labels[0]}</h3>
//                         <h3 class="bg-amber-100 rounded-full text-sm text-amber-700 px-4 py-1 border">${post.labels[1]}</h3>
//                     </div>
//                     <div class="text-gray-300 w-74 border-t items-center -mx-4"></div>
//                     <p class="text-sm text-gray-500 pt-4">#${post.id} ${post.author}</p>
//                     <p class="text-sm text-gray-500 py-1">${post.createdAt}</p>
//                 </div>
//         `;
//         container.appendChild(card);
//     });        
// }; 
