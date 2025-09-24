if('serviceWorker' in navigator){navigator.serviceWorker.register('/sw.js');}
const addModal=document.getElementById('addModal');
const addBtn=document.getElementById('addMealBtn');
const closeBtn=addModal.querySelector('.close');
const saveBtn=document.getElementById('saveBtn');
const entriesDiv=document.getElementById('entries');
const tabBtns=document.querySelectorAll('.tabBtn');
addBtn.onclick=()=>addModal.style.display='block';
closeBtn.onclick=()=>addModal.style.display='none';
window.onclick=e=>{if(e.target==addModal)addModal.style.display='none';};
tabBtns.forEach(btn=>btn.onclick=()=>{tabBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderEntries();});
async function renderEntries(){entriesDiv.innerHTML='';const all=await getAllEntries();const tab=document.querySelector('.tabBtn.active').dataset.tab;const todayStr=new Date().toISOString().slice(0,10);const filtered=tab=='today'?all.filter(e=>e.date==todayStr):all;for(const e of filtered){const div=document.createElement('div');div.className='entry-card';let img=document.createElement('img');if(e.blobIds?.length){const blob=await getBlob(e.blobIds[0]);img.src=URL.createObjectURL(blob);img.onload=()=>URL.revokeObjectURL(img.src);}else{img.src='/icon-192.png';}const info=document.createElement('div');info.className='info';info.innerHTML=`<p><strong>${e.meal}</strong> - ${e.date}</p><p>${e.note}</p>`;div.appendChild(img);div.appendChild(info);entriesDiv.appendChild(div);}};
saveBtn.onclick=async()=>{const date=document.getElementById('dateInput').value;const meal=document.getElementById('mealSelect').value;const note=document.getElementById('noteInput').value;const files=document.getElementById('fileInput').files;const blobIds=[];for(const f of files){const b=await compressImage(f);const id=await saveBlob(b);blobIds.push(id);}await saveEntry({id:'e_'+Date.now()+'_'+Math.random().toString(36).slice(2,6),date,meal,note,blobIds,createdAt:new Date().toISOString()});addModal.style.display='none';document.getElementById('noteInput').value='';document.getElementById('fileInput').value='';renderEntries();};
async function compressImage(file){return file;} // placeholder, replace with real compressImage code from previous answer
renderEntries();
