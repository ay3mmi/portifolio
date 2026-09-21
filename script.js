const toogleButton = document.getElementById('toggle-theme');

const htmElement = document.body;

toogleButton.addEventListener('click', ()=>{

    htmElement.classList.toggle("dark-mode");
   
 
})

//conteudo dentro da pasta
const skills_folders=[
    { key: "programacao", label:"Programação", icon: "", files: [
        {name: "C#", icon: "", ext: ".c#"},
        {name: "C++", icon: "", ext: ".c++"},
        {name: "MySQL", icon: "", ext: ".sql"},
    ]},

    {key: "web", label:"Web", icon: "", files: [
        {name: "HTML", icon: "", ext: ".html"},
        {name: "CSS", icon: "", ext: ".css"},
        {name: "JavaScript", icon: "", ext: ".js"},
        {name: "React", icon: "", ext: ".jsx"},
]},

{key: "design-app", label:"Design/App", icon: "", files: [
    {name: "Figma", icon: "", ext: ".fig"},
    {name: "PhotoShop", icon: "", ext: ".psd"},
    {name: "Krita", icon: "", ext: ".js"},
    {name: "Blender", icon: "", ext: ".jsx"},
]},
    
];

function buildSkillFile(file,index,total){
    const mid =(total-1)/2;
    const off = index - mid;
    const arch = mid === 0 ? 1 : 1 - Math.abs(off) / mid;
    const delay = (Math.abs(off)* 0.045).toFixed(3);

    const el = document.createElement("span");
    el.className= "ff-file";
    el.style.setProperty("--off", String(off));
    el.style.setProperty("--arch", arch.toFixed(3));
    el.style.setProperty("--fd", delay + "5");

    el.innerHTML= `
    <span class"ff-icon">${file.icon}</span>
    <span class"ff-icon">${file.name}</span>
    <span class"ff-icon">${file.ext}</span>
    `;
    return el;
}

function buildSkillFolder(folder){

    const wrap = document.createElement("div");
    wrap.className = "skill-folder";
    wrap.dataset.key = folder.key;

    const filesWrap = document.createElement("div");
    filesWrap.className = "folder-files";
    folder.dataset.key = folder.key;

    const btn = document.createElement("button");
    btn.type ="button";
    btn.className = "folder-btn";
    btn.innerHTML =`
    <span class"folder-shape">
    <span class "folder-tap"></span>
    <span class "folder-back"></span>
    <span class "folder-front">
    <span class "folder-ico">${folder.icon}</span>
    <span>
    <div class "folder-label">${folder.label}</div>
    <div class "folder-detal">${folder.files.length} skills</div>
    </span>
    </span>
    </span>
    `;

    btn.addEventListener("click", () => toogleFolder(wrap);)

    wrap.append(filesWrap,btn);
    return wrap;
}

function closeOthers(el){

    const willOpen = !el.classList.contains("open");
    closeOthers(el);
    el.classList.toggle("open", willOpen);
}