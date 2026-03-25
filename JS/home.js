// get all the toggle buttons to use in toggleStyle function (toggle part)
const toggleAll = document.getElementById("toggle-all")
const toggleOpen = document.getElementById("toggle-open")
const toggleClosed = document.getElementById("toggle-closed");

toggleAll.classList.add('bg-[#4A00FF]', 'text-white')

const issue = document.getElementById('issue');    

function toggleStyleAll(posts = allPost){    
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
    posts.forEach((post) => {
        const card = document.createElement("div");

        let img = 
        post.status === "open" 
        ? "./assets/Open-Status.png"
        : "./assets/Closed-Status.png";

        let border =
        post.status === "open" 
        ? "border-green-500"
        : "border-purple-500";

        let priorityStyle =
        post.priority === "high" 
        ? "bg-red-100 text-red-500"
        :post.priority === "medium"
        ? "bg-amber-100 text-amber-500"
        : "bg-gray-100 text-gray-500";

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 ${border} shadow-md bg-base-100 rounded-md p-4 cursor-pointer">
                    <div class="flex items-center justify-between pb-3">
                        <img src="${img}" alt="">
                        <h3 class="${priorityStyle} rounded-full text-sm px-4 py-1">${post.priority}</h3>
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
                    <p class="card-id text-sm text-gray-500 pt-4" data-id="${post.id}">#${post.id} ${post.author}</p>
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

        let priorityStyle =
        post.priority === "high" 
        ? "bg-red-100 text-red-500"
        :post.priority === "medium"
        ? "bg-amber-100 text-amber-500"
        : "bg-gray-100 text-gray-500";

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 border-green-500 shadow-md bg-base-100 rounded-md p-4 cursor-pointer">
                    <div class="flex items-center justify-between pb-3">
                        <img src="./assets/Open-Status.png" alt="">
                        <h3 class="${priorityStyle} rounded-full text-sm px-4 py-1">${post.priority}</h3>
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
                    <p class="card-id text-sm text-gray-500 pt-4" data-id="${post.id}">#${post.id} ${post.author}</p>
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

        let priorityStyle =
        post.priority === "high" 
        ? "bg-red-100 text-red-500"
        :post.priority === "medium"
        ? "bg-amber-100 text-amber-500"
        : "bg-gray-100 text-gray-500";

        card.innerHTML = `
            <div class="cards w-74 h-80 border-t-4 border-purple-500 shadow-md bg-base-100 rounded-md p-4 cursor-pointer">
                    <div class="flex items-center justify-between pb-3">
                        <img src="./assets/Closed-Status.png" alt="">
                        <h3 class="${priorityStyle} rounded-full text-sm px-4 py-1">${post.priority}</h3>
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
                    <p class="card-id text-sm text-gray-500 pt-4" data-id="${post.id}">#${post.id} ${post.author}</p>
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
            toggleStyleAll(allPost);

            //
            const search = document.getElementById('searchBox');
            search.addEventListener("input", (event) => {
                const searchCard = event.target.value.toLowerCase().trim();
                console.log(searchCard)
                if (searchCard.length >= 3) {
                    const filterCard = allPost.filter(post =>
                        post.title.toLowerCase().includes(searchCard)
                    );
                    toggleStyleAll(filterCard);                    
                }
                else {
                    toggleStyleAll(allPost);
                    // console.log(allPost) 
                }
            });
        });
    
        
const container = document.getElementById('postContainer');

container.addEventListener('click', function(event){
    let cardEvent = event.target.closest(".cards");
    if(!cardEvent) return;
    let parent = cardEvent.parentNode;
    const child = parent.querySelector(".card-id");
    const id = child.dataset.id;
    // console.log(parent);
    const getCard = allPost.find(post => post.id == id);
    // console.log(getCard);
    showPopup(getCard);
})

function showPopup(getCard){
    const popUp = document.createElement("div");
    popUp.className = "fixed inset-0 bg-black/50 flex items-center justify-center";

    const viewPopup = document.createElement("div");
    viewPopup.className = "bg-white w-165 h-100 rounded-md shadow-md p-6";
    let color =
        getCard.status === "open" 
        ? "bg-green-500"
        : "bg-purple-500";
    
    let priorityStyle =
        getCard.priority === "high" 
        ? "bg-red-500 text-white"
        :getCard.priority === "medium"
        ? "bg-amber-500 text-white"
        : "bg-gray-500 text-white";
    viewPopup.innerHTML = `
        <div class=""> 
            <h2 class="text-lg font-bold pb-3">${getCard.title}</h2>
            <div class="flex items-center gap-2">
                <h3 class=" ${color} rounded-full text-sm text-white px-3 pb-1">${getCard.status}</h3>
                <p class="text-sm text-gray-500"><span>•</span> Opened by ${getCard.author}  <span>•</span>  ${getCard.createdAt}</p>
            </div>
            <div class="flex items-center gap-2 py-5">
                <h3 class="bg-red-100 rounded-full text-sm text-red-500 px-4 py-1 border">${getCard.labels[0]}</h3>
                <h3 class="bg-amber-100 rounded-full text-sm text-amber-700 px-4 py-1 border">${getCard.labels[1]}</h3>
            </div>
            <p class="text-sm text-gray-500 h-16">${getCard.description}</p>
            <div class="h-20 w-full bg-base-200 rounded-md my-3 p-2 px-4 flex items-center gap-50 bg-gray-100">
                <div class="flex flex-col">
                    <p class="text-gray-500">Assignee:</p>
                    <p class="font-semibold">${getCard.assignee}</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-gray-500">Priority:</p>
                    <p class="${priorityStyle} rounded-full text-sm px-3 pb-1">${getCard.priority}</p>
                </div>
            </div>
            <div class="grid place-items-end py-2">
                <button class="text-white bg-[#4A00FF] py-2 px-5 rounded-md cursor-pointer closeBtn">Close</button>
            </div>
        </div>
    `;

    popUp.appendChild(viewPopup);
    document.body.appendChild(popUp);

    viewPopup.querySelector(".closeBtn").onclick = () => popUp.remove();
}

