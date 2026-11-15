const HTML=[
"<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"",
"width=device-width,initial-scale=1\"><title>MythixGMD Lists</title>\n<style>\n:root{--bg:#070",
"70f;--card:#12122a;--ac:#00e5ff;--ac2:#b14bff;--tx:#e8e8ff;--mu:#8888b0}\n*{box-sizing:bord",
"er-box}body{margin:0;background:radial-gradient(circle at 20% 0,#1a0f3a,var(--bg) 55%);col",
"or:var(--tx);font:16px system-ui,sans-serif;min-height:100vh}\nheader{display:flex;justify-",
"content:space-between;align-items:center;padding:16px 20px;flex-wrap:wrap;gap:10px;max-wid",
"th:900px;margin:0 auto}\nh1{margin:0;font-size:26px;background:linear-gradient(90deg,var(--",
"ac),var(--ac2));-webkit-background-clip:text;background-clip:text;color:transparent}\nmain{",
"max-width:900px;margin:0 auto;padding:0 16px 60px}\nbutton,input,select,textarea{font:inher",
"it;color:var(--tx);background:var(--card);border:1px solid #2a2a55;border-radius:10px;padd",
"ing:10px 14px}\nbutton{cursor:pointer}button.p{background:linear-gradient(90deg,var(--ac),v",
"ar(--ac2));color:#000;border:0;font-weight:700}\n.tabs,.bar{display:flex;gap:8px;margin:10p",
"x 0;flex-wrap:wrap}.tabs button.on{border-color:var(--ac);color:var(--ac)}\n.bar input{flex",
":1;min-width:150px}\n.row{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center;backg",
"round:var(--card);border:1px solid #23234a;border-radius:12px;padding:10px 14px;margin:6px",
" 0}\n.row b{width:70px;color:var(--ac)}.row.e{opacity:.4}.row small{color:var(--mu)}.row .i",
"{flex:1;min-width:0}.row .i div{overflow-wrap:anywhere}\n.pager{display:flex;justify-conten",
"t:center;align-items:center;gap:12px;margin:14px 0}\nsection.box{background:var(--card);bor",
"der:1px solid #2a2a55;border-radius:14px;padding:16px;margin:24px 0}\nsection.box h2{margin",
":0 0 10px;font-size:20px}\nlabel{display:block;margin:12px 0 4px;color:var(--mu);font-size:",
"14px}\n.md input,.md textarea,.md select{width:100%;background:#0b0b1e}\n.g{display:grid;gri",
"d-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px}\n.sub{border:1px solid #2a2a",
"55;border-radius:10px;padding:10px;margin:8px 0;font-size:14px;background:#0b0b1e}\n.sub di",
"v{margin:2px 0}\n#ov,#lv{position:fixed;inset:0;background:#000d;display:none;align-items:c",
"enter;justify-content:center;z-index:9;padding:20px}\n#ov.on,#lv.on{display:flex}\n#ov .c,#l",
"v .c{background:var(--card);border:1px solid var(--ac);border-radius:18px;padding:30px;max",
"-width:420px;text-align:center;animation:pop .5s cubic-bezier(.2,1.4,.4,1)}\n@keyframes pop",
"{from{transform:scale(.5);opacity:0}to{transform:scale(1);opacity:1}}\nsvg{width:90px;heigh",
"t:90px}circle.r{fill:none;stroke:var(--ac2);stroke-width:4;stroke-dasharray:283;stroke-das",
"hoffset:283;animation:d .7s .1s forwards}\npath.k{fill:none;stroke:var(--ac);stroke-width:6",
";stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:60;stroke-dashoffset:60;anima",
"tion:d .5s .7s forwards}\n@keyframes d{to{stroke-dashoffset:0}}\n.md{position:fixed;inset:0;",
"background:#000c;display:none;align-items:center;justify-content:center;z-index:8;padding:",
"16px}.md.on{display:flex}.md .c{background:var(--card);border:1px solid #2a2a55;border-rad",
"ius:16px;padding:20px;width:100%;max-width:520px;max-height:90vh;overflow:auto}\nmain.lock{",
"filter:blur(9px);pointer-events:none;user-select:none}#gt,#rv,#rc,#tb{position:fixed;inset",
":0;background:#0009;backdrop-filter:blur(4px);display:none;align-items:center;justify-cont",
"ent:center;z-index:30;padding:16px}#gt.on,#rv.on,#rc.on,#tb.on{display:flex}#lv{z-index:40",
"}\n</style></head><body>\n<header><h1>MythixGMD Lists</h1><div style=\"display:flex;gap:8px;f",
"lex-wrap:wrap\"><span id=\"who\" style=\"color:var(--mu);align-self:center\"></span><button cla",
"ss=\"p\" id=\"sbtn\">Submit a level</button><button id=\"lg\">Owner Login</button><button id=\"vs",
"\" hidden>Submissions</button><button id=\"va\" hidden>Approved Submissions</button><button i",
"d=\"vm\" hidden>Mods</button><button id=\"vu\" hidden>Users</button><button id=\"vt\" hidden>Tim",
"eout</button><button id=\"lo\" hidden>Log out</button></div></header>\n<main class=\"lock\">\n\n<",
"div class=\"tabs\"><button data-l=\"decor\" class=\"on\">Decor List</button><button data-l=\"diff",
"iculty\">Difficulty List</button></div>\n<div class=\"bar\"><input id=\"q\" placeholder=\"Search ",
"name, ID or creator\"></div>\n<div id=\"list\"></div>\n<div class=\"pager\" id=\"pager\"><button id",
"=\"pv\">\u2039 Prev</button><span id=\"pi\"></span><button id=\"nx\">Next \u203a</button></div>\n\n\n\n\n</main",
">\n\n<div class=\"md\" id=\"fm\"><div class=\"c\"><h2 style=\"margin-top:0\">Submit your level</h2><",
"form id=\"sf\">\n<label>Which list?</label><select id=\"f0\"><option value=\"decor\">Decor List</",
"option><option value=\"difficulty\">Difficulty List</option></select>\n<label>1. What's the i",
"d, and name of your level.</label><input id=\"f1\" required maxlength=\"300\">\n<label>2. What ",
"difficulty do you think it is, and any comparisons?</label><textarea id=\"f2\" required maxl",
"ength=\"300\"></textarea>\n<label>3. What spot do you think is suitable for this level?</labe",
"l><input id=\"f3\" required maxlength=\"300\">\n<label>4. What is your username in gd, and your",
" yt handle?</label><input id=\"f4\" required maxlength=\"200\">\n<label>5. (OPTIONAL) If you ha",
"ve a discord username, drop it here.</label><input id=\"f5\" maxlength=\"100\">\n<p><button cla",
"ss=\"p\" id=\"sb\">Submit</button> <button type=\"button\" id=\"fc\">Cancel</button></p>\n</form></",
"div></div>\n<div class=\"md\" id=\"ed\"><div class=\"c\"><h2 id=\"et\" style=\"margin-top:0\">Edit sl",
"ot</h2>\n<label>Slot #</label><input id=\"sp\" type=\"number\" min=\"1\" max=\"10000\">\n<label>Leve",
"l ID</label><input id=\"sid\"><label>Level name</label><input id=\"sn\"><label>Creator</label>",
"<input id=\"sc\">\n<p><button class=\"p\" id=\"bs\">Save</button> <button id=\"br\">Remove</button>",
" <button id=\"ec\">Close</button></p>\n<label>Move this level to slot #</label><div style=\"di",
"splay:flex;gap:8px\"><input id=\"mt\" type=\"number\" min=\"1\" max=\"10000\" style=\"flex:1;min-wid",
"th:0;width:auto\"><button id=\"bm\">Move</button></div></div></div>\n<div class=\"md\" id=\"sm\"><",
"div class=\"c\"><h2 style=\"margin-top:0\">Submitted forms</h2><div id=\"subs\"></div><p><button",
" id=\"smc\">Close</button> <button id=\"rs\">Refresh</button></p></div></div>\n<div class=\"md\" ",
"id=\"am\"><div class=\"c\"><h2 style=\"margin-top:0\">Approved submissions</h2><div id=\"apps\"></",
"div><p><button id=\"amc\">Close</button></p></div></div>\n<div class=\"md\" id=\"mm\"><div class=",
"\"c\"><h2 style=\"margin-top:0\">Mods <span id=\"mc\" style=\"color:var(--mu);font-size:14px\"></s",
"pan></h2><input id=\"mq\" placeholder=\"Search members\"><div id=\"mlist\"></div><p><button id=\"",
"mmc\">Close</button></p></div></div>\n<div id=\"gt\"><div style=\"background:var(--card);border",
":1px solid var(--ac);border-radius:18px;padding:26px;max-width:400px;width:100%;text-align",
":center\"><h2 id=\"gh\" style=\"margin-top:0\">Log in</h2><p id=\"ah\" style=\"color:var(--mu);mar",
"gin-top:0\"></p>\n<input id=\"an\" maxlength=\"20\" placeholder=\"Your name\" style=\"width:100%;ma",
"rgin-bottom:8px\"><input id=\"ap\" type=\"password\" placeholder=\"Password\" style=\"width:100%;m",
"argin-bottom:8px\"><div id=\"ae\" style=\"color:#ff6b8a;min-height:22px;margin-bottom:8px\"></d",
"iv>\n<button class=\"p\" id=\"ab\" style=\"width:100%\">Log in</button>\n<p style=\"margin:12px 0 4",
"px\"><a href=\"#\" id=\"at\" style=\"color:var(--mu);font-size:14px\">New here? Sign up</a></p>\n<",
"p style=\"margin:0\"><a href=\"#\" id=\"af\" style=\"color:var(--mu);font-size:14px\">Forgot passw",
"ord?</a> \u00b7 <a href=\"#\" id=\"gl\" style=\"color:var(--mu);font-size:14px\">Owner login</a></p><",
"/div></div>\n<div id=\"tb\"><div style=\"background:var(--card);border:1px solid var(--ac);bor",
"der-radius:18px;padding:26px;max-width:400px;width:100%;text-align:center\"><h2 id=\"tbh\" st",
"yle=\"margin-top:0\">Timed out</h2><p id=\"tbt\" style=\"color:var(--mu)\"></p><button id=\"tbl\">",
"Log out</button></div></div>\n<div id=\"rv\"><div style=\"background:var(--card);border:1px so",
"lid var(--ac);border-radius:18px;padding:26px;max-width:400px;width:100%;text-align:center",
"\"><h2 style=\"margin-top:0\">Reset password</h2><p style=\"color:var(--mu);margin-top:0\">Ente",
"r your name, the recovery code you saved, and a new password.</p>\n<input id=\"rn\" placehold",
"er=\"Your name\" style=\"width:100%;margin-bottom:8px\"><input id=\"rk\" placeholder=\"Recovery c",
"ode\" style=\"width:100%;margin-bottom:8px\"><input id=\"rp\" type=\"password\" placeholder=\"New ",
"password (6+ characters)\" style=\"width:100%;margin-bottom:8px\"><div id=\"re\" style=\"color:#",
"ff6b8a;min-height:22px;margin-bottom:8px\"></div>\n<button class=\"p\" id=\"rb\" style=\"width:10",
"0%\">Reset password</button><p style=\"margin:12px 0 0\"><a href=\"#\" id=\"rbk\" style=\"color:va",
"r(--mu);font-size:14px\">Back</a></p></div></div>\n<div id=\"rc\"><div style=\"background:var(-",
"-card);border:1px solid var(--ac);border-radius:18px;padding:26px;max-width:400px;width:10",
"0%;text-align:center\"><h2 style=\"margin-top:0\">Save your recovery code</h2><p style=\"color",
":var(--mu);margin-top:0\">If you forget your password, this code is the only way to reset i",
"t. It's shown once, so screenshot it or write it down.</p>\n<div id=\"rcc\" style=\"font:700 2",
"2px ui-monospace,monospace;letter-spacing:1px;padding:14px;background:#0b0b1e;border-radiu",
"s:12px;margin:12px 0;user-select:all\"></div>\n<button id=\"rcp\">Copy</button> <button class=",
"\"p\" id=\"rcd\">I saved it</button></div></div>\n<div class=\"md\" id=\"um\"><div class=\"c\"><h2 st",
"yle=\"margin-top:0\">Members <span id=\"uc\" style=\"color:var(--mu);font-size:14px\"></span></h",
"2><input id=\"uq\" placeholder=\"Search members\"><div id=\"ulist\"></div><p><button id=\"umc\">Cl",
"ose</button></p></div></div>\n<div class=\"md\" id=\"tm\"><div class=\"c\"><h2 style=\"margin-top:",
"0\">Timeout a member</h2>\n<label>1. Pick the member</label><input id=\"tq\" placeholder=\"Sear",
"ch members\"><select id=\"tu\" size=\"5\" style=\"margin-top:6px\"></select><p id=\"tsw\" style=\"di",
"splay:none\"><button id=\"tsb\">Search</button></p><div id=\"tr\"></div><div id=\"tsel\" style=\"m",
"argin:8px 0\"></div>\n<label>2. How long?</label><select id=\"td\"><option value=\"60000\">1 Min",
"ute</option><option value=\"300000\">5 Minutes</option><option value=\"600000\">10 Minutes</op",
"tion><option value=\"1200000\">20 Minutes</option><option value=\"3600000\">1 Hour</option><op",
"tion value=\"86400000\">1 Day</option><option value=\"604800000\">1 Week</option><option value",
"=\"1209600000\">2 Weeks</option><option value=\"2592000000\">1 Month</option><option value=\"-1",
"\">Permanent Ban</option><option value=\"c\">Custom</option></select>\n<div id=\"tc\" style=\"dis",
"play:none;gap:8px;margin-top:8px\"><input id=\"tn\" type=\"number\" min=\"1\" placeholder=\"Amount",
"\"><select id=\"tt\"><option value=\"60000\">Minutes</option><option value=\"3600000\">Hours</opt",
"ion><option value=\"86400000\">Days</option></select></div>\n<p><button class=\"p\" id=\"tgo\">Ap",
"ply</button> <button id=\"tmc\">Close</button></p>\n<div id=\"tlw\"><h3 style=\"margin-bottom:6p",
"x\">Currently timed out or banned</h3><div id=\"tl\"></div></div></div></div>\n<div id=\"lv\"><d",
"iv class=\"c\"><h2 style=\"margin-top:0\">Owner login</h2><input id=\"lp\" type=\"password\" place",
"holder=\"Password\" style=\"width:100%;margin-bottom:12px\"><div><button class=\"p\" id=\"lgo\">Lo",
"g in</button> <button id=\"lc\">Cancel</button></div></div></div>\n<div id=\"ov\"><div class=\"c",
"\"><svg viewBox=\"0 0 100 100\"><circle class=\"r\" cx=\"50\" cy=\"50\" r=\"45\"/><path class=\"k\" d=\"",
"M30 52l14 14 27-30\"/></svg>\n<p style=\"font-size:18px;line-height:1.4\">Thank you for submit",
"ting your form, it is pending review. MythixGMD will review it soon.</p>\n<button class=\"p\"",
" id=\"ok\">Close</button></div></div>\n\n<script>\nconst $=s=>document.querySelector(s),PER=50,",
"MAX=10000;\nlet L={decor:[],difficulty:[]},cur='decor',pg=0,q='',pw='',usr='',role='',sess=",
"'',visName='',visOK=false,needName=false,banUntil=0,bti=null;\ntry{pw=sessionStorage.getIte",
"m('pw')||'';usr=sessionStorage.getItem('usr')||''}catch(e){}\ntry{sess=localStorage.getItem",
"('sess')||''}catch(e){}\nconst api=async(p,o={})=>{try{const r=await fetch('/api/'+p,{...o,",
"headers:{'content-type':'application/json','x-pw':pw,'x-sess':sess}});return await r.json(",
")}catch(e){return{error:\"Can't reach the server. Try again.\",net:1}}};\nconst post=(p,b)=>a",
"pi(p,{method:'POST',body:JSON.stringify(b)});\nconst el=(t,c,x)=>{const e=document.createEl",
"ement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};\nconst toast=m=>{const d=",
"el('div','',m);d.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-",
"50%);background:#12122a;border:1px solid #00e5ff;padding:12px 18px;border-radius:12px;z-in",
"dex:50;max-width:90%';document.body.append(d);setTimeout(()=>d.remove(),3500)};\nlet ecur='",
"decor',efrom=0;const edit=(n,e)=>{ecur=cur;efrom=e?n:0;$('#et').textContent=(e?'Edit':'Add",
" to')+' slot #'+n+' \u00b7 '+(cur==='decor'?'Decor':'Difficulty')+' List';$('#sp').value=n;$('#",
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
"600;const m=Math.floor(s/60);s%=60;return(d?d+'d ':'')+(h||d?h+'h ':'')+(m||h||d?m+'m ':''",
")+s+'s'};\nfunction banTick(){clearInterval(bti);if(!banUntil)return;const upd=()=>{if(banU",
"ntil===-1){$('#tbh').textContent='Banned';$('#tbt').textContent='You have been permanently",
" banned from this site.';return}const left=banUntil-Date.now();if(left<=0){clearInterval(b",
"ti);banUntil=0;load();return}$('#tbh').textContent='Timed out';$('#tbt').textContent='You ",
"are timed out. Time left: '+fmtT(left)};upd();if(banUntil!==-1)bti=setInterval(upd,1000)}\n",
"function gate(){const need=!(role||visOK);if(!need)$('#ae').textContent='';$('#gt').classL",
"ist.toggle('on',need&&!banUntil);$('#tb').classList.toggle('on',!!banUntil);banTick();$('m",
"ain').classList.toggle('lock',need);$('#lo').hidden=!(role||visOK);$('#who').textContent=r",
"ole==='owner'?'Owner':role==='mod'?'\ud83d\udee1\ufe0f '+visName+' (mod)':(visOK?'\ud83d\udc64 '+visName:'')}\nfunctio",
"n render(){\n  const box=$('#list');box.innerHTML='';\n  const arr=L[cur]||[],map=new Map(ar",
"r.map(e=>[e.pos,e]));let items;\n  if(q){const s=q.toLowerCase();items=arr.filter(e=>(e.nam",
"e+e.id+e.creator).toLowerCase().includes(s)).map(e=>e.pos);$('#pager').hidden=true}\n  else",
"{$('#pager').hidden=false;const a=pg*PER+1;items=Array.from({length:Math.min(PER,MAX-pg*PE",
"R)},(_,i)=>a+i);$('#pi').textContent=a+'\u2013'+(a+items.length-1)+' of '+MAX}\n  if(q&&!items.l",
"ength)box.append(el('p','','No matches.'));\n  for(const n of items){\n    const e=map.get(n",
"),r=el('div','row'+(e?'':' e'));r.append(el('b','','#'+n));\n    const i=el('div','i');\n   ",
" if(e){i.append(el('div','',e.name));i.append(el('small','','ID '+e.id+' \u00b7 by '+(e.creator",
"||'?')))}else i.append(el('small','','empty slot'));\n    r.append(i);\n    if(role==='owner",
"'){const g=el('div');g.style.cssText='display:flex;gap:6px;flex-basis:100%;padding-left:82",
"px';\n      const mk=(t,fn,ti)=>{const b=el('button','',t);b.title=ti||'';b.style.padding='",
"6px 14px';b.onclick=()=>fn(b);g.append(b)};\n      if(e){mk('\u25b2',()=>n>1&&act({action:'move'",
",list:cur,from:n,to:n-1}),'Swap with level above');mk('\u25bc',()=>n<MAX&&act({action:'move',li",
"st:cur,from:n,to:n+1}),'Swap with level below');mk('\u21e7',()=>n>1&&act({action:'pull',list:cu",
"r,pos:n}),'Pull up (levels under it come with it)');mk('\u21e9',()=>act({action:'push',list:cur",
",pos:n}),'Push down (levels under it get pushed down too)')}\n      mk('\u270e',()=>edit(n,e));\n",
"      if(e)mk('\u2715',b=>{if(b.dataset.a)act({action:'remove',list:cur,pos:n});else{b.dataset.",
"a=1;b.textContent='Sure?';setTimeout(()=>{delete b.dataset.a;b.textContent='\u2715'},3000)}});\n",
"      r.append(g)}\n    box.append(r);\n  }\n}\ndocument.querySelectorAll('.tabs button').forE",
"ach(b=>b.onclick=()=>{cur=b.dataset.l;pg=0;document.querySelectorAll('.tabs button').forEa",
"ch(x=>x.classList.toggle('on',x===b));render()});\n$('#q').oninput=e=>{q=e.target.value.tri",
"m();render()};\n$('#pv').onclick=()=>{if(pg>0){pg--;render()}};\n$('#nx').onclick=()=>{if((p",
"g+1)*PER<MAX){pg++;render()}};\n\nfunction showAdmin(){const o=role==='owner',m=o||role==='m",
"od';$('#lg').hidden=m;$('#vs').hidden=!m;$('#va').hidden=!o;$('#vm').hidden=!o;$('#vu').hi",
"dden=!o;$('#vt').hidden=!m;$('#lo').hidden=!(m||visOK);render()}\n$('#lg').onclick=()=>{$('",
"#lv').classList.add('on');$('#lp').value='';$('#lp').focus()};\n$('#lc').onclick=()=>$('#lv",
"').classList.remove('on');\n$('#lgo').onclick=async()=>{const p=$('#lp').value;if(!p)return",
";pw=p;usr='';const r=await api('login',{method:'POST'});\n  if(r.ok){role=r.role;try{sessio",
"nStorage.setItem('pw',pw);sessionStorage.setItem('usr',usr)}catch(e){}shut('#lv');showAdmi",
"n();load();toast('Logged in as '+r.name)}else{pw='';usr='';toast(r.error||'Login failed')}",
"};\n$('#lp').onkeydown=e=>{if(e.key==='Enter')$('#lgo').click()};\n$('#lo').onclick=()=>{pw=",
"'';usr='';role='';sess='';try{sessionStorage.removeItem('pw');sessionStorage.removeItem('u",
"sr');localStorage.removeItem('sess')}catch(e){}showAdmin();load()};\nasync function act(b){",
"const r=await post('admin',b);if(r.error){toast(r.error);return false}if(r.list){L[b.list]",
"=r.list;render()}if(r.subs)drawSubs(r.subs);if(r.approved)drawApproved(r.approved);if(r.mo",
"ds)drawMods(r.mods);if(r.users)drawUsers(r.users);if(r.timeouts)drawTimeouts(r.timeouts);i",
"f(r.removed){SUBS=SUBS.filter(x=>x.id!==r.removed);drawSubs(SUBS)}if(r.removedA){ASUBS=ASU",
"BS.filter(x=>x.id!==r.removedA);drawApproved(ASUBS)}return true}\nconst shut=i=>$(i).classL",
"ist.remove('on');\n$('#bs').onclick=async()=>{if(await act({action:'set',list:ecur,pos:$('#",
"sp').value,id:$('#sid').value,name:$('#sn').value,creator:$('#sc').value}))shut('#ed')};\nl",
"et rc=0;$('#br').onclick=async()=>{const b=$('#br');if(!rc){rc=1;b.textContent='Tap again ",
"to confirm';setTimeout(()=>{rc=0;b.textContent='Remove'},3000);return}rc=0;b.textContent='",
"Remove';if(await act({action:'remove',list:ecur,pos:$('#sp').value}))shut('#ed')};\n$('#bm'",
").onclick=async()=>{if(!efrom){toast('Open a filled slot to move it');return}if(await act(",
"{action:'move',list:ecur,from:efrom,to:$('#mt').value}))shut('#ed')};\n$('#ec').onclick=()=",
">shut('#ed');\n$('#sbtn').onclick=()=>$('#fm').classList.add('on');$('#fc').onclick=()=>shu",
"t('#fm');\n$('#vs').onclick=()=>{$('#sm').classList.add('on');loadSubs()};$('#smc').onclick",
"=()=>shut('#sm');\n$('#rs').onclick=()=>loadSubs();\n$('#vu').onclick=async()=>{$('#um').cla",
"ssList.add('on');const s=await api('users');if(Array.isArray(s))drawUsers(s)};$('#umc').on",
"click=()=>shut('#um');$('#uq').oninput=()=>drawUsers(UL);\nlet TDA='',tpick='';\nconst tmSet",
"up=()=>{const mod=role==='mod';TDA=TDA||$('#td').innerHTML;\n  $('#td').innerHTML=mod?'<opt",
"ion value=\"60000\">1 Minute</option><option value=\"300000\">5 Minutes</option>':TDA;\n  $('#t",
"c').style.display='none';$('#tu').style.display=mod?'none':'';$('#tsw').style.display=mod?",
"'':'none';$('#tlw').style.display=mod?'none':'';\n  $('#tq').placeholder=mod?'Type a name (",
"2+ letters), then Search':'Search members';tpick='';$('#tsel').textContent='';$('#tr').inn",
"erHTML='';$('#tq').value=''};\n$('#tsb').onclick=async()=>{const q=$('#tq').value.trim(),b=",
"$('#tr');b.innerHTML='';if(q.length<2){toast('Type at least 2 letters');return}\n  const r=",
"await api('usearch?q='+encodeURIComponent(q));if(!Array.isArray(r)){toast(r.error||'Search",
" failed');return}\n  if(!r.length){b.append(el('p','','No members found.'));return}\n  r.for",
"Each(x=>{const bt=el('button','',x.d);bt.style.margin='0 6px 6px 0';bt.onclick=()=>{tpick=",
"x.d;$('#tsel').textContent='Selected: '+x.d};b.append(bt)})};\n$('#tq').onkeydown=e=>{if(e.",
"key==='Enter'&&role==='mod')$('#tsb').click()};\n$('#vt').onclick=async()=>{$('#tm').classL",
"ist.add('on');tmSetup();if(role!=='owner')return;const s=await api('users');if(Array.isArr",
"ay(s)){TU=s;fillUsers();drawTimeouts(tact(s))}};$('#tmc').onclick=()=>shut('#tm');$('#tq')",
".oninput=fillUsers;$('#tbl').onclick=()=>$('#lo').click();\n$('#td').onchange=()=>{$('#tc')",
".style.display=$('#td').value==='c'?'flex':'none'};\n$('#tgo').onclick=async()=>{const name",
"=role==='mod'?tpick:$('#tu').value;if(!name){toast(role==='mod'?'Search for a member and t",
"ap their name first':'Pick a member first');return}\n  const ms=$('#td').value==='c'?Math.r",
"ound(Number($('#tn').value)*Number($('#tt').value)):Number($('#td').value);\n  if(!ms||(ms!",
"==-1&&ms<60000)){toast('Enter a custom time of at least 1 minute');return}\n  if(await act(",
"{action:'timeout',name,ms})){toast(name+(ms===-1?' was banned':' was timed out'));if(role=",
"=='mod')tmSetup()}};\n$('#va').onclick=async()=>{$('#am').classList.add('on');const s=await",
" api('approved');if(Array.isArray(s))drawApproved(s)};$('#amc').onclick=()=>shut('#am');\n$",
"('#vm').onclick=async()=>{$('#mm').classList.add('on');const s=await api('users');if(Array",
".isArray(s))drawMods(s)};$('#mmc').onclick=()=>shut('#mm');$('#mq').oninput=()=>drawMods(M",
"L);\nasync function loadSubs(){const s=await api('submissions');if(Array.isArray(s))drawSub",
"s(s)}\nconst sure=(b,fn)=>{if(b.dataset.a)fn();else{const t=b.textContent;b.dataset.a=1;b.t",
"extContent='Sure?';setTimeout(()=>{delete b.dataset.a;b.textContent=t},3000)}};\nfunction c",
"ard(x,note){const d=el('div','sub');\n  [['List',x.list],['Site username',x.user||'\u2014'],['Le",
"vel ID & name',x.q1],['Difficulty / comparisons',x.q2],['Suggested spot',x.q3],['GD user &",
" YT',x.q4],['Discord',x.q5||'\u2014'],['Sent',new Date(x.t).toLocaleString()]].forEach(([k,v])=",
">{const r=el('div');r.append(el('b','',k+': '));r.append(document.createTextNode(v));d.app",
"end(r)});\n  if(note){const r=el('div');r.append(el('b','','Approved by: '));r.append(docum",
"ent.createTextNode(x.by+' \u00b7 '+new Date(x.at).toLocaleString()));d.append(r)}\n  return d}\nl",
"et SUBS=[],ASUBS=[];\nfunction drawSubs(s){SUBS=s;\n  const b=$('#subs');b.innerHTML='';if(!",
"s.length){b.append(el('p','','No pending submissions.'));return}\n  s.forEach(x=>{const d=c",
"ard(x);\n    const ap=el('button','p','Approve');ap.onclick=()=>act({action:'approve',id:x.",
"id});d.append(ap);\n    if(role==='owner'){d.append(' ');const del=el('button','','Delete')",
";del.onclick=()=>sure(del,()=>act({action:'delsub',id:x.id}));d.append(del)}\n    b.append(",
"d)});\n}\nfunction drawApproved(s){ASUBS=s;\n  const b=$('#apps');b.innerHTML='';if(!s.length",
"){b.append(el('p','','Nothing approved yet.'));return}\n  s.forEach(x=>{const d=card(x,1);c",
"onst del=el('button','','Delete');del.onclick=()=>sure(del,()=>act({action:'delapproved',i",
"d:x.id}));d.append(del);b.append(d)});\n}\nlet TU=[];const tact=t=>t.filter(x=>x.b&&(x.b===-",
"1||x.b>Date.now()));\nfunction fillUsers(){const q=$('#tq').value.trim().toLowerCase(),s=$(",
"'#tu'),cur=s.value;s.innerHTML='';TU.filter(x=>x.d.toLowerCase().includes(q)).forEach(x=>{",
"const o=el('option','',x.d);o.value=x.d;s.append(o)});if(cur)s.value=cur}\nfunction drawTim",
"eouts(t){const b=$('#tl');b.innerHTML='';if(!t.length){b.append(el('p','','Nobody is timed",
" out right now.'));return}\n  t.forEach(x=>{const r=el('div','sub',x.d+' \u2014 '+(x.b===-1?'Per",
"manent ban':'until '+new Date(x.b).toLocaleString())+' ');const d=el('button','','Remove')",
";d.onclick=()=>act({action:'untimeout',name:x.d});r.append(d);b.append(r)})}\nlet UL=[];\nfu",
"nction drawUsers(u){UL=u;const b=$('#ulist');b.innerHTML='';const q=$('#uq').value.trim().",
"toLowerCase();\n  const a=u.filter(x=>x.d.toLowerCase().includes(q));$('#uc').textContent=u",
".length+' total';\n  if(!a.length){b.append(el('p','','No members found.'));return}\n  if(a.",
"length>100)b.append(el('p','','Showing the first 100 of '+a.length+'. Search to narrow it ",
"down.'));\n  a.slice(0,100).forEach(x=>{const d=el('div','sub');d.append(el('b','',x.d));\n ",
"   d.append(el('div','','Joined: '+(x.c?new Date(x.c).toLocaleDateString():'?')+' \u00b7 Last l",
"ogin: '+(x.l?new Date(x.l).toLocaleString():'?')));\n    if(x.b&&(x.b===-1||x.b>Date.now())",
")d.append(el('div','',x.b===-1?'\u26d4 Permanently banned':'\u23f3 Timed out until '+new Date(x.b).t",
"oLocaleString()));\n    const rw=el('div');rw.style.cssText='display:none;gap:6px;margin:8p",
"x 0';const pi=el('input');pi.placeholder='New password (6+ characters)';pi.style.cssText='",
"flex:1;min-width:0';\n    const sv=el('button','p','Save');sv.onclick=async()=>{if(await ac",
"t({action:'resetuser',name:x.d,password:pi.value})){toast('Password reset. Tell them their",
" new password.');pi.value='';rw.style.display='none'}};rw.append(pi,sv);\n    const rs=el('",
"button','','Reset password');rs.onclick=()=>{rw.style.display=rw.style.display==='none'?'f",
"lex':'none'};\n    const del=el('button','','Delete');del.onclick=()=>sure(del,()=>act({act",
"ion:'deluser',name:x.d}));\n    d.append(rw,rs,' ',del);b.append(d)})}\nlet ML=[];\nfunction ",
"drawMods(u){ML=u;const b=$('#mlist');b.innerHTML='';const q=$('#mq').value.trim().toLowerC",
"ase();\n  const a=u.filter(x=>x.d.toLowerCase().includes(q)).sort((x,y)=>(y.m?1:0)-(x.m?1:0",
"));\n  $('#mc').textContent=u.filter(x=>x.m).length+' mods';\n  if(!a.length){b.append(el('p",
"','','No members found.'));return}\n  a.slice(0,100).forEach(x=>{const r=el('div','sub');r.",
"append(el('b','',x.d+(x.m?'  \ud83d\udee1\ufe0f Mod':'')+' '));\n    const bt=el('button',x.m?'':'p',x.m?'R",
"emove mod':'Mod');bt.onclick=()=>x.m?sure(bt,()=>act({action:'setmod',name:x.d,mod:false})",
"):act({action:'setmod',name:x.d,mod:true});r.append(bt);b.append(r)});\n  if(a.length>100)b",
".append(el('p','','Showing the first 100. Search to narrow it down.'))}\n$('#sf').onsubmit=",
"async e=>{\n  e.preventDefault();const btn=$('#sb');btn.disabled=true;\n  try{\n    const r=a",
"wait post('submit',{list:$('#f0').value,q1:$('#f1').value,q2:$('#f2').value,q3:$('#f3').va",
"lue,q4:$('#f4').value,q5:$('#f5').value});\n    if(r.ok){$('#sf').reset();shut('#fm');$('#o",
"v').classList.add('on')}else toast(r.error||'Something went wrong');\n  }catch(err){toast('",
"Could not submit, try again')}\n  btn.disabled=false;\n};\n$('#ok').onclick=()=>$('#ov').clas",
"sList.remove('on');\nlet mode='login',rcCb=null;\nconst setMode=m=>{mode=m;const l=m==='logi",
"n';$('#gh').textContent=l?'Log in':'Sign up';$('#ab').textContent=l?'Log in':'Sign up';$('",
"#at').textContent=l?'New here? Sign up':'Have an account? Log in';$('#ah').textContent=l?'",
"':\"Use the name you're widely known for. You'll get a recovery code in case you forget you",
"r password.\";$('#ae').textContent=''};\nsetMode('login');\n$('#at').onclick=e=>{e.preventDef",
"ault();setMode(mode==='login'?'signup':'login')};\nconst newCode=()=>{const al='ABCDEFGHJKL",
"MNPQRSTUVWXYZ23456789',a=new Uint8Array(16);crypto.getRandomValues(a);return [0,4,8,12].ma",
"p(i=>[...a.slice(i,i+4)].map(x=>al[x%32]).join('')).join('-')};\nconst showCode=cb=>{const ",
"c=newCode();$('#rcc').textContent=c;rcCb=()=>cb(c);$('#rc').classList.add('on')};\n$('#rcp'",
").onclick=async()=>{try{await navigator.clipboard.writeText($('#rcc').textContent);toast('",
"Copied')}catch(e){toast('Select the code and copy it')}};\n$('#rcd').onclick=()=>{shut('#rc",
"');rcCb&&rcCb()};\nconst enter=async r=>{sess=r.token;try{localStorage.setItem('sess',sess)",
"}catch(e){}await load();toast('Welcome, '+r.name)};\n$('#ab').onclick=async()=>{const n=$('",
"#an').value.trim(),p=$('#ap').value;$('#ae').textContent='';\n  if(!n||!p){$('#ae').textCon",
"tent='Enter your name and password';return}\n  if(mode==='login'){const r=await post('vlogi",
"n',{name:n,password:p});if(r.ok)enter(r);else $('#ae').textContent=r.error||'Something wen",
"t wrong';return}\n  if(p.length<6){$('#ae').textContent='Password needs 6+ characters';retu",
"rn}\n  showCode(async c=>{const r=await post('signup',{name:n,password:p,code:c});if(r.ok)e",
"nter(r);else $('#ae').textContent=r.error||'Something went wrong'})};\n$('#ap').onkeydown=e",
"=>{if(e.key==='Enter')$('#ab').click()};\n$('#af').onclick=e=>{e.preventDefault();$('#re').",
"textContent='';$('#rv').classList.add('on')};$('#rbk').onclick=e=>{e.preventDefault();shut",
"('#rv')};\n$('#rb').onclick=()=>{const n=$('#rn').value.trim(),k=$('#rk').value.trim(),p=$(",
"'#rp').value;$('#re').textContent='';\n  if(!n||!k||p.length<6){$('#re').textContent='Fill ",
"everything in (password 6+ characters)';return}\n  showCode(async c=>{const r=await post('r",
"ecover',{name:n,code:k,newcode:c,password:p});if(r.ok){shut('#rv');enter(r)}else $('#re').",
"textContent=r.error||'Something went wrong'})};\n$('#gl').onclick=e=>{e.preventDefault();$(",
"'#lg').click()};\n(async()=>{if(pw){const r=await api('login',{method:'POST'});if(r.ok)role",
"=r.role;else{pw='';usr=''}}showAdmin();load()})();\n\n</script></body></html>\n"
].join('');
const J=(d,s=200)=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json'}});
const MAX=10000,LISTS=['decor','difficulty'];
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

  const norm=s=>cut(s,40).trim().replace(/\s+/g,' ');
  const nc=s=>cut(s,40).toUpperCase().replace(/[^A-Z0-9]/g,'');
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
    return J({decor:await get('decor'),difficulty:await get('difficulty'),name:vname,mod:vmod});
  }
  if(p==='/api/login')return me&&me.role==='owner'?J({ok:true,role:me.role,name:me.name}):J({error:'Wrong login'},401);
  if(p==='/api/submit'&&req.method==='POST'){
    if(!me&&!vname)return J({error:'Log in first'},401);
    let b;try{b=await req.json()}catch(e){return J({error:'bad'},400)}
    const t=Date.now(),id=String(9999999999999-t).padStart(13,'0')+'-'+crypto.randomUUID().slice(0,8);
    await kv.put('s:'+id,JSON.stringify({id,t,user:me?me.name:vname,list:cut(b.list,20),q1:cut(b.q1,300),q2:cut(b.q2,300),q3:cut(b.q3,300),q4:cut(b.q4,200),q5:cut(b.q5,100)}));
    return J({ok:true});
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
      const{value,metadata}=await kv.getWithMetadata('u:'+k);
      if(!value)return J({error:'No such member'},404);
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
