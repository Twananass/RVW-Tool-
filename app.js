const els = {};
document.querySelectorAll('[id]').forEach(e=>els[e.id]=e);

function showView(view){
  document.querySelectorAll('section').forEach(s=>s.classList.add('hidden'));
  document.getElementById(view+'View').classList.remove('hidden');
}

const factcodes = [
  {
    code:"A1",
    title:"Maximumsnelheid",
    template:"Ik zag dat bestuurder de maximumsnelheid overschreed op {{locatie}}."
  },
  {
    code:"R305",
    title:"Voetpad niet gebruiken",
    template:"Ik zag dat betrokkene als voetganger niet het voetpad gebruikte op {{locatie}}."
  }
];

function renderList(){
  els.results.innerHTML = "";

  factcodes.forEach(f=>{
    const div = document.createElement("div");
    div.className="card";
    div.innerHTML = `<b>${f.code}</b><br>${f.title}`;
    div.onclick = ()=>openFact(f);
    els.results.appendChild(div);
  });
}

function openFact(f){
  els.preview.value = f.template.replace("{{locatie}}","[locatie invullen]");
  window.scrollTo({top:200, behavior:"smooth"});
}

renderList();
