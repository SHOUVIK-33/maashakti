const $=s=>document.querySelector(s),NS="http://www.w3.org/2000/svg";let opener;
const m=$("#mandala");m.innerHTML='<circle class="ring" r="150"/><circle class="ring" r="95"/><circle class="ring" r="40"/>';
ND.forEach((d,i)=>{const a=i/9*2*Math.PI-Math.PI/2,x=Math.cos(a)*150,y=Math.sin(a)*150,g=document.createElementNS(NS,"g");
g.setAttribute("class","p");g.setAttribute("tabindex","0");g.setAttribute("role","button");g.setAttribute("aria-label",`Day ${d.day}: ${d.n}`);
g.innerHTML=`<circle cx="${x}" cy="${y}" r="26" fill="${d.hue}"/><text x="${x}" y="${y-2}">${d.n.slice(0,9)}</text><text x="${x}" y="${y+11}">Day ${d.day}</text>`;
g.onclick=()=>openD(i);g.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openD(i)}};m.append(g)});
$("#cards").innerHTML=ND.map((d,i)=>`<button class="card" style="--c:${d.hue}" data-i="${i}"><small>Day ${d.day}</small><h3>${d.n}</h3><p>${d.t}</p></button>`).join("");
$("#cards").onclick=e=>{const c=e.target.closest(".card");if(c)openD(+c.dataset.i)};
function show(t,s,h){opener=document.activeElement;$("#mt").textContent=t;$("#ms").textContent=s;$("#mb").innerHTML=h;$("#modal").hidden=false;$("#close").focus()}
function openD(i){const d=ND[i];show(d.n,`Day ${d.day} of Navaratri | ${d.t}`,`<p>${d.story}</p><dl><dt>Vehicle</dt><dd>${d.ride}</dd><dt>Holds</dt><dd>${d.hold}</dd><dt>Chakra</dt><dd>${d.chakra}</dd><dt>Planet</dt><dd>${d.planet}</dd><dt>Offering</dt><dd>${d.offer}</dd></dl><h4>Mantra</h4><blockquote>${d.mantra}</blockquote><h4>Dhyana shloka</h4><blockquote>${d.dhyana}</blockquote>`)}
const cn=p=>{const l=p.loc.split(", ").pop();return/Pakistan|Bangladesh|Nepal|Tibet|Sri Lanka/.test(l)?l:"India"};
[...new Set(P.map(cn))].sort().forEach(c=>$("#c").add(new Option(c,c)));
function rp(){const q=$("#q").value.toLowerCase(),c=$("#c").value;
const r=P.map((p,i)=>[p,i]).filter(([p])=>(!c||cn(p)===c)&&(!q||Object.values(p).join(" ").toLowerCase().includes(q)));
$("#plist").innerHTML=r.map(([p,i])=>`<button class="row" data-i="${i}"><span class="mut">${i+1}</span><b>${p.n}</b><span>${p.loc}</span><span class="part">${p.part}</span></button>`).join("")||'<p class="mut">No peetha matches. Clear the search or filter.</p>';
$("#count").textContent=r.length+" of 51"}
$("#plist").onclick=e=>{const b=e.target.closest(".row");if(!b)return;const p=P[+b.dataset.i];
show(p.n+" Peetha",p.loc,`<dl><dt>Body part</dt><dd>${p.part}</dd><dt>Shakti</dt><dd>${p.sh}</dd><dt>Bhairava</dt><dd>${p.bh}</dd><dt>Country</dt><dd>${cn(p)}</dd></dl><p class="mut">Traditional list; some texts name different forms or sites.</p><blockquote>Om Aim Hrim Klim Chamundayai Vichche</blockquote><p class="mut">The Navarna mantra of the Devi Mahatmya.</p>`)};
$("#q").oninput=rp;$("#c").onchange=rp;rp();
const T=[["Devi Mahatmya","Part of the Markandeya Purana; 700 verses in 13 chapters (Durga Saptashati) telling the slaying of Madhu-Kaitabha, Mahishasura and Shumbha-Nishumbha."],["Devi Bhagavata Purana","Presents Devi as the supreme reality and lists many Shakti Peethas."],["Devi Sukta (Rig Veda 10.125)","Earliest hymn in which the Goddess declares herself the power behind all."],["Kalika Purana","Names the four Adi Peethas and tells the Sati legend."],["Tantra Chudamani","Source of the 51 peetha list with Shakti and Bhairava."],["Soundarya Lahari","Adi Shankaracharya's hymn on Shakti and Sri Vidya."]];
$("#tx").innerHTML=T.map(t=>`<div class="card"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join("");
const cl=()=>{$("#modal").hidden=true;opener&&opener.focus()};$("#close").onclick=cl;$("#modal").onclick=e=>{if(e.target.id==="modal")cl()};document.onkeydown=e=>{if(e.key==="Escape"&&!$("#modal").hidden)cl()};
