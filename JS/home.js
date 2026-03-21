// get all the toggle buttons to use in toggleStyle function (toggle part)
const toggleAll = document.getElementById("toggle-all")
const toggleOpen = document.getElementById("toggle-open")
const toggleClosed = document.getElementById("toggle-closed");

toggleAll.classList.add('bg-[#4A00FF]', 'text-white')

// get tabs by id
    // const allTab = document.getElementById('all-tab');
    // const openTab = document.getElementById('open-tab');
    // const closedTab = document.getElementById('closed-tab');
    // const displayJob = document.getElementById('displayJob');
// get h3 id to display issue
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
} 


function toggleStyleOpen(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-open');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
    
    // get the count
    const count = countPostStatus();
    console.log(count.close);
    issue.innerText = count.open;

}  

function toggleStyleClosed(){

    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-closed');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
    // get the count
    const count = countPostStatus();
    console.log(count.close);
    issue.innerText = count.close;
}

// store data globally
let allPost = [];
const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            allPost = data.data;
            console.log(allPost);
        });
    
    // const displayPost = (posts) => {
    
    //     posts.data.forEach((post) => {
            
    //     });  
        
    // }; 

    const countPostStatus = () => {
        let open = 0, close = 0;
        allPost.forEach((post) => {
            if(post.status === 'open') open++;
            else if(post.status === 'closed') close++;
        });  
        return {open , close}
    }; 