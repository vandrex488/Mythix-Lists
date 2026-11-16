const HTML=[
"<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"",
"width=device-width,initial-scale=1\"><title>MythixGMD Lists</title>\n<style>\n:root{--bg:#070",
"70f;--card:#12122a;--ac:#00e5ff;--ac2:#b14bff;--tx:#e8e8ff;--mu:#8888b0}\n*{box-sizing:bord",
"er-box}body{margin:0;background:radial-gradient(circle at 20% 0,#1a0f3a,var(--bg) 55%);col",
"or:var(--tx);font:16px system-ui,sans-serif;min-height:100vh}\nheader{display:flex;justify-",
"content:space-between;align-items:center;padding:16px 20px;flex-wrap:wrap;gap:10px;max-wid",
"th:900px;margin:0 auto}\nh1{margin:0;font-size:26px;display:inline-flex;align-items:center;",
"gap:2px;background:linear-gradient(90deg,var(--ac),var(--ac2));-webkit-background-clip:tex",
"t;background-clip:text;color:transparent}\n.dx{display:inline-flex;align-items:center;justi",
"fy-content:center;width:28px;height:28px;margin:0 1px;vertical-align:middle;filter:drop-sh",
"adow(0 0 6px rgba(0,229,255,.55))}\nmain{max-width:900px;margin:0 auto;padding:0 16px 60px}",
"\nbutton,input,select,textarea{font:inherit;color:var(--tx);background:var(--card);border:1",
"px solid #2a2a55;border-radius:10px;padding:10px 14px}\nbutton{cursor:pointer}button.p{back",
"ground:linear-gradient(90deg,var(--ac),var(--ac2));color:#000;border:0;font-weight:700}\n.t",
"abs,.bar{display:flex;gap:8px;margin:10px 0;flex-wrap:wrap}.tabs button.on{border-color:va",
"r(--ac);color:var(--ac)}\n.bar input{flex:1;min-width:150px}\n.row{display:flex;flex-wrap:wr",
"ap;gap:6px 12px;align-items:center;background:var(--card);border:1px solid #23234a;border-",
"radius:12px;padding:10px 14px;margin:6px 0}\n.row b{width:70px;color:var(--ac)}.row.e{opaci",
"ty:.4}.row small{color:var(--mu)}.row .i{flex:1;min-width:0}.row .i div{overflow-wrap:anyw",
"here}\n.pager{display:flex;justify-content:center;align-items:center;gap:12px;margin:14px 0",
"}\nsection.box{background:var(--card);border:1px solid #2a2a55;border-radius:14px;padding:1",
"6px;margin:24px 0}\nsection.box h2{margin:0 0 10px;font-size:20px}\nlabel{display:block;marg",
"in:12px 0 4px;color:var(--mu);font-size:14px}\n.md input,.md textarea,.md select{width:100%",
";background:#0b0b1e}\n.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1f",
"r));gap:8px}\n.sub{border:1px solid #2a2a55;border-radius:10px;padding:10px;margin:8px 0;fo",
"nt-size:14px;background:#0b0b1e}\n.sub div{margin:2px 0}\n#ov,#lv{position:fixed;inset:0;bac",
"kground:#000d;display:none;align-items:center;justify-content:center;z-index:9;padding:20p",
"x}\n#ov.on,#lv.on{display:flex}\n#ov .c,#lv .c{background:var(--card);border:1px solid var(-",
"-ac);border-radius:18px;padding:30px;max-width:420px;text-align:center;animation:pop .5s c",
"ubic-bezier(.2,1.4,.4,1)}\n@keyframes pop{from{transform:scale(.5);opacity:0}to{transform:s",
"cale(1);opacity:1}}\nsvg{width:90px;height:90px}circle.r{fill:none;stroke:var(--ac2);stroke",
"-width:4;stroke-dasharray:283;stroke-dashoffset:283;animation:d .7s .1s forwards}\npath.k{f",
"ill:none;stroke:var(--ac);stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke",
"-dasharray:60;stroke-dashoffset:60;animation:d .5s .7s forwards}\n@keyframes d{to{stroke-da",
"shoffset:0}}\n.md{position:fixed;inset:0;background:#000c;display:none;align-items:center;j",
"ustify-content:center;z-index:8;padding:16px}.md.on{display:flex}.md .c{background:var(--c",
"ard);border:1px solid #2a2a55;border-radius:16px;padding:20px;width:100%;max-width:520px;m",
"ax-height:90vh;overflow:auto}\nmain.lock{filter:blur(9px);pointer-events:none;user-select:n",
"one}#gt,#rv,#rc,#tb{position:fixed;inset:0;background:#0009;backdrop-filter:blur(4px);disp",
"lay:none;align-items:center;justify-content:center;z-index:30;padding:16px}#gt.on,#rv.on,#",
"rc.on,#tb.on{display:flex}#lv{z-index:40}\n</style></head><body>\n<header><h1>Mythi<span cla",
"ss=\"dx\" aria-label=\"X\"><svg viewBox=\"0 0 32 32\" style=\"width:28px;height:28px\"><defs><line",
"arGradient id=\"dg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#00e5ff\"/><st",
"op offset=\"100%\" stop-color=\"#b14bff\"/></linearGradient></defs><polygon points=\"16,2 30,16",
" 16,30 2,16\" fill=\"#12122a\" stroke=\"url(#dg)\" stroke-width=\"2.5\"/><path d=\"M11 11L21 21M21",
" 11L11 21\" stroke=\"url(#dg)\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg></span>GMD Lis",
"ts</h1><div style=\"display:flex;gap:8px;flex-wrap:wrap\"><span id=\"who\" style=\"color:var(--",
"mu);align-self:center\"></span><a href=\"https://youtube.com/@mythixgmd?si=f2x_3Yzz0fE66hp2\"",
" target=\"_blank\" rel=\"noopener\" style=\"display:inline-block;background:#ff0033;color:#fff;",
"font-weight:700;text-decoration:none;border-radius:10px;padding:10px 14px;align-self:cente",
"r\">\u25b6 YouTube</a><button class=\"p\" id=\"sbtn\">Submit a level</button><button id=\"lg\">Owner L",
"ogin</button><button id=\"vs\" hidden>Submissions</button><button id=\"va\" hidden>Approved Su",
"bmissions</button><button id=\"vm\" hidden>Mods</button><button id=\"vu\" hidden>Users</button",
"><button id=\"vt\" hidden>Timeout</button><button id=\"bk\" hidden>Backup</button><button id=\"",
"lo\" hidden>Log out</button></div></header>\n<main class=\"lock\">\n\n<div class=\"tabs\"><button ",
"data-l=\"decor\" class=\"on\">Decor List</button><button data-l=\"difficulty\">Difficulty List</",
"button><button data-l=\"layout\">Layout List</button></div>\n<div class=\"bar\"><input id=\"q\" p",
"laceholder=\"Search name, ID or creator\"></div>\n<div id=\"list\"></div>\n<div class=\"pager\" id",
"=\"pager\"><button id=\"pv\">\u2039 Prev</button><span id=\"pi\"></span><button id=\"nx\">Next \u203a</butto",
"n></div>\n\n\n\n\n</main>\n\n<div class=\"md\" id=\"fm\"><div class=\"c\"><h2 style=\"margin-top:0\">Subm",
"it your level</h2><form id=\"sf\">\n<label>Which list?</label><select id=\"f0\"><option value=\"",
"decor\">Decor List</option><option value=\"difficulty\">Difficulty List</option><option value",
"=\"layout\">Layout List</option></select>\n<label>1. What's the id, and name of your level.</",
"label><input id=\"f1\" required maxlength=\"300\">\n<label>2. What difficulty do you think it i",
"s, and any comparisons?</label><textarea id=\"f2\" required maxlength=\"300\"></textarea>\n<lab",
"el>3. What spot do you think is suitable for this level?</label><input id=\"f3\" required ma",
"xlength=\"300\">\n<label>4. What is your username in gd, and your yt handle?</label><input id",
"=\"f4\" required maxlength=\"200\">\n<label>5. (OPTIONAL) If you have a discord username, drop ",
"it here.</label><input id=\"f5\" maxlength=\"100\">\n<p><button class=\"p\" id=\"sb\">Submit</butto",
"n> <button type=\"button\" id=\"fc\">Cancel</button></p>\n</form></div></div>\n<div class=\"md\" i",
"d=\"ed\"><div class=\"c\"><h2 id=\"et\" style=\"margin-top:0\">Edit slot</h2>\n<label>Slot #</label",
"><input id=\"sp\" type=\"number\" min=\"1\" max=\"10000\">\n<label>Level ID</label><input id=\"sid\">",
"<label>Level name</label><input id=\"sn\"><label>Creator</label><input id=\"sc\">\n<p><button c",
"lass=\"p\" id=\"bs\">Save</button> <button id=\"br\">Remove</button> <button id=\"ec\">Close</butt",
"on></p>\n<label>Move this level to slot #</label><div style=\"display:flex;gap:8px\"><input i",
"d=\"mt\" type=\"number\" min=\"1\" max=\"10000\" style=\"flex:1;min-width:0;width:auto\"><button id=",
"\"bm\">Move</button></div></div></div>\n<div class=\"md\" id=\"sm\"><div class=\"c\"><h2 style=\"mar",
"gin-top:0\">Submitted forms</h2><div id=\"subs\"></div><p><button id=\"smc\">Close</button> <bu",
"tton id=\"rs\">Refresh</button></p></div></div>\n<div class=\"md\" id=\"am\"><div class=\"c\"><h2 s",
"tyle=\"margin-top:0\">Approved submissions</h2><div id=\"apps\"></div><p><button id=\"amc\">Clos",
"e</button></p></div></div>\n<div class=\"md\" id=\"mm\"><div class=\"c\"><h2 style=\"margin-top:0\"",
">Mods <span id=\"mc\" style=\"color:var(--mu);font-size:14px\"></span></h2><input id=\"mq\" plac",
"eholder=\"Search members\"><div id=\"mlist\"></div><p><button id=\"mmc\">Close</button></p></div",
"></div>\n<div class=\"md\" id=\"cm\"><div class=\"c\"><h2 id=\"ch\" style=\"margin-top:0;overflow-wr",
"ap:anywhere\">Comments</h2><div id=\"cl\"></div><textarea id=\"ct\" maxlength=\"300\" placeholder",
"=\"Write a comment...\" style=\"width:100%;background:#0b0b1e;margin-top:8px\"></textarea><p><",
"button class=\"p\" id=\"cs\">Post</button> <button id=\"cc\">Close</button></p></div></div>\n<div",
" id=\"gt\"><div style=\"background:var(--card);border:1px solid var(--ac);border-radius:18px;",
"padding:26px;max-width:400px;width:100%;text-align:center\"><h2 id=\"gh\" style=\"margin-top:0",
"\">Log in</h2><p id=\"ah\" style=\"color:var(--mu);margin-top:0\"></p>\n<input id=\"an\" maxlength",
"=\"20\" placeholder=\"Your name\" style=\"width:100%;margin-bottom:8px\"><input id=\"ap\" type=\"pa",
"ssword\" placeholder=\"Password\" style=\"width:100%;margin-bottom:8px\"><div id=\"ae\" style=\"co",
"lor:#ff6b8a;min-height:22px;margin-bottom:8px\"></div>\n<button class=\"p\" id=\"ab\" style=\"wid",
"th:100%\">Log in</button>\n<p style=\"margin:12px 0 4px\"><a href=\"#\" id=\"at\" style=\"color:var",
"(--mu);font-size:14px\">New here? Sign up</a></p>\n<p style=\"margin:0\"><a href=\"#\" id=\"af\" s",
"tyle=\"color:var(--mu);font-size:14px\">Forgot password?</a> \u00b7 <a href=\"#\" id=\"gl\" style=\"co",
"lor:var(--mu);font-size:14px\">Owner login</a></p></div></div>\n<div id=\"tb\"><div style=\"bac",
"kground:var(--card);border:1px solid var(--ac);border-radius:18px;padding:26px;max-width:4",
"00px;width:100%;text-align:center\"><h2 id=\"tbh\" style=\"margin-top:0\">Timed out</h2><p id=\"","tbt\" style=\"color:var(--mu)\"></p><button id=\"tbl\">Log out</button></div></div>\n<div id=\"rv",
"\"><div style=\"background:var(--card);border:1px solid var(--ac);border-radius:18px;padding",
":26px;max-width:400px;width:100%;text-align:center\"><h2 style=\"margin-top:0\">Reset passwor",
"d</h2><p style=\"color:var(--mu);margin-top:0\">Enter your name, the recovery code you saved",
", and a new password.</p>\n<input id=\"rn\" placeholder=\"Your name\" style=\"width:100%;margin-",
"bottom:8px\"><input id=\"rk\" placeholder=\"Recovery code\" style=\"width:100%;margin-bottom:8px",
"\"><input id=\"rp\" type=\"password\" placeholder=\"New password (6+ characters)\" style=\"width:1",
"00%;margin-bottom:8px\"><div id=\"re\" style=\"color:#ff6b8a;min-height:22px;margin-bottom:8px",
"\"></div>\n<button class=\"p\" id=\"rb\" style=\"width:100%\">Reset password</button><p style=\"mar",
"gin:12px 0 0\"><a href=\"#\" id=\"rbk\" style=\"color:var(--mu);font-size:14px\">Back</a></p></di",
"v></div>\n<div id=\"rc\"><div style=\"background:var(--card);border:1px solid var(--ac);border",
"-radius:18px;padding:26px;max-width:400px;width:100%;text-align:center\"><h2 style=\"margin-",
"top:0\">Save your recovery code</h2><p style=\"color:var(--mu);margin-top:0\">If you forget y",
"our password, this code is the only way to reset it. It's shown once, so screenshot it or ",
"write it down.</p>\n<div id=\"rcc\" style=\"font:700 22px ui-monospace,monospace;letter-spacin",
"g:1px;padding:14px;background:#0b0b1e;border-radius:12px;margin:12px 0;user-select:all\"></",
"div>\n<button id=\"rcp\">Copy</button> <button class=\"p\" id=\"rcd\">I saved it</button></div></",
"div>\n<div class=\"md\" id=\"um\"><div class=\"c\"><h2 style=\"margin-top:0\">Members <span id=\"uc\"",
" style=\"color:var(--mu);font-size:14px\"></span></h2><input id=\"uq\" placeholder=\"Search mem",
"bers\"><div id=\"ulist\"></div><p><button id=\"umc\">Close</button></p></div></div>\n<div class=",
"\"md\" id=\"tm\"><div class=\"c\"><h2 style=\"margin-top:0\">Timeout a member</h2>\n<label>1. Pick ",
"the member</label><input id=\"tq\" placeholder=\"Search members\"><select id=\"tu\" size=\"5\" sty",
"le=\"margin-top:6px\"></select><p id=\"tsw\" style=\"display:none\"><button id=\"tsb\">Search</but",
"ton></p><div id=\"tr\"></div><div id=\"tsel\" style=\"margin:8px 0\"></div>\n<label>2. How long?<",
"/label><select id=\"td\"><option value=\"60000\">1 Minute</option><option value=\"300000\">5 Min",
"utes</option><option value=\"600000\">10 Minutes</option><option value=\"1200000\">20 Minutes<",
"/option><option value=\"3600000\">1 Hour</option><option value=\"86400000\">1 Day</option><opt",
"ion value=\"604800000\">1 Week</option><option value=\"1209600000\">2 Weeks</option><option va",
"lue=\"2592000000\">1 Month</option><option value=\"-1\">Permanent Ban</option><option value=\"c",
"\">Custom</option></select>\n<div id=\"tc\" style=\"display:none;gap:8px;margin-top:8px\"><input",
" id=\"tn\" type=\"number\" min=\"1\" placeholder=\"Amount\"><select id=\"tt\"><option value=\"60000\">",
"Minutes</option><option value=\"3600000\">Hours</option><option value=\"86400000\">Days</optio",
"n></select></div>\n<p><button class=\"p\" id=\"tgo\">Apply</button> <button id=\"tmc\">Close</but",
"ton></p>\n<div id=\"tlw\"><h3 style=\"margin-bottom:6px\">Currently timed out or banned</h3><di",
"v id=\"tl\"></div></div></div></div>\n<div id=\"lv\"><div class=\"c\"><h2 style=\"margin-top:0\">Ow",
"ner login</h2><input id=\"lp\" type=\"password\" placeholder=\"Password\" style=\"width:100%;marg",
"in-bottom:12px\"><div><button class=\"p\" id=\"lgo\">Log in</button> <button id=\"lc\">Cancel</bu",
"tton></div></div></div>\n<div id=\"ov\"><div class=\"c\"><svg viewBox=\"0 0 100 100\"><circle cla",
"ss=\"r\" cx=\"50\" cy=\"50\" r=\"45\"/><path class=\"k\" d=\"M30 52l14 14 27-30\"/></svg>\n<p style=\"fo",
"nt-size:18px;line-height:1.4\">Thank you for submitting your form, it is pending review. My",
"thixGMD will review it soon.</p>\n<button class=\"p\" id=\"ok\">Close</button></div></div>\n\n<sc",
"ript>\nconst $=s=>document.querySelector(s),PER=50,MAX=10000;\nlet L={decor:[],difficulty:[]",
",layout:[]},cur='decor',pg=0,q='',pw='',usr='',role='',sess='',visName='',visOK=false,need",
"Name=false,banUntil=0,bti=null;\ntry{pw=sessionStorage.getItem('pw')||'';usr=sessionStorage",
".getItem('usr')||''}catch(e){}\ntry{sess=localStorage.getItem('sess')||''}catch(e){}\nconst ",
"api=async(p,o={})=>{try{const r=await fetch('/api/'+p,{...o,headers:{'content-type':'appli",
"cation/json','x-pw':pw,'x-sess':sess}});return await r.json()}catch(e){return{error:\"Can't",
" reach the server. Try again.\",net:1}}};\nconst post=(p,b)=>api(p,{method:'POST',body:JSON.",
"stringify(b)});\nconst el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if",
"(x!=null)e.textContent=x;return e};\nconst toast=m=>{const d=el('div','',m);d.style.cssText",
"='position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#12122a;border",
":1px solid #00e5ff;padding:12px 18px;border-radius:12px;z-index:50;max-width:90%';document",
".body.append(d);setTimeout(()=>d.remove(),3500)};\nlet ecur='decor',efrom=0;const edit=(n,e",
")=>{ecur=cur;efrom=e?n:0;$('#et').textContent=(e?'Edit':'Add to')+' slot #'+n+' \u00b7 '+({deco",
"r:'Decor',difficulty:'Difficulty',layout:'Layout'}[cur]||'')+' List';$('#sp').value=n;$('#",
"sid').value=e?e.id:'';$('#sn').value=e?e.name:'';$('#sc').value=e?e.creator:'';$('#mt').va",
"lue='';$('#ed').classList.add('on')};\nasync function load(){\n  const r=await api('lists');",
"\n  if(r.net){$('#gt').classList.add('on');$('#ae').textContent=\"Can't reach the server. Th",
"e site's backend may not be set up yet.\";return}\n  if(role!=='owner'){\n    if(r.until){vis",
"OK=false;banUntil=r.until;role='';showAdmin();gate();return}\n    if(r.auth){banUntil=0;vis",
"OK=false;role='';if(sess){sess='';try{localStorage.removeItem('sess')}catch(e){}}showAdmin",
"();gate();return}\n    if(r.error){$('#gt').classList.add('on');$('#ae').textContent=r.erro",
"r;return}\n    banUntil=0;visName=r.name;visOK=true;role=r.mod?'mod':'';showAdmin()\n  }else",
" if(r.error){toast(r.error);return}\n  L=r;gate();render()}\nconst fmtT=ms=>{let s=Math.max(",
"0,Math.ceil(ms/1000));const d=Math.floor(s/86400);s%=86400;const h=Math.floor(s/3600);s%=3",
"600;const m=Math.floor(s/60);s%=60;return(d?d+'d ':'')+(h||d?h+'h ':'')+(m||h||d?m+'m ':'')",
"+s+'s'};\nfunction banTick(){clearInterval(bti);if(!banUntil)return;const upd=()=>{if(banU",
"ntil===-1){$('#tbh').textContent='Banned';$('#tbt').textContent='You have been permanently",
" banned from this site.';return}const left=banUntil-Date.now();if(left<=0){clearInterval(b",
"ti);banUntil=0;load();return}$('#tbh').textContent='Timed out';$('#tbt').textContent='You ",
"are timed out. Time left: '+fmtT(left)};upd();if(banUntil!==-1)bti=setInterval(upd,1000)}\n",
"function gate(){const need=!(role||visOK);if(!need)$('#ae').textContent='';$('#gt').classL",
"ist.toggle('on',need&&!banUntil);$('#tb').classList.toggle('on',!!banUntil);banTick();$('m",
"ain').classList.toggle('lock',need);$('#lo').hidden=!(role||visOK);$('#who').textContent=r",
"ole==='owner'?'Owner':role==='mod'?'\ud83d\udee1\ufe0f '+visName+' (mod)':(visOK?'\ud83d\udc64 '+visName:'')}\nasync f",
"unction copyText(t,label){\n  try{await navigator.clipboard.writeText(t);toast('Copied '+la",
"bel);return}catch(e){}\n  try{const a=document.createElement('textarea');a.value=t;a.style.",
"cssText='position:fixed;top:0;left:0;opacity:0';document.body.append(a);a.focus();a.select",
"();a.setSelectionRange(0,t.length);const ok=document.execCommand('copy');a.remove();toast(",
"ok?'Copied '+label:\"Couldn't copy. Press and hold the text instead.\")}catch(e){toast(\"Coul",
"dn't copy\")}\n}\nfunction render(){\n  const box=$('#list');box.innerHTML='';\n  const arr=L[c",
"ur]||[],map=new Map(arr.map(e=>[e.pos,e]));let items;\n  if(q){const s=q.toLowerCase();item",
"s=arr.filter(e=>(e.name+e.id+e.creator).toLowerCase().includes(s)).map(e=>e.pos);$('#pager",
"').hidden=true}\n  else{$('#pager').hidden=false;const a=pg*PER+1;items=Array.from({length:",
"Math.min(PER,MAX-pg*PER)},(_,i)=>a+i);$('#pi').textContent=a+'\u2013'+(a+items.length-1)+' of '",
"+MAX}\n  if(q&&!items.length)box.append(el('p','','No matches.'));\n  for(const n of items){",
"\n    const e=map.get(n),r=el('div','row'+(e?'':' e'));r.append(el('b','','#'+n));\n    cons",
"t i=el('div','i');\n    if(e){i.append(el('div','',e.name));i.append(el('small','','ID '+e.",
"id+' \u00b7 by '+(e.creator||'?')))}else i.append(el('small','','empty slot'));\n    r.append(i)",
";\n    if(e){const c=el('div');c.style.cssText='display:flex;gap:6px;flex-basis:100%;paddin",
"g-left:82px;flex-wrap:wrap';\n      [['Copy ID',e.id,'ID'],['Copy name',e.name,'name'],['Co",
"py creator',e.creator,'creator']].forEach(([t,v,l])=>{if(!v)return;const b=el('button','',",
"t);b.style.cssText='padding:5px 11px;font-size:13px;color:var(--mu)';b.onclick=()=>copyTex",
"t(v,l);c.append(b)});\n      if(e.id){const cb=el('button','','\ud83d\udcac Comment');cb.style.cssText",
"='padding:5px 11px;font-size:13px;color:var(--ac)';cb.onclick=()=>openC(e);c.append(cb)}\n ",
"     r.append(c)}\n    if(role==='owner'){const g=el('div');g.style.cssText='display:flex;g",
"ap:6px;flex-basis:100%;padding-left:82px';\n      const mk=(t,fn,ti)=>{const b=el('button',",
"'',t);b.title=ti||'';b.style.padding='6px 14px';b.onclick=()=>fn(b);g.append(b)};\n      if",
"(e){mk('\u25b2',()=>n>1&&act({action:'move',list:cur,from:n,to:n-1}),'Swap with level above');m",
"k('\u25bc',()=>n<MAX&&act({action:'move',list:cur,from:n,to:n+1}),'Swap with level below');mk('","\u21e7',()=>n>1&&act({action:'pull',list:cur,pos:n}),'Pull up (levels under it come with it)');",
"mk('\u21e9',()=>act({action:'push',list:cur,pos:n}),'Push down (levels under it get pushed down",
" too)')}\n      mk('\u270e',()=>edit(n,e));\n      if(e)mk('\u2715',b=>{if(b.dataset.a)act({action:'re",
"move',list:cur,pos:n});else{b.dataset.a=1;b.textContent='Sure?';setTimeout(()=>{delete b.d",
"ataset.a;b.textContent='\u2715'},3000)}});\n      r.append(g)}\n    box.append(r);\n  }\n}\ndocument",
".querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{cur=b.dataset.l;pg=0;document.",
"querySelectorAll('.tabs button').forEach(x=>x.classList.toggle('on',x===b));render()});\n$(",
"'#q').oninput=e=>{q=e.target.value.trim();render()};\n$('#pv').onclick=()=>{if(pg>0){pg--;r",
"ender()}};\n$('#nx').onclick=()=>{if((pg+1)*PER<MAX){pg++;render()}};\n\nfunction showAdmin()",
"{const o=role==='owner',m=o||role==='mod';$('#lg').hidden=m;$('#vs').hidden=!m;$('#va').hi",
"dden=!o;$('#bk').hidden=!o;$('#vm').hidden=!o;$('#vu').hidden=!o;$('#vt').hidden=!m;$('#lo",
"').hidden=!(m||visOK);render()}\n$('#lg').onclick=()=>{$('#lv').classList.add('on');$('#lp'",
").value='';$('#lp').focus()};\n$('#lc').onclick=()=>$('#lv').classList.remove('on');\n$('#lg",
"o').onclick=async()=>{const p=$('#lp').value;if(!p)return;pw=p;usr='';const r=await api('l",
"ogin',{method:'POST'});\n  if(r.ok){role=r.role;try{sessionStorage.setItem('pw',pw);session",
"Storage.setItem('usr',usr)}catch(e){}shut('#lv');showAdmin();load();toast('Logged in as '+",
"r.name)}else{pw='';usr='';toast(r.error||'Login failed')}};\n$('#lp').onkeydown=e=>{if(e.ke",
"y==='Enter')$('#lgo').click()};\n$('#lo').onclick=()=>{pw='';usr='';role='';sess='';try{ses",
"sionStorage.removeItem('pw');sessionStorage.removeItem('usr');localStorage.removeItem('ses",
"s')}catch(e){}showAdmin();load()};\nasync function act(b){const r=await post('admin',b);if(",
"r.error){toast(r.error);return false}if(r.list){L[b.list]=r.list;render()}if(r.subs)drawSu",
"bs(r.subs);if(r.approved)drawApproved(r.approved);if(r.mods)drawMods(r.mods);if(r.users)dr",
"awUsers(r.users);if(r.timeouts)drawTimeouts(r.timeouts);if(r.removed){SUBS=SUBS.filter(x=>",
"x.id!==r.removed);drawSubs(SUBS)}if(r.removedA){ASUBS=ASUBS.filter(x=>x.id!==r.removedA);d",
"rawApproved(ASUBS)}return true}\nconst shut=i=>$(i).classList.remove('on');\n$('#bs').onclic",
"k=async()=>{if(await act({action:'set',list:ecur,pos:$('#sp').value,id:$('#sid').value,nam",
"e:$('#sn').value,creator:$('#sc').value}))shut('#ed')};\nlet rc=0;$('#br').onclick=async()=",
">{const b=$('#br');if(!rc){rc=1;b.textContent='Tap again to confirm';setTimeout(()=>{rc=0;",
"b.textContent='Remove'},3000);return}rc=0;b.textContent='Remove';if(await act({action:'rem",
"ove',list:ecur,pos:$('#sp').value}))shut('#ed')};\n$('#bm').onclick=async()=>{if(!efrom){to",
"ast('Open a filled slot to move it');return}if(await act({action:'move',list:ecur,from:efr",
"om,to:$('#mt').value}))shut('#ed')};\n$('#ec').onclick=()=>shut('#ed');\n$('#sbtn').onclick=",
"()=>$('#fm').classList.add('on');$('#fc').onclick=()=>shut('#fm');\n$('#vs').onclick=()=>{$",
"('#sm').classList.add('on');loadSubs()};$('#smc').onclick=()=>shut('#sm');\n$('#rs').onclic",
"k=()=>loadSubs();\n$('#bk').onclick=async()=>{const b=$('#bk');if(b.disabled)return;b.disab",
"led=true;b.textContent='Backing up...';\n  try{const out={app:'mythix-lists',made:new Date(",
").toISOString(),lists:{},users:[],submissions:[],approved:[]};\n  const r0=await api('backu",
"p?pre=lists');if(!r0.items)throw 0;r0.items.forEach(i=>out.lists[i.k]=i.v);\n  for(const [p",
"re,dst] of [['u:','users'],['s:','submissions'],['a:','approved']]){let c='';\n    for(let ",
"n=0;n<500;n++){const r=await api('backup?pre='+encodeURIComponent(pre)+(c?'&c='+encodeURIC",
"omponent(c):''));if(!r.items)throw 0;out[dst].push(...r.items);if(!r.next)break;c=r.next}}",
"\n  const u=URL.createObjectURL(new Blob([JSON.stringify(out)],{type:'application/json'})),",
"a=document.createElement('a');\n  a.href=u;a.download='mythix-backup-'+new Date().toISOStri",
"ng().slice(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.r",
"evokeObjectURL(u),60000);\n  toast('Backup saved: '+out.users.length+' members, '+out.submi",
"ssions.length+' submissions')}\n  catch(e){toast('Backup failed. Try again.')}\n  b.disabled",
"=false;b.textContent='Backup'};\n$('#vu').onclick=async()=>{$('#um').classList.add('on');co",
"nst s=await api('users');if(Array.isArray(s))drawUsers(s)};$('#umc').onclick=()=>shut('#um",
"');$('#uq').oninput=()=>drawUsers(UL);\nlet TDA='',tpick='';\nconst tmSetup=()=>{const mod=r",
"ole==='mod';TDA=TDA||$('#td').innerHTML;\n  $('#td').innerHTML=mod?'<option value=\"60000\">1",
" Minute</option><option value=\"300000\">5 Minutes</option>':TDA;\n  $('#tc').style.display='",
"none';$('#tu').style.display=mod?'none':'';$('#tsw').style.display=mod?'':'none';$('#tlw')",
".style.display=mod?'none':'';\n  $('#tq').placeholder=mod?'Type a name (2+ letters), then S",
"earch':'Search members';tpick='';$('#tsel').textContent='';$('#tr').innerHTML='';$('#tq').",
"value=''};\n$('#tsb').onclick=async()=>{const q=$('#tq').value.trim(),b=$('#tr');b.innerHTM",
"L='';if(q.length<2){toast('Type at least 2 letters');return}\n  const r=await api('usearch?",
"q='+encodeURIComponent(q));if(!Array.isArray(r)){toast(r.error||'Search failed');return}\n ",
" if(!r.length){b.append(el('p','','No members found.'));return}\n  r.forEach(x=>{const bt=e",
"l('button','',x.d);bt.style.margin='0 6px 6px 0';bt.onclick=()=>{tpick=x.d;$('#tsel').text",
"Content='Selected: '+x.d};b.append(bt)})};\n$('#tq').onkeydown=e=>{if(e.key==='Enter'&&role",
"==='mod')$('#tsb').click()};\n$('#vt').onclick=async()=>{$('#tm').classList.add('on');tmSet",
"up();if(role!=='owner')return;const s=await api('users');if(Array.isArray(s)){TU=s;fillUse",
"rs();drawTimeouts(tact(s))}};$('#tmc').onclick=()=>shut('#tm');$('#tq').oninput=fillUsers;",
"$('#tbl').onclick=()=>$('#lo').click();\n$('#td').onchange=()=>{$('#tc').style.display=$('#",
"td').value==='c'?'flex':'none'};\n$('#tgo').onclick=async()=>{const name=role==='mod'?tpick",
":$('#tu').value;if(!name){toast(role==='mod'?'Search for a member and tap their name first",
"':'Pick a member first');return}\n  const ms=$('#td').value==='c'?Math.round(Number($('#tn'",
").value)*Number($('#tt').value)):Number($('#td').value);\n  if(!ms||(ms!==-1&&ms<60000)){to",
"ast('Enter a custom time of at least 1 minute');return}\n  if(await act({action:'timeout',n",
"ame,ms})){toast(name+(ms===-1?' was banned':' was timed out'));if(role==='mod')tmSetup()}}",
";\n$('#va').onclick=async()=>{$('#am').classList.add('on');const s=await api('approved');if",
"(Array.isArray(s))drawApproved(s)};$('#amc').onclick=()=>shut('#am');\n$('#vm').onclick=asy",
"nc()=>{$('#mm').classList.add('on');const s=await api('users');if(Array.isArray(s))drawMod",
"s(s)};$('#mmc').onclick=()=>shut('#mm');$('#mq').oninput=()=>drawMods(ML);\nasync function ",
"loadSubs(){const s=await api('submissions');if(Array.isArray(s))drawSubs(s)}\nconst sure=(b",
",fn)=>{if(b.dataset.a)fn();else{const t=b.textContent;b.dataset.a=1;b.textContent='Sure?';",
"setTimeout(()=>{delete b.dataset.a;b.textContent=t},3000)}};\nfunction card(x,note){const d",
"=el('div','sub'),all=[];\n  const cbtn=(v,k,t)=>{const b=el('button','',t||'Copy');b.style.",
"cssText='margin-left:8px;padding:2px 9px;font-size:12px;color:var(--mu)';b.onclick=()=>cop",
"yText(v,k);return b};\n  [['List',x.list],['Site username',x.user||'\u2014'],['Level ID & name',",
"x.q1],['Difficulty / comparisons',x.q2],['Suggested spot',x.q3],['GD user & YT',x.q4],['Di",
"scord',x.q5||'\u2014'],['Sent',new Date(x.t).toLocaleString()]].forEach(([k,v])=>{all.push(k+':",
" '+v);const r=el('div');r.append(el('b','',k+': '));r.append(document.createTextNode(v));i",
"f(v!=='\u2014')r.append(cbtn(v,k));d.append(r)});\n  if(note){const v=x.by+' \u00b7 '+new Date(x.at).",
"toLocaleString();all.push('Approved by: '+v);const r=el('div');r.append(el('b','','Approve",
"d by: '));r.append(document.createTextNode(v));r.append(cbtn(v,'approved by'));d.append(r)",
"}\n  const ca=cbtn(all.join('\\n'),'everything','Copy all');ca.style.marginLeft='0';ca.style",
".marginTop='6px';ca.style.marginRight='6px';d.append(ca);\n  return d}\nlet SUBS=[],ASUBS=[]",
";\nfunction drawSubs(s){SUBS=s;\n  const b=$('#subs');b.innerHTML='';if(!s.length){b.append(",
"el('p','','No pending submissions.'));return}\n  s.forEach(x=>{const d=card(x);\n    const a",
"p=el('button','p','Approve');ap.onclick=()=>act({action:'approve',id:x.id});d.append(ap);\n",
"    if(role==='owner'){d.append(' ');const del=el('button','','Delete');del.onclick=()=>su",
"re(del,()=>act({action:'delsub',id:x.id}));d.append(del)}\n    b.append(d)});\n}\nfunction dr",
"awApproved(s){ASUBS=s;\n  const b=$('#apps');b.innerHTML='';if(!s.length){b.append(el('p','",
"','Nothing approved yet.'));return}\n  s.forEach(x=>{const d=card(x,1);const del=el('button",
"','','Delete');del.onclick=()=>sure(del,()=>act({action:'delapproved',id:x.id}));d.append(",
"del);b.append(d)});\n}\nlet TU=[];const tact=t=>t.filter(x=>x.b&&(x.b===-1||x.b>Date.now()))",
";\nfunction fillUsers(){const q=$('#tq').value.trim().toLowerCase(),s=$('#tu'),cur=s.value;",
"s.innerHTML='';TU.filter(x=>x.d.toLowerCase().includes(q)).forEach(x=>{const o=el('option'",
",'',x.d);o.value=x.d;s.append(o)});if(cur)s.value=cur}\nfunction drawTimeouts(t){const b=$(","'#tl');b.innerHTML='';if(!t.length){b.append(el('p','','Nobody is timed out right now.'));",
"return}\n  t.forEach(x=>{const r=el('div','sub',x.d+' \u2014 '+(x.b===-1?'Permanent ban':'until ",
"'+new Date(x.b).toLocaleString())+' ');const d=el('button','','Remove');d.onclick=()=>act(",
"{action:'untimeout',name:x.d});r.append(d);b.append(r)})}\nlet UL=[];\nfunction drawUsers(u)",
"{UL=u;const b=$('#ulist');b.innerHTML='';const q=$('#uq').value.trim().toLowerCase();\n  co",
"nst a=u.filter(x=>x.d.toLowerCase().includes(q));$('#uc').textContent=u.length+' total';\n ",
" if(!a.length){b.append(el('p','','No members found.'));return}\n  if(a.length>100)b.append",
"(el('p','','Showing the first 100 of '+a.length+'. Search to narrow it down.'));\n  a.slice",
"(0,100).forEach(x=>{const d=el('div','sub');d.append(el('b','',x.d));\n    d.append(el('div",
"','','Joined: '+(x.c?new Date(x.c).toLocaleDateString():'?')+' \u00b7 Last login: '+(x.l?new Da",
"te(x.l).toLocaleString():'?')));\n    if(x.b&&(x.b===-1||x.b>Date.now()))d.append(el('div',",
"'',x.b===-1?'\u26d4 Permanently banned':'\u23f3 Timed out until '+new Date(x.b).toLocaleString()));\n",
"    const rw=el('div');rw.style.cssText='display:none;gap:6px;margin:8px 0';const pi=el('i",
"nput');pi.placeholder='New password (6+ characters)';pi.style.cssText='flex:1;min-width:0'",
";\n    const sv=el('button','p','Save');sv.onclick=async()=>{if(await act({action:'resetuse",
"r',name:x.d,password:pi.value})){toast('Password reset. Tell them their new password.');pi",
".value='';rw.style.display='none'}};rw.append(pi,sv);\n    const rs=el('button','','Reset p",
"assword');rs.onclick=()=>{rw.style.display=rw.style.display==='none'?'flex':'none'};\n    c",
"onst del=el('button','','Delete');del.onclick=()=>sure(del,()=>act({action:'deluser',name:",
"x.d}));\n    d.append(rw,rs,' ',del);b.append(d)})}\nlet ML=[];\nfunction drawMods(u){ML=u;co",
"nst b=$('#mlist');b.innerHTML='';const q=$('#mq').value.trim().toLowerCase();\n  const a=u.",
"filter(x=>x.d.toLowerCase().includes(q)).sort((x,y)=>(y.m?1:0)-(x.m?1:0));\n  $('#mc').text",
"Content=u.filter(x=>x.m).length+' mods';\n  if(!a.length){b.append(el('p','','No members fo",
"und.'));return}\n  a.slice(0,100).forEach(x=>{const r=el('div','sub');r.append(el('b','',x.",
"d+(x.m?'  \ud83d\udee1\ufe0f Mod':'')+' '));\n    const bt=el('button',x.m?'':'p',x.m?'Remove mod':'Mod');b",
"t.onclick=()=>x.m?sure(bt,()=>act({action:'setmod',name:x.d,mod:false})):act({action:'setm",
"od',name:x.d,mod:true});r.append(bt);b.append(r)});\n  if(a.length>100)b.append(el('p','','",
"Showing the first 100. Search to narrow it down.'))}\n$('#sf').onsubmit=async e=>{\n  e.prev",
"entDefault();const btn=$('#sb');btn.disabled=true;\n  try{\n    const r=await post('submit',",
"{list:$('#f0').value,q1:$('#f1').value,q2:$('#f2').value,q3:$('#f3').value,q4:$('#f4').val",
"ue,q5:$('#f5').value});\n    if(r.ok){$('#sf').reset();shut('#fm');$('#ov').classList.add('",
"on')}else toast(r.error||'Something went wrong');\n  }catch(err){toast('Could not submit, t",
"ry again')}\n  btn.disabled=false;\n};\nlet CK=null;\nconst drawC=a=>{const b=$('#cl');b.inner",
"HTML='';if(!a.length){b.append(el('p','','No comments yet. Be the first!'));return}\n  a.fo",
"rEach(x=>{const d=el('div','sub');d.append(el('b','',x.u+' '));d.append(el('small','',new ",
"Date(x.t).toLocaleString()));const t=el('div','',x.x);t.style.overflowWrap='anywhere';d.ap",
"pend(t);\n    if(role==='owner'||role==='mod'||(visName&&x.u===visName)){const del=el('butt",
"on','','Delete');del.style.cssText='padding:3px 10px;font-size:12px;margin-top:4px';del.on",
"click=()=>sure(del,async()=>{const r=await post('cdel',{list:CK.l,id:CK.i,cid:x.i});if(r.c",
"omments)drawC(r.comments);else toast(r.error||'Could not delete')});d.append(del)}\n    b.a",
"ppend(d)})};\nconst openC=async e=>{CK={l:cur,i:e.id};$('#ch').textContent='Comments \u00b7 '+e.",
"name;$('#ct').value='';$('#cl').innerHTML='';$('#cm').classList.add('on');const r=await ap",
"i('comments?list='+cur+'&id='+encodeURIComponent(e.id));if(r.comments)drawC(r.comments);el",
"se toast(r.error||'Could not load comments')};\n$('#cs').onclick=async()=>{const t=$('#ct')",
".value.trim();if(!t||!CK)return;const b=$('#cs');b.disabled=true;const r=await post('comme",
"nt',{list:CK.l,id:CK.i,text:t});b.disabled=false;if(r.comments){$('#ct').value='';drawC(r.",
"comments)}else toast(r.error||'Could not post')};\n$('#cc').onclick=()=>shut('#cm');\n$('#ok",
"').onclick=()=>$('#ov').classList.remove('on');\nlet mode='login',rcCb=null;\nconst setMode=",
"m=>{mode=m;const l=m==='login';$('#gh').textContent=l?'Log in':'Sign up';$('#ab').textCont",
"ent=l?'Log in':'Sign up';$('#at').textContent=l?'New here? Sign up':'Have an account? Log ",
"in';$('#ah').textContent=l?'':\"Use the name you're widely known for. You'll get a recovery",
" code in case you forget your password.\";$('#ae').textContent=''};\nsetMode('login');\n$('#a",
"t').onclick=e=>{e.preventDefault();setMode(mode==='login'?'signup':'login')};\nconst newCod",
"e=()=>{const al='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',a=new Uint8Array(16);crypto.getRandomVa",
"lues(a);return [0,4,8,12].map(i=>[...a.slice(i,i+4)].map(x=>al[x%32]).join('')).join('-')}",
";\nconst showCode=cb=>{const c=newCode();$('#rcc').textContent=c;rcCb=()=>cb(c);$('#rc').cl",
"assList.add('on')};\n$('#rcp').onclick=async()=>{try{await navigator.clipboard.writeText($(",
"'#rcc').textContent);toast('Copied')}catch(e){toast('Select the code and copy it')}};\n$('#",
"rcd').onclick=()=>{shut('#rc');rcCb&&rcCb()};\nconst enter=async r=>{sess=r.token;try{local",
"Storage.setItem('sess',sess)}catch(e){}await load();toast('Welcome, '+r.name)};\n$('#ab').o",
"nclick=async()=>{const n=$('#an').value.trim(),p=$('#ap').value;$('#ae').textContent='';\n ",
" if(!n||!p){$('#ae').textContent='Enter your name and password';return}\n  if(mode==='login",
"'){const r=await post('vlogin',{name:n,password:p});if(r.ok)enter(r);else $('#ae').textCon",
"tent=r.error||'Something went wrong';return}\n  if(p.length<6){$('#ae').textContent='Passwo",
"rd needs 6+ characters';return}\n  showCode(async c=>{const r=await post('signup',{name:n,p",
"assword:p,code:c});if(r.ok)enter(r);else $('#ae').textContent=r.error||'Something went wro",
"ng'})};\n$('#ap').onkeydown=e=>{if(e.key==='Enter')$('#ab').click()};\n$('#af').onclick=e=>{",
"e.preventDefault();$('#re').textContent='';$('#rv').classList.add('on')};$('#rbk').onclick",
"=e=>{e.preventDefault();shut('#rv')};\n$('#rb').onclick=()=>{const n=$('#rn').value.trim(),",
"k=$('#rk').value.trim(),p=$('#rp').value;$('#re').textContent='';\n  if(!n||!k||p.length<6)",
"{$('#re').textContent='Fill everything in (password 6+ characters)';return}\n  showCode(asy",
"nc c=>{const r=await post('recover',{name:n,code:k,newcode:c,password:p});if(r.ok){shut('#",
"rv');enter(r)}else $('#re').textContent=r.error||'Something went wrong'})};\n$('#gl').oncli",
"ck=e=>{e.preventDefault();$('#lg').click()};\n(async()=>{if(pw){const r=await api('login',{",
"method:'POST'});if(r.ok)role=r.role;else{pw='';usr=''}}showAdmin();load()})();\n\n</script><",
"/body></html>\n"
].join('');

const J=(d,s=200)=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json'}});
const MAX=10000,LISTS=['decor','difficulty','layout'];
const cut=(v,n)=>String(v==null?'':v).slice(0,n);
const hex=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(x=>x.toString(16).padStart(2,'0')).join('');
const kdf=async(s,salt)=>{const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(s),'PBKDF2',false,['deriveBits']);return [...new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:10000},k,256))].map(x=>x.toString(16).padStart(2,'0')).join('')};
export default{async fetch(req,env){
  const p=new URL(req.url).pathname;
  if(!p.startsWith('/api/'))return new Response(HTML,{headers:{'content-type':'text/html;charset=utf-8','cache-control':'no-cache'}});
  const kv=env.LISTS;
  if(!kv)return J({error:'KV binding LISTS is not set up'},500);
  const get=async(k,d='[]')=>JSON.parse(await kv.get(k)||d);
  const put=(k,v)=>kv.put(k,JSON.stringify(v));
  const pw=req.headers.get('x-pw')||'';
  let me=null;
  if(env.OWNER_PASSWORD&&pw===env.OWNER_PASSWORD)me={role:'owner',name:'Owner'};
  if(pw&&!me){
    const ok='f:o:'+(req.headers.get('cf-connecting-ip')||'x'),n=+(await kv.get(ok)||0);
    if(n>=10)return J({error:'Too many tries. Wait 15 minutes.'},429);
    await kv.put(ok,String(n+1),{expirationTtl:900});
  }

  const norm=s=>cut(s,40).trim().replace(/\s+/g,' ');  const nc=s=>cut(s,40).toUpperCase().replace(/[^A-Z0-9]/g,'');
  const sess=async k=>{const t=crypto.randomUUID()+crypto.randomUUID();await kv.put('t:'+await hex(t),JSON.stringify({u:k}));return t};
  const tries=async k=>+(await kv.get('f:'+k)||0);
  const fail=async k=>kv.put('f:'+k,String(await tries(k)+1),{expirationTtl:900});
  const listUsers=async()=>{const out=[];let cursor;do{const r=await kv.list({prefix:'u:',cursor});for(const x of r.keys)if(x.metadata)out.push(x.metadata);cursor=r.list_complete?null:r.cursor}while(cursor&&out.length<5000);return out.sort((a,b)=>(b.c||0)-(a.c||0))};
  const upd=(l,k,m)=>{l=l.filter(x=>x.d.toLowerCase()!==k);if(m)l.push(m);return l};
  const listBox=async pre=>{const r=await kv.list({prefix:pre,limit:100});return(await Promise.all(r.keys.map(x=>kv.get(x.name,'json')))).filter(Boolean)};
  let vname=null,vban=0,vmod=false;
  const stk=req.headers.get('x-sess')||'';
  if(stk.length>20){const sr=await kv.get('t:'+await hex(stk));if(sr){const ur=await kv.get('u:'+JSON.parse(sr).u);if(ur){const a=JSON.parse(ur);if(a.b&&(a.b===-1||a.b>Date.now()))vban=a.b;else{vname=a.d;vmod=!!a.m}}}}
  if(!me&&vmod)me={role:'mod',name:vname};
  if(p==='/api/me')return vname?J({ok:true,name:vname,mod:vmod}):vban?J({error:'Timed out',until:vban},403):J({error:'Not logged in'},401);
  if(['/api/signup','/api/vlogin','/api/recover'].includes(p)&&req.method==='POST'){
    let b;try{b=await req.json()}catch(e){return J({error:'bad'},400)}
    const d=norm(b.name),k=d.toLowerCase(),pwd=cut(b.password,100);
    if(p==='/api/signup'){
      if(!/^[a-z0-9_. -]{2,20}$/.test(k)||!/[a-z0-9]/.test(k))return J({error:'Use 2-20 letters, numbers, spaces, _ . or -'},400);
      if(pwd.length<6)return J({error:'Password needs 6+ characters'},400);
      const code=nc(b.code);if(code.length<12)return J({error:'Bad recovery code'},400);
      if(['owner','admin','mod','moderator','mythix','mythixgmd'].includes(k)||await kv.get('u:'+k))return J({error:'That name is taken'},409);
      const s=crypto.randomUUID(),rs=crypto.randomUUID();
      const now=Date.now();await kv.put('u:'+k,JSON.stringify({d,c:now,s,h:await kdf(pwd,s),rs,r:await hex(rs+code)}),{metadata:{d,c:now,l:now}});
      return J({ok:true,name:d,token:await sess(k)});
    }
    const{value:rec,metadata:rmd}=await kv.getWithMetadata('u:'+k);
    const tn=await tries(k);
    if(tn>=10)return J({error:'Too many tries. Wait 15 minutes.'},429);
    const u=rec&&JSON.parse(rec);
    if(p==='/api/vlogin'){
      if(!u||u.h!==await kdf(pwd,u.s)){if(u)await fail(k);return J({error:'Wrong name or password'},401)}
      if(!rmd||Date.now()-(rmd.l||0)>21600000)await kv.put('u:'+k,JSON.stringify(u),{metadata:{d:u.d,c:u.c||0,l:Date.now(),b:u.b,m:u.m}});
      if(tn>0)await kv.delete('f:'+k);
      return J({ok:true,name:u.d,token:await sess(k)});
    }
    if(!u||u.r!==await hex(u.rs+nc(b.code))){if(u)await fail(k);return J({error:'Wrong name or recovery code'},401)}
    const nw=nc(b.newcode);if(pwd.length<6||nw.length<12)return J({error:'Bad input'},400);
    const s=crypto.randomUUID(),rs=crypto.randomUUID();
    await kv.put('u:'+k,JSON.stringify({...u,s,h:await kdf(pwd,s),rs,r:await hex(rs+nw)}),{metadata:{d:u.d,c:u.c||0,l:Date.now(),b:u.b,m:u.m}});
    if(tn>0)await kv.delete('f:'+k);
    return J({ok:true,name:u.d,token:await sess(k)});
  }
  if(p==='/api/lists'){
    if(!me&&!vname)return vban?J({error:'Timed out',until:vban},403):J({error:'Log in with a username first',auth:1},401);
    return J({decor:await get('decor'),difficulty:await get('difficulty'),layout:await get('layout'),name:vname,mod:vmod});
  }
  if(p==='/api/login')return me&&me.role==='owner'?J({ok:true,role:me.role,name:me.name}):J({error:'Wrong login'},401);
  if(p==='/api/submit'&&req.method==='POST'){
    if(!me&&!vname)return J({error:'Log in first'},401);
    let b;try{b=await req.json()}catch(e){return J({error:'bad'},400)}
    const list=cut(b.list,20);if(!LISTS.includes(list))return J({error:'bad list'},400);
    const t=Date.now(),id=String(9999999999999-t).padStart(13,'0')+'-'+crypto.randomUUID().slice(0,8);
    await kv.put('s:'+id,JSON.stringify({id,t,user:me?me.name:vname,list,q1:cut(b.q1,300),q2:cut(b.q2,300),q3:cut(b.q3,300),q4:cut(b.q4,200),q5:cut(b.q5,100)}));
    return J({ok:true});
  }
  if(p==='/api/comments'||p==='/api/comment'||p==='/api/cdel'){
    if(!me&&!vname)return J({error:'Log in first',auth:1},401);
    let b={};const sp=new URL(req.url).searchParams;
    if(req.method==='POST'){try{b=await req.json()}catch(e){return J({error:'bad'},400)}}
    const lst=cut(p==='/api/comments'?sp.get('list'):b.list,20),lid=cut(p==='/api/comments'?sp.get('id'):b.id,20).trim();
    if(!LISTS.includes(lst)||!lid)return J({error:'bad level'},400);
    const ck='c:'+lst+':'+lid;let ca=await get(ck);
    if(p==='/api/comments')return J({comments:ca});
    if(req.method!=='POST')return J({error:'bad'},400);
    if(p==='/api/cdel'){
      const x=ca.find(c=>c.i===cut(b.cid,60));
      if(!x)return J({comments:ca});
      if(!me&&x.u!==vname)return J({error:'Not allowed'},403);
      ca=ca.filter(c=>c!==x);await put(ck,ca);return J({comments:ca});
    }
    const text=cut(b.text,300).trim();if(!text)return J({error:'Write something first'},400);
    const who=me?me.name:vname;
    if(ca.some(c=>c.u===who&&Date.now()-c.t<10000))return J({error:'Slow down. Wait a few seconds.'},429);
    if(!(await get(lst)).some(e=>e.id===lid))return J({error:'Level not found'},404);
    ca.unshift({i:Date.now()+'-'+crypto.randomUUID().slice(0,6),u:who,t:Date.now(),x:text});
    ca=ca.slice(0,100);await put(ck,ca);return J({comments:ca});
  }
  if(!me)return J({error:'Not allowed'},401);
  if(p==='/api/submissions')return J(await listBox('s:'));
  if(p==='/api/usearch'){
    const q=(new URL(req.url).searchParams.get('q')||'').trim().replace(/\s+/g,' ').toLowerCase();
    if(q.length<2)return J([]);
    const r=await kv.list({prefix:'u:'+q,limit:8});
    return J(r.keys.filter(x=>x.metadata).map(x=>({d:x.metadata.d,b:x.metadata.b})));
  }

  let b={};
  if(p==='/api/admin'&&req.method==='POST'){
    try{b=await req.json()}catch(e){return J({error:'bad'},400)}
    if(b.action==='approve'){
      const id=cut(b.id,60),x=await kv.get('s:'+id,'json');
      if(!x)return J({error:'Already handled'},404);
      await kv.put('a:'+id,JSON.stringify({...x,by:me.name,at:Date.now()}));
      await kv.delete('s:'+id);
      return J({removed:id});
    }
    if(b.action==='timeout'&&me.role==='mod'){
      const ms=Number(b.ms);
      if(ms!==60000&&ms!==300000)return J({error:'Mods can only time out for 1 or 5 minutes'},403);
      const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
      const{value,metadata}=await kv.getWithMetadata('u:'+k);      if(!value)return J({error:'No such member'},404);
      const u=JSON.parse(value);
      if(u.m)return J({error:"Mods can't time out other mods"},403);
      if(u.b&&(u.b===-1||u.b>Date.now()))return J({error:'Already timed out'},409);
      u.b=Date.now()+ms;
      await kv.put('u:'+k,JSON.stringify(u),{metadata:{...metadata,b:u.b}});
      return J({ok:true});
    }
  }
  if(me.role!=='owner')return J({error:'Owner only'},403);
  if(p==='/api/approved')return J(await listBox('a:'));
  if(p==='/api/users')return J(await listUsers());
  if(p==='/api/backup'){
    const q=new URL(req.url).searchParams,pre=q.get('pre')||'';
    if(pre==='lists')return J({items:await Promise.all(LISTS.map(async k=>({k,v:await kv.get(k)})))});
    if(!['u:','s:','a:'].includes(pre))return J({error:'bad'},400);
    const r=await kv.list({prefix:pre,cursor:q.get('c')||undefined,limit:40});
    const items=await Promise.all(r.keys.map(async x=>{const g=await kv.getWithMetadata(x.name);return{k:x.name,v:g.value,m:g.metadata}}));
    return J({items:items.filter(i=>i.v!=null),next:r.list_complete?null:r.cursor});
  }
  if(p!=='/api/admin')return J({error:'not found'},404);

  if(b.action==='timeout'||b.action==='untimeout'){
    const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
    const{value,metadata}=await kv.getWithMetadata('u:'+k);
    if(!value)return J({error:'No such member'},404);
    const u=JSON.parse(value),ms=Number(b.ms);
    if(b.action==='timeout'){
      if(ms!==-1&&!(ms>=60000&&ms<=3.2e11))return J({error:'Bad time'},400);
      u.b=ms===-1?-1:Date.now()+ms;
    }else delete u.b;
    const m={...metadata};if(u.b)m.b=u.b;else delete m.b;
    await kv.put('u:'+k,JSON.stringify(u),{metadata:m});
    const now=Date.now();
    return J({timeouts:upd(await listUsers(),k,m).filter(x=>x.b&&(x.b===-1||x.b>now))});
  }
  if(b.action==='resetuser'||b.action==='deluser'){
    const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
    const{value,metadata}=await kv.getWithMetadata('u:'+k);
    if(!value)return J({error:'No such member'},404);
    if(b.action==='deluser'){await kv.delete('u:'+k);return J({users:upd(await listUsers(),k,null)})}
    const pwd=cut(b.password,100);if(pwd.length<6)return J({error:'Password needs 6+ characters'},400);
    const u=JSON.parse(value),s=crypto.randomUUID();
    await kv.put('u:'+k,JSON.stringify({...u,s,h:await kdf(pwd,s)}),{metadata});
    await kv.delete('f:'+k);
    return J({ok:true});
  }
  if(b.action==='delsub'){const id=cut(b.id,60);await kv.delete('s:'+id);return J({removed:id})}
  if(b.action==='delapproved'){const id=cut(b.id,60);await kv.delete('a:'+id);return J({removedA:id})}
  if(b.action==='setmod'){
    const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
    const{value,metadata}=await kv.getWithMetadata('u:'+k);
    if(!value)return J({error:'No such member'},404);
    const u=JSON.parse(value),m={...metadata};
    if(b.mod){u.m=1;m.m=1}else{delete u.m;delete m.m}
    await kv.put('u:'+k,JSON.stringify(u),{metadata:m});
    return J({mods:upd(await listUsers(),k,m)});
  }

  if(!LISTS.includes(b.list))return J({error:'bad list'},400);
  let a=await get(b.list);
  const pos=Number(b.pos);
  if(b.action==='set'){
    if(!Number.isInteger(pos)||pos<1||pos>MAX)return J({error:'Slot must be 1-'+MAX},400);
    a=a.filter(e=>e.pos!==pos);
    a.push({pos,id:cut(b.id,20),name:cut(b.name,80),creator:cut(b.creator,60)});
  }else if(b.action==='remove'){
    a=a.filter(e=>e.pos!==pos);
  }else if(b.action==='move'){
    const f=Number(b.from),t=Number(b.to);
    if(![f,t].every(n=>Number.isInteger(n)&&n>=1&&n<=MAX))return J({error:'Slots must be 1-'+MAX},400);
    a=a.map(e=>{
      if(e.pos===f)return{...e,pos:t};
      if(f<t&&e.pos>f&&e.pos<=t)return{...e,pos:e.pos-1};
      if(f>t&&e.pos>=t&&e.pos<f)return{...e,pos:e.pos+1};
      return e;
    });
  }else if(b.action==='push'){
    if(!Number.isInteger(pos)||pos<1||pos>=MAX)return J({error:'Cannot push that slot'},400);
    const has=new Set(a.map(e=>e.pos));
    if(!has.has(pos))return J({error:'Nothing in that slot'},400);
    let end=pos;while(has.has(end+1))end++;
    if(end+1>MAX)return J({error:'List is full at the bottom'},400);
    a=a.map(e=>e.pos>=pos&&e.pos<=end?{...e,pos:e.pos+1}:e);
  }else if(b.action==='pull'){
    if(!Number.isInteger(pos)||pos<2||pos>MAX)return J({error:'Cannot pull that slot'},400);
    const has=new Set(a.map(e=>e.pos));
    if(!has.has(pos))return J({error:'Nothing in that slot'},400);
    let end=pos;while(has.has(end+1))end++;
    a=a.map(e=>e.pos>=pos&&e.pos<=end?{...e,pos:e.pos-1}:e.pos===pos-1?{...e,pos:end}:e);
  }else return J({error:'bad action'},400);
  a=a.filter(e=>e.pos>=1&&e.pos<=MAX).sort((x,y)=>x.pos-y.pos);
  await put(b.list,a);
  return J({list:a});
}};

