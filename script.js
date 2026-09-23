const toogleButton = document.getElementById('toggle-theme');

const htmElement = document.body;

toogleButton.addEventListener('click', ()=>{

    htmElement.classList.toggle("dark-mode");
   
 
})

//conteudo dentro da pasta

"use strict";


const SKILLS_FOLDERS =[
    { key: "programacao", label:"Programação", icon: "icons/sinais-de-codigo-de-programacao.png", files: [
        {name: "C#", icon: "icons/csharp.png", ext: ".c#"},
        {name: "C++", icon: "icons/cpp-1.png", ext: ".c++"},
        {name: "MySQL", icon: "icons/mysql.png", ext: ".sql"},
        {name: "Java", icon: "icons/icons8-java-50.png", ext: ".java"},
    ]},

    {key: "web", label:"Web", icon: "icons/internet.png", files: [
        {name: "HTML", icon: "icons/html.png", ext: ".html"},
        {name: "CSS", icon: "icons/css.png", ext: ".css"},
        {name: "JavaScript", icon: "icons/javascript.png", ext: ".js"},
        {name: "React", icon: "icons/react.svg", ext: ".jsx"},
]},

{key: "design-app", label:"Design/App", icon: "icons/1063411.png", files: [
    {name: "Figma", icon: "icons/figma.svg", ext: ".fig"},
    {name: "PhotoShop", icon: "icons/photoshop.png", ext: ".psd"},
    {name: "Krita", icon: "icons/35e84f9d85352609d20df7d7a73166bc2019b6eb-removebg-preview.png", ext: ".kra"},
    {name: "Blender", icon: "icons/blender.png", ext: ".blend"},
]},
    
];


function buildSkillFile(file, index, total){
 const mid = (total - 1) / 2;
 const off = index - mid;
 const arch = mid === 0 ? 1 : 1 - Math.abs(off) / mid;
 const delay = (Math.abs(off) * 0.045).toFixed(3); 
 
 const el = document.createElement("span");
 el.className = "ff-file";
 el.style.setProperty("--off", String(off));
 el.style.setProperty("--arch", arch.toFixed(3));
 el.style.setProperty("--fd", delay + "s");

 el.innerHTML =`
 <span class="ff-icon"><img src="${file.icon}" class="folder-img"/></span>
 <span class="ff-name">${file.name}</span>
 <span class="ff-ext">${file.ext}</span>
 `;
 return el;
}

function buildSkillFolder(folder){
    const wrap = document.createElement("div");
    wrap.className = "skill-folder";
    wrap.dataset.key = folder.key;

    const filesWrap = document.createElement("div");
    filesWrap.className = "folder-files";
    folder.files.forEach((f, i) => filesWrap.appendChild(buildSkillFile(f, i, folder.files.length)));

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "folder-btn";
    btn.innerHTML =`
    <span class="folder-shape">
    <span class="folder-tab"></span>
    <span class="folder-back">
    <span class="folder-back1">
    </span>
    <span class="folder-front">
    <span class="folder-ico">
    <img src="${folder.icon}" class="folder-center-img"/>
    
    </span>
    <span>
    <div class="folder-label">${folder.label}</div>
    <div class="folder-detail"${folder.files.length}></div>
    </span>
    </span>
    </span>
    `;
btn.addEventListener("click", () => toggleFolder(wrap));
wrap.append(filesWrap, btn);
return wrap;
}

function closeOthers(expect){
    document.querySelectorAll(".skill-folder.open").forEach((el) =>{
        if (el !== expect) el.classList.remove("open");
    })
}

function toggleFolder(el){
    const willOpen = !el.classList.contains("open");
    closeOthers(el);
    el.classList.toggle("open", willOpen);
}

const container = document.getElementById('habilidadeFolders');
SKILLS_FOLDERS.forEach((f) => container.appendChild(buildSkillFolder(f)));


