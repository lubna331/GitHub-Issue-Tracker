// get all the toggle buttons to use in toggleStyle function (toggle part)
const toggleAll = document.getElementById("toggle-all")
const toggleOpen = document.getElementById("toggle-open")
const toggleClosed = document.getElementById("toggle-closed");

toggleAll.classList.add('bg-[#4A00FF]', 'text-white')

function toggleStyleAll(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-all');
    selected.classList.add('bg-[#4A00FF]', 'text-white')

    // get tabs by id
    // const allTab = document.getElementById('cards');
    // const interviewTab = document.getElementById('interview-tab');
    // const rejectedTab = document.getElementById('rejected-tab');
    // const displayJob = document.getElementById('displayJob');

    // initially hide display for all tab
    // allTab.style.display = "none";
    // interviewTab.style.display = "none";
    // rejectedTab.style.display = "none";
} 


function toggleStyleOpen(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-open');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
}  

function toggleStyleClosed(){
    // remove any activated color from toggle buttons first to set new one
    toggleAll.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleOpen.classList.remove('bg-[#4A00FF]', 'text-white')
    toggleClosed.classList.remove('bg-[#4A00FF]', 'text-white')

    // set new color on clicked button
    const selected = document.getElementById('toggle-closed');
    selected.classList.add('bg-[#4A00FF]', 'text-white')
}