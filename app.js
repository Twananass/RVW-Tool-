const els={};
document.querySelectorAll('[id]').forEach(e=>els[e.id]=e);

function showView(v){
  document.querySelectorAll('section').forEach(s=>s.classList.add('hidden'));
  document.getElementById(v+'View').classList.remove('hidden');
}

const factcodes=[
{code:'A1',title:'Test',template:'Ik zag {{gedraging}}',fields:['gedraging']}
];

function render(){
  els.results.innerHTML='';
  factcodes.forEach(f=>{
    const d=document.createElement('div');
    d.textContent=f.code;
    d.onclick=()=>openFact(f);
    els.results.appendChild(d);
  });
}

function openFact(f){
  els.preview.value=f.template.replace('{{gedraging}}','gedraging');
}

render();
