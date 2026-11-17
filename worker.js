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
"rc.on,#tb.on{display:flex}#lv{z-index:40}\n.xb{position:sticky;top:0;z-index:3;display:flex",
";justify-content:flex-end;height:38px;margin-bottom:-38px;pointer-events:none}.xb button{p",
"ointer-events:auto;align-self:flex-start;padding:7px 14px;font-size:14px;font-weight:700;b",
"ackground:#12122a;border:1px solid var(--ac);color:var(--ac);border-radius:10px;box-shadow",
":0 2px 12px #000c}\n</style></head><body>\n<header><h1>Mythi<span class=\"dx\" aria-label=\"X\">",
"<svg viewBox=\"0 0 32 32\" style=\"width:28px;height:28px\"><defs><linearGradient id=\"dg\" x1=\"",
"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#00e5ff\"/><stop offset=\"100%\" stop-c",
"olor=\"#b14bff\"/></linearGradient></defs><polygon points=\"16,2 30,16 16,30 2,16\" fill=\"#121",
"22a\" stroke=\"url(#dg)\" stroke-width=\"2.5\"/><path d=\"M11 11L21 21M21 11L11 21\" stroke=\"url(",
"#dg)\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg></span>GMD Lists</h1><div style=\"disp",
"lay:flex;gap:8px;flex-wrap:wrap\"><span id=\"who\" style=\"color:var(--mu);align-self:center\">",
"</span><a href=\"https://youtube.com/@mythixgmd?si=f2x_3Yzz0fE66hp2\" target=\"_blank\" rel=\"n",
"oopener\" style=\"display:inline-block;background:#ff0033;color:#fff;font-weight:700;text-de",
"coration:none;border-radius:10px;padding:10px 14px;align-self:center\">\u25b6 YouTube</a><button",
" class=\"p\" id=\"sbtn\">Submit a level</button><button id=\"lg\">Owner Login</button><button id",
"=\"vs\" hidden>Submissions</button><button id=\"va\" hidden>Approved Submissions</button><butt",
"on id=\"vm\" hidden>Mods</button><button id=\"vu\" hidden>Users</button><button id=\"vt\" hidden",
">Timeout</button><button id=\"bk\" hidden>Backup</button><button id=\"lo\" hidden>Log out</but",
"ton></div></header>\n<main class=\"lock\">\n\n<div class=\"tabs\"><button data-l=\"decor\" class=\"o",
"n\">Decor List</button><button data-l=\"difficulty\">Difficulty List</button><button data-l=\"",
"layout\">Layout List</button></div>\n<div class=\"bar\"><input id=\"q\" placeholder=\"Search name",
", ID or creator\"></div>\n<div id=\"list\"></div>\n<div class=\"pager\" id=\"pager\"><button id=\"pv",
"\">\u2039 Prev</button><span id=\"pi\"></span><button id=\"nx\">Next \u203a</button></div>\n\n\n\n\n</main>\n\n<",
"div class=\"md\" id=\"fm\"><div class=\"c\"><h2 style=\"margin-top:0\">Submit your level</h2><form",
" id=\"sf\">\n<label>Which list?</label><select id=\"f0\"><option value=\"decor\">Decor List</opti",
"on><option value=\"difficulty\">Difficulty List</option><option value=\"layout\">Layout List</",
"option></select>\n<label>1. What's the id, and name of your level.</label><input id=\"f1\" re",
"quired maxlength=\"300\">\n<label>2. What difficulty do you think it is, and any comparisons?",
"</label><textarea id=\"f2\" required maxlength=\"300\"></textarea>\n<label>3. What spot do you ",
"think is suitable for this level?</label><input id=\"f3\" required maxlength=\"300\">\n<label>4",
". What is your username in gd, and your yt handle?</label><input id=\"f4\" required maxlengt",
"h=\"200\">\n<label>5. (OPTIONAL) If you have a discord username, drop it here.</label><input ",
"id=\"f5\" maxlength=\"100\">\n<p><button class=\"p\" id=\"sb\">Submit</button> <button type=\"button",
"\" id=\"fc\">Cancel</button></p>\n</form></div></div>\n<div class=\"md\" id=\"ed\"><div class=\"c\"><",
"h2 id=\"et\" style=\"margin-top:0\">Edit slot</h2>\n<label>Slot #</label><input id=\"sp\" type=\"n",
"umber\" min=\"1\" max=\"10000\">\n<label>Level ID</label><input id=\"sid\"><label>Level name</labe",
"l><input id=\"sn\"><label>Creator</label><input id=\"sc\">\n<label>Completion link (YouTube vid",
"eo or Short)</label><div style=\"display:flex;gap:8px\"><input id=\"ecv\" placeholder=\"https:/",
"/youtube.com/...\" maxlength=\"200\" style=\"flex:1;min-width:0;width:auto\"><button type=\"butt",
"on\" id=\"ecp\" title=\"Add more completion links\">+</button></div>\n<label>Showcase link (YouT",
"ube video or Short)</label><div style=\"display:flex;gap:8px\"><input id=\"esv\" placeholder=\"",
"https://youtube.com/...\" maxlength=\"200\" style=\"flex:1;min-width:0;width:auto\"><button typ",
"e=\"button\" id=\"esp\" title=\"Add more showcase links\">+</button></div>\n<p><button class=\"p\" ",
"id=\"bs\">Save</button> <button id=\"br\">Remove</button> <button id=\"ec\">Close</button></p>\n<",
"label>Move this level to slot #</label><div style=\"display:flex;gap:8px\"><input id=\"mt\" ty",
"pe=\"number\" min=\"1\" max=\"10000\" style=\"flex:1;min-width:0;width:auto\"><button id=\"bm\">Move",
"</button></div></div></div>\n<div class=\"md\" id=\"lk\"><div class=\"c\"><h2 id=\"lkt\" style=\"mar",
"gin-top:0\">More links</h2><div id=\"lkl\"></div><p><button type=\"button\" id=\"lka\">+ Add a li",
"nk</button> <button class=\"p\" type=\"button\" id=\"lkd\">Done</button></p></div></div>\n<div cl",
"ass=\"md\" id=\"wm\"><div class=\"c\"><h2 id=\"wt\" style=\"margin-top:0\"></h2><div id=\"wl\"></div><",
"p><button type=\"button\" id=\"wc\">Close</button></p></div></div>\n<div class=\"md\" id=\"sm\"><di",
"v class=\"c\"><h2 style=\"margin-top:0\">Submitted forms</h2><div id=\"subs\"></div><p><button i",
"d=\"smc\">Close</button> <button id=\"rs\">Refresh</button></p></div></div>\n<div class=\"md\" id",
"=\"am\"><div class=\"c\"><h2 style=\"margin-top:0\">Approved submissions</h2><div id=\"apps\"></di",
"v><p><button id=\"amc\">Close</button></p></div></div>\n<div class=\"md\" id=\"mm\"><div class=\"c",
"\"><h2 style=\"margin-top:0\">Mods <span id=\"mc\" style=\"color:var(--mu);font-size:14px\"></spa",
"n></h2><input id=\"mq\" placeholder=\"Search members\"><div id=\"mlist\"></div><p><button id=\"mm",
"c\">Close</button></p></div></div>\n<div class=\"md\" id=\"cm\"><div class=\"c\"><h2 id=\"ch\" style",
"=\"margin-top:0;overflow-wrap:anywhere\">Comments</h2><div id=\"cl\"></div><textarea id=\"ct\" m",
"axlength=\"300\" placeholder=\"Write a comment...\" style=\"width:100%;background:#0b0b1e;margi",
"n-top:8px\"></textarea><p><button class=\"p\" id=\"cs\">Post</button> <button id=\"cc\">Close</bu",
"tton></p></div></div>\n<div id=\"gt\"><div style=\"background:var(--card);border:1px solid var",
"(--ac);border-radius:18px;padding:26px;max-width:400px;width:100%;text-align:center\"><h2 i",
"d=\"gh\" style=\"margin-top:0\">Log in</h2><p id=\"ah\" style=\"color:var(--mu);margin-top:0\"></p",
">\n<input id=\"an\" maxlength=\"20\" placeholder=\"Your name\" style=\"width:100%;margin-bottom:8p",
"x\"><input id=\"ap\" type=\"password\" placeholder=\"Password\" style=\"width:100%;margin-bottom:8",
"px\"><div id=\"ae\" style=\"color:#ff6b8a;min-height:22px;margin-bottom:8px\"></div>\n<button cl",
"ass=\"p\" id=\"ab\" style=\"width:100%\">Log in</button>\n<p style=\"margin:12px 0 4px\"><a href=\"#",
"\" id=\"at\" style=\"color:var(--mu);font-size:14px\">New here? Sign up</a></p>\n<p style=\"margi",
"n:0\"><a href=\"#\" id=\"af\" style=\"color:var(--mu);font-size:14px\">Forgot password?</a> \u00b7 <a ",
"href=\"#\" id=\"gl\" style=\"color:var(--mu);font-size:14px\">Owner login</a></p></div></div>\n<d",
"iv id=\"tb\"><div style=\"background:var(--card);border:1px solid var(--ac);border-radius:18p",
"x;padding:26px;max-width:400px;width:100%;text-align:center\"><h2 id=\"tbh\" style=\"margin-to",
"p:0\">Timed out</h2><p id=\"tbt\" style=\"color:var(--mu)\"></p><button id=\"tbl\">Log out</butto",
"n></div></div>\n<div id=\"rv\"><div style=\"background:var(--card);border:1px solid var(--ac);",
"border-radius:18px;padding:26px;max-width:400px;width:100%;text-align:center\"><h2 style=\"m",
"argin-top:0\">Reset password</h2><p style=\"color:var(--mu);margin-top:0\">Enter your name, t",
"he recovery code you saved, and a new password.</p>\n<input id=\"rn\" placeholder=\"Your name\"",
" style=\"width:100%;margin-bottom:8px\"><input id=\"rk\" placeholder=\"Recovery code\" style=\"wi",
"dth:100%;margin-bottom:8px\"><input id=\"rp\" type=\"password\" placeholder=\"New password (6+ c",
"haracters)\" style=\"width:100%;margin-bottom:8px\"><div id=\"re\" style=\"color:#ff6b8a;min-hei",
"ght:22px;margin-bottom:8px\"></div>\n<button class=\"p\" id=\"rb\" style=\"width:100%\">Reset pass",
"word</button><p style=\"margin:12px 0 0\"><a href=\"#\" id=\"rbk\" style=\"color:var(--mu);font-s",
"ize:14px\">Back</a></p></div></div>\n<div id=\"rc\"><div style=\"background:var(--card);border:",
"1px solid var(--ac);border-radius:18px;padding:26px;max-width:400px;width:100%;text-align:",
"center\"><h2 style=\"margin-top:0\">Save your recovery code</h2><p style=\"color:var(--mu);mar",
"gin-top:0\">If you forget your password, this code is the only way to reset it. It's shown ",
"once, so screenshot it or write it down.</p>\n<div id=\"rcc\" style=\"font:700 22px ui-monospa",
"ce,monospace;letter-spacing:1px;padding:14px;background:#0b0b1e;border-radius:12px;margin:",
"12px 0;user-select:all\"></div>\n<button id=\"rcp\">Copy</button> <button class=\"p\" id=\"rcd\">I",
" saved it</button></div></div>\n<div class=\"md\" id=\"um\"><div class=\"c\"><h2 style=\"margin-to",
"p:0\">Members <span id=\"uc\" style=\"color:var(--mu);font-size:14px\"></span></h2><input id=\"u",
"q\" placeholder=\"Search members\"><div id=\"ulist\"></div><p><button id=\"umc\">Close</button></",
"p></div></div>\n<div class=\"md\" id=\"tm\"><div class=\"c\"><h2 style=\"margin-top:0\">Timeout a m",
"ember</h2>\n<label>1. Pick the member</label><input id=\"tq\" placeholder=\"Search members\"><s",
"elect id=\"tu\" size=\"5\" style=\"margin-top:6px\"></select><p id=\"tsw\" style=\"display:none\"><b",
"utton id=\"tsb\">Search</button></p><div id=\"tr\"></div><div id=\"tsel\" style=\"margin:8px 0\"><",
"/div>\n<label>2. How long?</label><select id=\"td\"><option value=\"60000\">1 Minute</option><o",
"ption value=\"300000\">5 Minutes</option><option value=\"600000\">10 Minutes</option><option v",
"alue=\"1200000\">20 Minutes</option><option value=\"3600000\">1 Hour</option><option value=\"86",
"400000\">1 Day</option><option value=\"604800000\">1 Week</option><option value=\"1209600000\">",
"2 Weeks</option><option value=\"2592000000\">1 Month</option><option value=\"-1\">Permanent Ba",
"n</option><option value=\"c\">Custom</option></select>\n<div id=\"tc\" style=\"display:none;gap:",
"8px;margin-top:8px\"><input id=\"tn\" type=\"number\" min=\"1\" placeholder=\"Amount\"><select id=\"",
"tt\"><option value=\"60000\">Minutes</option><option value=\"3600000\">Hours</option><option va",
"lue=\"86400000\">Days</option></select></div>\n<p><button class=\"p\" id=\"tgo\">Apply</button> <",
"button id=\"tmc\">Close</button></p>\n<div id=\"tlw\"><h3 style=\"margin-bottom:6px\">Currently t",
"imed out or banned</h3><div id=\"tl\"></div></div></div></div>\n<div id=\"lv\"><div class=\"c\"><",
"h2 style=\"margin-top:0\">Owner login</h2><input id=\"lp\" type=\"password\" placeholder=\"Passwo",
"rd\" style=\"width:100%;margin-bottom:12px\"><div><button class=\"p\" id=\"lgo\">Log in</button> ",
"<button id=\"lc\">Cancel</button></div></div></div>\n<div id=\"ov\"><div class=\"c\"><svg viewBox",
"=\"0 0 100 100\"><circle class=\"r\" cx=\"50\" cy=\"50\" r=\"45\"/><path class=\"k\" d=\"M30 52l14 14 2",
"7-30\"/></svg>\n<p style=\"font-size:18px;line-height:1.4\">Thank you for submitting your form",
", it is pending review. MythixGMD will review it soon.</p>\n<button class=\"p\" id=\"ok\">Close",
"</button></div></div>\n\n<script>\nconst $=s=>document.querySelector(s),PER=50,MAX=10000;\nlet",
" L={decor:[],difficulty:[],layout:[]},cur='decor',pg=0,q='',pw='',usr='',role='',sess='',v",
"isName='',visOK=false,needName=false,banUntil=0,bti=null;\ntry{pw=sessionStorage.getItem('p",
"w')||'';usr=sessionStorage.getItem('usr')||''}catch(e){}\ntry{sess=localStorage.getItem('se",
"ss')||''}catch(e){}\nconst api=async(p,o={})=>{try{const r=await fetch('/api/'+p,{...o,head",
"ers:{'content-type':'application/json','x-pw':pw,'x-sess':sess}});return await r.json()}ca",
"tch(e){return{error:\"Can't reach the server. Try again.\",net:1}}};\nconst post=(p,b)=>api(p",
",{method:'POST',body:JSON.stringify(b)});\nconst el=(t,c,x)=>{const e=document.createElemen",
"t(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};\nconst toast=m=>{const d=el('",
"div','',m);d.style.cssText='position:fixed;bottom:20px;left:50%;transform:translateX(-50%)",
";background:#12122a;border:1px solid #00e5ff;padding:12px 18px;border-radius:12px;z-index:",
"50;max-width:90%';document.body.append(d);setTimeout(()=>d.remove(),3500)};\nlet ecur='deco",
"r',efrom=0;const edit=(n,e)=>{ecur=cur;efrom=e?n:0;$('#et').textContent=(e?'Edit':'Add to'",
")+' slot #'+n+' \u00b7 '+({decor:'Decor',difficulty:'Difficulty',layout:'Layout'}[cur]||'')+' L",
"ist';$('#sp').value=n;$('#sid').value=e?e.id:'';$('#sn').value=e?e.name:'';$('#sc').value=",
"e?e.creator:'';$('#mt').value='';lkv.cv=[...(e&&e.cv||[''])];lkv.sv=[...(e&&e.sv||[''])];$",
"('#ecv').value=lkv.cv[0];$('#esv').value=lkv.sv[0];plusLbl();$('#ed').classList.add('on')}",
";\nasync function load(){\n  const r=await api('lists');\n  if(r.net){$('#gt').classList.add(",
"'on');$('#ae').textContent=\"Can't reach the server. The site's backend may not be set up y",
"et.\";return}\n  if(role!=='owner'){\n    if(r.until){visOK=false;banUntil=r.until;role='';sh",
"owAdmin();gate();return}\n    if(r.auth){banUntil=0;visOK=false;role='';if(sess){sess='';tr",
"y{localStorage.removeItem('sess')}catch(e){}}showAdmin();gate();return}\n    if(r.error){$(",
"'#gt').classList.add('on');$('#ae').textContent=r.error;return}\n    banUntil=0;visName=r.n",
"ame;visOK=true;role=r.mod?'mod':'';showAdmin()\n  }else if(r.error){toast(r.error);return}\n",
"  L=r;LH=r.h||{};gate();render()}\nconst fmtT=ms=>{let s=Math.max(0,Math.ceil(ms/1000));con",
"st d=Math.floor(s/86400);s%=86400;const h=Math.floor(s/3600);s%=3600;const m=Math.floor(s/",
"60);s%=60;return(d?d+'d ':'')+(h||d?h+'h ':'')+(m||h||d?m+'m ':'')+s+'s'};\nfunction banTic",
"k(){clearInterval(bti);if(!banUntil)return;const upd=()=>{if(banUntil===-1){$('#tbh').text",
"Content='Banned';$('#tbt').textContent='You have been permanently banned from this site.';",
"return}const left=banUntil-Date.now();if(left<=0){clearInterval(bti);banUntil=0;load();ret",
"urn}$('#tbh').textContent='Timed out';$('#tbt').textContent='You are timed out. Time left:",
" '+fmtT(left)};upd();if(banUntil!==-1)bti=setInterval(upd,1000)}\nfunction gate(){const nee",
"d=!(role||visOK);if(!need)$('#ae').textContent='';$('#gt').classList.toggle('on',need&&!ba",
"nUntil);$('#tb').classList.toggle('on',!!banUntil);banTick();$('main').classList.toggle('l",
"ock',need);$('#lo').hidden=!(role||visOK);$('#who').textContent=role==='owner'?'Owner':rol",
"e==='mod'?'\ud83d\udee1\ufe0f '+visName+' (mod)':(visOK?'\ud83d\udc64 '+visName:'')}\nasync function copyText(t,label)",
"{\n  try{await navigator.clipboard.writeText(t);toast('Copied '+label);return}catch(e){}\n  ",
"try{const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;t",
"op:0;left:0;opacity:0';document.body.append(a);a.focus();a.select();a.setSelectionRange(0,",
"t.length);const ok=document.execCommand('copy');a.remove();toast(ok?'Copied '+label:\"Could",
"n't copy. Press and hold the text instead.\")}catch(e){toast(\"Couldn't copy\")}\n}\nfunction r",
"ender(){\n  const box=$('#list');box.innerHTML='';\n  const arr=L[cur]||[],map=new Map(arr.m",
"ap(e=>[e.pos,e]));let items;\n  if(q){const s=q.toLowerCase();items=arr.filter(e=>(e.name+e",
".id+e.creator).toLowerCase().includes(s)).map(e=>e.pos);$('#pager').hidden=true}\n  else{$(",
"'#pager').hidden=false;const a=pg*PER+1;items=Array.from({length:Math.min(PER,MAX-pg*PER)}",
",(_,i)=>a+i);$('#pi').textContent=a+'\u2013'+(a+items.length-1)+' of '+MAX}\n  if(q&&!items.leng",
"th)box.append(el('p','','No matches.'));\n  for(const n of items){\n    const e=map.get(n),r",
"=el('div','row'+(e?'':' e'));r.append(el('b','','#'+n));\n    const i=el('div','i');\n    if",
"(e){i.append(el('div','',e.name));i.append(el('small','','ID '+e.id+' \u00b7 by '+(e.creator||'",
"?')))}else i.append(el('small','','empty slot'));\n    r.append(i);\n    if(e){const c=el('d",
"iv');c.style.cssText='display:flex;gap:6px;flex-basis:100%;padding-left:82px;flex-wrap:wra",
"p';\n      [['Copy ID',e.id,'ID'],['Copy name',e.name,'name'],['Copy creator',e.creator,'cr",
"eator']].forEach(([t,v,l])=>{if(!v)return;const b=el('button','',t);b.style.cssText='paddi",
"ng:5px 11px;font-size:13px;color:var(--mu)';b.onclick=()=>copyText(v,l);c.append(b)});\n   ",
"   ytBtns(e,c);\n      if(e.id){const cb=el('button','','\ud83d\udcac Comment');cb.style.cssText='padd",
"ing:5px 11px;font-size:13px;color:var(--ac)';cb.onclick=()=>openC(e);c.append(cb)}\n      r",
".append(c)}\n    if(role==='owner'){const g=el('div');g.style.cssText='display:flex;gap:6px",
";flex-basis:100%;padding-left:82px';\n      const mk=(t,fn,ti)=>{const b=el('button','',t);",
"b.title=ti||'';b.style.padding='6px 14px';b.onclick=()=>fn(b);g.append(b)};\n      if(e){mk",
"('\u25b2',()=>n>1&&act({action:'move',list:cur,from:n,to:n-1}),'Swap with level above');mk('\u25bc',",
"()=>n<MAX&&act({action:'move',list:cur,from:n,to:n+1}),'Swap with level below');mk('\u21e7',()=",
">n>1&&act({action:'pull',list:cur,pos:n}),'Pull up (levels under it come with it)');mk('\u21e9'",
",()=>act({action:'push',list:cur,pos:n}),'Push down (levels under it get pushed down too)'",
")}\n      mk('\u270e',()=>edit(n,e));\n      if(e)mk('\u2715',b=>{if(b.dataset.a)act({action:'remove',",
"list:cur,pos:n});else{b.dataset.a=1;b.textContent='Sure?';setTimeout(()=>{delete b.dataset",
".a;b.textContent='\u2715'},3000)}});\n      r.append(g)}\n    box.append(r);\n  }\n}\ndocument.query",
"SelectorAll('.tabs button').forEach(b=>b.onclick=()=>{cur=b.dataset.l;pg=0;document.queryS",
"electorAll('.tabs button').forEach(x=>x.classList.toggle('on',x===b));render();syncNow()})",
";\n$('#q').oninput=e=>{q=e.target.value.trim();render()};\n$('#pv').onclick=()=>{if(pg>0){pg",
"--;render()}};\n$('#nx').onclick=()=>{if((pg+1)*PER<MAX){pg++;render()}};\n\nfunction showAdm",
"in(){const o=role==='owner',m=o||role==='mod';$('#lg').hidden=m;$('#vs').hidden=!m;$('#va'",
").hidden=!o;$('#bk').hidden=!o;$('#vm').hidden=!o;$('#vu').hidden=!o;$('#vt').hidden=!m;$(",
"'#lo').hidden=!(m||visOK);render()}\n$('#lg').onclick=()=>{$('#lv').classList.add('on');$('",
"#lp').value='';$('#lp').focus()};\n$('#lc').onclick=()=>$('#lv').classList.remove('on');\n$(",
"'#lgo').onclick=async()=>{const p=$('#lp').value;if(!p)return;pw=p;usr='';const r=await ap",
"i('login',{method:'POST'});\n  if(r.ok){role=r.role;try{sessionStorage.setItem('pw',pw);ses",
"sionStorage.setItem('usr',usr)}catch(e){}shut('#lv');showAdmin();load();toast('Logged in a",
"s '+r.name)}else{pw='';usr='';toast(r.error||'Login failed')}};\n$('#lp').onkeydown=e=>{if(",
"e.key==='Enter')$('#lgo').click()};\n$('#lo').onclick=()=>{pw='';usr='';role='';sess='';try",
"{sessionStorage.removeItem('pw');sessionStorage.removeItem('usr');localStorage.removeItem(",
"'sess')}catch(e){}showAdmin();load()};\nasync function act(b){const r=await post('admin',b)",
";if(r.error){toast(r.error);return false}if(r.list){L[b.list]=r.list;quiet[b.list]=Date.no",
"w()+45000;if(r.h)LH[b.list]=r.h;render()}if(r.subs)drawSubs(r.subs);if(r.approved)drawAppr",
"oved(r.approved);if(r.mods)drawMods(r.mods);if(r.users)drawUsers(r.users);if(r.timeouts)dr",
"awTimeouts(r.timeouts);if(r.removed){SUBS=SUBS.filter(x=>x.id!==r.removed);drawSubs(SUBS)}",
"if(r.removedA){ASUBS=ASUBS.filter(x=>x.id!==r.removedA);drawApproved(ASUBS)}return true}\nc",
"onst shut=i=>$(i).classList.remove('on');\n$('#bs').onclick=async()=>{if(await act({action:",
"'set',list:ecur,pos:$('#sp').value,id:$('#sid').value,name:$('#sn').value,creator:$('#sc')",
".value,cv:gl('cv'),sv:gl('sv')}))shut('#ed')};\nlet rc=0;$('#br').onclick=async()=>{const b",
"=$('#br');if(!rc){rc=1;b.textContent='Tap again to confirm';setTimeout(()=>{rc=0;b.textCon",
"tent='Remove'},3000);return}rc=0;b.textContent='Remove';if(await act({action:'remove',list",
":ecur,pos:$('#sp').value}))shut('#ed')};\n$('#bm').onclick=async()=>{if(!efrom){toast('Open",
" a filled slot to move it');return}if(await act({action:'move',list:ecur,from:efrom,to:$('",
"#mt').value}))shut('#ed')};\n$('#ec').onclick=()=>shut('#ed');\n$('#sbtn').onclick=()=>$('#f",
"m').classList.add('on');$('#fc').onclick=()=>shut('#fm');\n$('#vs').onclick=()=>{$('#sm').c",
"lassList.add('on');loadSubs()};$('#smc').onclick=()=>shut('#sm');\n$('#rs').onclick=()=>loa",
"dSubs(1);\n$('#bk').onclick=async()=>{const b=$('#bk');if(b.disabled)return;b.disabled=true",
";b.textContent='Backing up...';\n  try{const out={app:'mythix-lists',made:new Date().toISOS",
"tring(),lists:{},users:[],submissions:[],approved:[]};\n  const r0=await api('backup?pre=li",
"sts');if(!r0.items)throw 0;r0.items.forEach(i=>out.lists[i.k]=i.v);\n  for(const [pre,dst] ",
"of [['u:','users'],['s:','submissions'],['a:','approved']]){let c='';\n    for(let n=0;n<50",
"0;n++){const r=await api('backup?pre='+encodeURIComponent(pre)+(c?'&c='+encodeURIComponent",
"(c):''));if(!r.items)throw 0;out[dst].push(...r.items);if(!r.next)break;c=r.next}}\n  const",
" u=URL.createObjectURL(new Blob([JSON.stringify(out)],{type:'application/json'})),a=docume",
"nt.createElement('a');\n  a.href=u;a.download='mythix-backup-'+new Date().toISOString().sli",
"ce(0,10)+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObj",
"ectURL(u),60000);\n  toast('Backup saved: '+out.users.length+' members, '+out.submissions.l",
"ength+' submissions')}\n  catch(e){toast('Backup failed. Try again.')}\n  b.disabled=false;b",
".textContent='Backup'};\n$('#vu').onclick=async()=>{$('#um').classList.add('on');const s=aw",
"ait api('users');if(Array.isArray(s))drawUsers(s)};$('#umc').onclick=()=>shut('#um');$('#u",
"q').oninput=()=>drawUsers(UL);\nlet TDA='',tpick='';\nconst tmSetup=()=>{const mod=role==='m",
"od';TDA=TDA||$('#td').innerHTML;\n  $('#td').innerHTML=mod?'<option value=\"60000\">1 Minute<",
"/option><option value=\"300000\">5 Minutes</option>':TDA;\n  $('#tc').style.display='none';$(",
"'#tu').style.display=mod?'none':'';$('#tsw').style.display=mod?'':'none';$('#tlw').style.d",
"isplay=mod?'none':'';\n  $('#tq').placeholder=mod?'Type a name (2+ letters), then Search':'",
"Search members';tpick='';$('#tsel').textContent='';$('#tr').innerHTML='';$('#tq').value=''",
"};\n$('#tsb').onclick=async()=>{const q=$('#tq').value.trim(),b=$('#tr');b.innerHTML='';if(",
"q.length<2){toast('Type at least 2 letters');return}\n  const r=await api('usearch?q='+enco",
"deURIComponent(q));if(!Array.isArray(r)){toast(r.error||'Search failed');return}\n  if(!r.l",
"ength){b.append(el('p','','No members found.'));return}\n  r.forEach(x=>{const bt=el('butto",
"n','',x.d);bt.style.margin='0 6px 6px 0';bt.onclick=()=>{tpick=x.d;$('#tsel').textContent=",
"'Selected: '+x.d};b.append(bt)})};\n$('#tq').onkeydown=e=>{if(e.key==='Enter'&&role==='mod'",
")$('#tsb').click()};\n$('#vt').onclick=async()=>{$('#tm').classList.add('on');tmSetup();if(",
"role!=='owner')return;const s=await api('users');if(Array.isArray(s)){TU=s;fillUsers();dra",
"wTimeouts(tact(s))}};$('#tmc').onclick=()=>shut('#tm');$('#tq').oninput=fillUsers;$('#tbl'",
").onclick=()=>$('#lo').click();\n$('#td').onchange=()=>{$('#tc').style.display=$('#td').val",
"ue==='c'?'flex':'none'};\n$('#tgo').onclick=async()=>{const name=role==='mod'?tpick:$('#tu'",
").value;if(!name){toast(role==='mod'?'Search for a member and tap their name first':'Pick ",
"a member first');return}\n  const ms=$('#td').value==='c'?Math.round(Number($('#tn').value)",
"*Number($('#tt').value)):Number($('#td').value);\n  if(!ms||(ms!==-1&&ms<60000)){toast('Ent",
"er a custom time of at least 1 minute');return}\n  if(await act({action:'timeout',name,ms})",
"){toast(name+(ms===-1?' was banned':' was timed out'));if(role==='mod')tmSetup()}};\n$('#va",
"').onclick=async()=>{$('#am').classList.add('on');const s=await api('approved');if(Array.i",
"sArray(s))drawApproved(s)};$('#amc').onclick=()=>shut('#am');\n$('#vm').onclick=async()=>{$",
"('#mm').classList.add('on');const s=await api('users');if(Array.isArray(s))drawMods(s)};$(",
"'#mmc').onclick=()=>shut('#mm');$('#mq').oninput=()=>drawMods(ML);\nasync function loadSubs",
"(f){const s=await api('submissions'+(f?'?f=1':''));if(Array.isArray(s))drawSubs(s)}\nconst ",
"sure=(b,fn)=>{if(b.dataset.a)fn();else{const t=b.textContent;b.dataset.a=1;b.textContent='",
"Sure?';setTimeout(()=>{delete b.dataset.a;b.textContent=t},3000)}};\nfunction card(x,note){",
"const d=el('div','sub'),all=[];\n  const cbtn=(v,k,t)=>{const b=el('button','',t||'Copy');b",
".style.cssText='margin-left:8px;padding:2px 9px;font-size:12px;color:var(--mu)';b.onclick=",
"()=>copyText(v,k);return b};\n  [['List',x.list],['Site username',x.user||'\u2014'],['Level ID &",
" name',x.q1],['Difficulty / comparisons',x.q2],['Suggested spot',x.q3],['GD user & YT',x.q",
"4],['Discord',x.q5||'\u2014'],['Sent',new Date(x.t).toLocaleString()]].forEach(([k,v])=>{all.pu",
"sh(k+': '+v);const r=el('div');r.append(el('b','',k+': '));r.append(document.createTextNod",
"e(v));if(v!=='\u2014')r.append(cbtn(v,k));d.append(r)});\n  if(note){const v=x.by+' \u00b7 '+new Date",
"(x.at).toLocaleString();all.push('Approved by: '+v);const r=el('div');r.append(el('b','','",
"Approved by: '));r.append(document.createTextNode(v));r.append(cbtn(v,'approved by'));d.ap",
"pend(r)}\n  const ca=cbtn(all.join('\\n'),'everything','Copy all');ca.style.marginLeft='0';c",
"a.style.marginTop='6px';ca.style.marginRight='6px';d.append(ca);\n  return d}\nlet SUBS=[],A",
"SUBS=[];\nfunction drawSubs(s){SUBS=s;\n  const b=$('#subs');b.innerHTML='';if(!s.length){b.",
"append(el('p','','No pending submissions.'));return}\n  s.forEach(x=>{const d=card(x);\n    ",
"const ap=el('button','p','Approve');ap.onclick=()=>act({action:'approve',id:x.id});d.appen",
"d(ap);\n    if(role==='owner'){d.append(' ');const del=el('button','','Delete');del.onclick",
"=()=>sure(del,()=>act({action:'delsub',id:x.id}));d.append(del)}\n    b.append(d)});\n}\nfunc",
"tion drawApproved(s){ASUBS=s;\n  const b=$('#apps');b.innerHTML='';if(!s.length){b.append(e",
"l('p','','Nothing approved yet.'));return}\n  s.forEach(x=>{const d=card(x,1);const del=el(",
"'button','','Delete');del.onclick=()=>sure(del,()=>act({action:'delapproved',id:x.id}));d.",
"append(del);b.append(d)});\n}\nlet TU=[];const tact=t=>t.filter(x=>x.b&&(x.b===-1||x.b>Date.",
"now()));\nfunction fillUsers(){const q=$('#tq').value.trim().toLowerCase(),s=$('#tu'),cur=s",
".value;s.innerHTML='';TU.filter(x=>x.d.toLowerCase().includes(q)).forEach(x=>{const o=el('",
"option','',x.d);o.value=x.d;s.append(o)});if(cur)s.value=cur}\nfunction drawTimeouts(t){con",
"st b=$('#tl');b.innerHTML='';if(!t.length){b.append(el('p','','Nobody is timed out right n",
"ow.'));return}\n  t.forEach(x=>{const r=el('div','sub',x.d+' \u2014 '+(x.b===-1?'Permanent ban':",
"'until '+new Date(x.b).toLocaleString())+' ');const d=el('button','','Remove');d.onclick=(",
")=>act({action:'untimeout',name:x.d});r.append(d);b.append(r)})}\nlet UL=[];\nfunction drawU",
"sers(u){UL=u;const b=$('#ulist');b.innerHTML='';const q=$('#uq').value.trim().toLowerCase(",
");\n  const a=u.filter(x=>x.d.toLowerCase().includes(q));$('#uc').textContent=u.length+' to",
"tal';\n  if(!a.length){b.append(el('p','','No members found.'));return}\n  if(a.length>100)b",
".append(el('p','','Showing the first 100 of '+a.length+'. Search to narrow it down.'));\n  ",
"a.slice(0,100).forEach(x=>{const d=el('div','sub');d.append(el('b','',x.d));\n    d.append(",
"el('div','','Joined: '+(x.c?new Date(x.c).toLocaleDateString():'?')+' \u00b7 Last login: '+(x.l",
"?new Date(x.l).toLocaleString():'?')));\n    if(x.b&&(x.b===-1||x.b>Date.now()))d.append(el",
"('div','',x.b===-1?'\u26d4 Permanently banned':'\u23f3 Timed out until '+new Date(x.b).toLocaleStrin",
"g()));\n    const rw=el('div');rw.style.cssText='display:none;gap:6px;margin:8px 0';const p",
"i=el('input');pi.placeholder='New password (6+ characters)';pi.style.cssText='flex:1;min-w",
"idth:0';\n    const sv=el('button','p','Save');sv.onclick=async()=>{if(await act({action:'r",
"esetuser',name:x.d,password:pi.value})){toast('Password reset. Tell them their new passwor",
"d.');pi.value='';rw.style.display='none'}};rw.append(pi,sv);\n    const rs=el('button','','",
"Reset password');rs.onclick=()=>{rw.style.display=rw.style.display==='none'?'flex':'none'}",
";\n    const del=el('button','','Delete');del.onclick=()=>sure(del,()=>act({action:'deluser",
"',name:x.d}));\n    d.append(rw,rs,' ',del);b.append(d)})}\nlet ML=[];\nfunction drawMods(u){",
"ML=u;const b=$('#mlist');b.innerHTML='';const q=$('#mq').value.trim().toLowerCase();\n  con",
"st a=u.filter(x=>x.d.toLowerCase().includes(q)).sort((x,y)=>(y.m?1:0)-(x.m?1:0));\n  $('#mc",
"').textContent=u.filter(x=>x.m).length+' mods';\n  if(!a.length){b.append(el('p','','No mem",
"bers found.'));return}\n  a.slice(0,100).forEach(x=>{const r=el('div','sub');r.append(el('b",
"','',x.d+(x.m?'  \ud83d\udee1\ufe0f Mod':'')+' '));\n    const bt=el('button',x.m?'':'p',x.m?'Remove mod':'",
"Mod');bt.onclick=()=>x.m?sure(bt,()=>act({action:'setmod',name:x.d,mod:false})):act({actio",
"n:'setmod',name:x.d,mod:true});r.append(bt);b.append(r)});\n  if(a.length>100)b.append(el('",
"p','','Showing the first 100. Search to narrow it down.'))}\n$('#sf').onsubmit=async e=>{\n ",
" e.preventDefault();const btn=$('#sb');btn.disabled=true;\n  try{\n    const r=await post('s",
"ubmit',{list:$('#f0').value,q1:$('#f1').value,q2:$('#f2').value,q3:$('#f3').value,q4:$('#f",
"4').value,q5:$('#f5').value});\n    if(r.ok){$('#sf').reset();shut('#fm');$('#ov').classLis",
"t.add('on')}else toast(r.error||'Something went wrong');\n  }catch(err){toast('Could not su",
"bmit, try again')}\n  btn.disabled=false;\n};\nlet LH={},quiet={},pn=0,pt=null,pbusy=false,la",
"stAct=Date.now();\nconst vis=()=>document.visibilityState==='visible';\nasync function syncN",
"ow(){\n  if(pbusy||!(role||visOK)||banUntil||!vis())return;pbusy=true;\n  try{const l=cur,r=",
"await api('sync?l='+l+'&h='+encodeURIComponent(LH[l]||''));\n    if(r.net)return;\n    if(r.",
"until||r.auth){load();return}\n    if(r.error)return;\n    if(role!=='owner'&&typeof r.mod==",
"='boolean'&&r.mod!==(role==='mod')){load();return}\n    if(r.same){pn++;return}\n    if(r.li",
"st&&!(quiet[l]>Date.now())){L[l]=r.list;LH[l]=r.h;pn=0;render()}\n  }finally{pbusy=false}}\n",
"function sched(){clearTimeout(pt);pt=setTimeout(async()=>{if(Date.now()-lastAct<300000)awa",
"it syncNow();sched()},Math.min(60000,20000*(1+Math.floor(pn/3))))}\nconst bump=()=>{const n",
"=Date.now(),was=n-lastAct>300000;lastAct=n;if(was){pn=0;syncNow();sched()}};\n['click','key",
"down','touchstart'].forEach(ev=>addEventListener(ev,bump,{passive:true}));\ndocument.addEve",
"ntListener('visibilitychange',()=>{if(vis()){pn=0;lastAct=Date.now();syncNow();sched()}});",
"\nlet CK=null,CH='',cpt=null,cn=0,mine=new Map(),gone=new Map(),cShown='';\nconst drawC=a=>{",
"const b=$('#cl');b.innerHTML='';if(!a.length){b.append(el('p','','No comments yet. Be the ",
"first!'));return}\n  a.forEach(x=>{const d=el('div','sub');d.append(el('b','',x.r==='owner'",
"?'':x.u+' '));if(x.r){const g=el('span','',x.r==='owner'?'\ud83d\udc51 Owner':'\ud83d\udc8e Mod');g.style.cssTex",
"t='background:'+(x.r==='owner'?'#ff0033':'#b14bff')+';color:#fff;font-size:12px;font-weigh",
"t:700;border-radius:8px;padding:2px 8px;margin-right:6px';d.append(g)}d.append(el('small',",
"'',new Date(x.t).toLocaleString()));const t=el('div','',x.x);t.style.overflowWrap='anywher",
"e';d.append(t);\n    if(role==='owner'||role==='mod'||(visName&&x.u===visName)){const del=e",
"l('button','','Delete');del.style.cssText='padding:3px 10px;font-size:12px;margin-top:4px'",
";del.onclick=()=>sure(del,async()=>{const r=await post('cdel',{list:CK.l,id:CK.i,cid:x.i})",
";if(r.comments){gone.set(x.i,Date.now());mine.delete(x.i);cShown='';showC(r.comments)}else",
" toast(r.error||'Could not delete')});d.append(del)}\n    b.append(d)})};\nconst cmerge=a=>{",
"const n=Date.now();for(const[i,v]of mine)if(n-v.at>90000)mine.delete(i);for(const[i,v]of g",
"one)if(n-v>90000)gone.delete(i);\n  const ids=new Set(a.map(x=>x.i)),o=a.filter(x=>!gone.ha",
"s(x.i));for(const[i,v]of mine){if(ids.has(i))mine.delete(i);else if(!gone.has(i))o.push(v.",
"c)}return o.sort((x,y)=>y.t-x.t)};\nconst showC=a=>{const m=cmerge(a),s=JSON.stringify(m);i",
"f(s===cShown)return;cShown=s;drawC(m)};\nfunction cpoll(){clearTimeout(cpt);cpt=setTimeout(",
"async()=>{\n  if(!$('#cm').classList.contains('on'))return;\n  const k=CK;\n  if(vis()&&Date.",
"now()-lastAct<300000){\n    const r=await api('comments?list='+k.l+'&id='+encodeURIComponen",
"t(k.i)+'&h='+encodeURIComponent(CH));\n    if(CK===k&&$('#cm').classList.contains('on')){\n ",
"     if(r.comments){CH=r.h||'';cn=0;showC(r.comments)}else if(r.same)cn++;else if(r.until|",
"|r.auth)load()}}\n  cpoll()},cn>10?15000:6000)}\nconst openC=async e=>{CK={l:cur,i:e.id};CH=",
"'';cn=0;mine=new Map();gone=new Map();cShown='';$('#ch').textContent='Comments \u00b7 '+e.name;",
"$('#ct').value='';$('#cl').innerHTML='';$('#cm').classList.add('on');const r=await api('co",
"mments?list='+cur+'&id='+encodeURIComponent(e.id));if(r.comments){CH=r.h||'';showC(r.comme",
"nts);cpoll()}else toast(r.error||'Could not load comments')};\n$('#cs').onclick=async()=>{c",
"onst t=$('#ct').value.trim();if(!t||!CK)return;const b=$('#cs');b.disabled=true;const r=aw",
"ait post('comment',{list:CK.l,id:CK.i,text:t});b.disabled=false;if(r.comments){$('#ct').va",
"lue='';const c0=r.comments[0];if(c0)mine.set(c0.i,{c:c0,at:Date.now()});CH='';cShown='';sh",
"owC(r.comments)}else toast(r.error||'Could not post')};\n$('#cc').onclick=()=>{shut('#cm');",
"clearTimeout(cpt)};\nlet lkv={cv:[''],sv:['']},LKT='cv';\nconst lnk=(u,t,blk)=>{const a=el('",
"a','',t);a.href=u;a.target='_blank';a.rel='noopener noreferrer';a.style.cssText='padding:5",
"px 11px;font-size:13px;color:#fff;background:#ff0033;border-radius:10px;text-decoration:no",
"ne;font-weight:700;display:'+(blk?'block;text-align:center;padding:10px;margin:8px 0;font-",
"size:15px':'inline-block');return a};\nconst okU=u=>/^https:\\/\\/(www\\.youtube\\.com|youtu\\.b",
"e)\\//.test(u);\nfunction ytBtns(e,c){[['cv','Completion','Completions','completion'],['sv',",
"'Showcase','Showcases','showcase']].forEach(([k,one,many,word])=>{const a=(e[k]||[]).filte",
"r(okU);if(!a.length)return;\n  if(a.length===1)c.append(lnk(a[0],'Watch '+one));\n  else{con",
"st b=el('button','','Watch '+many+'+...');b.style.cssText='padding:5px 11px;font-size:13px",
";color:#fff;background:#ff0033;border:0;font-weight:700';b.onclick=()=>{$('#wt').textConte",
"nt=many;const l=$('#wl');l.innerHTML='';a.forEach(u=>l.append(lnk(u,'Watch this '+word,1))",
");$('#wm').classList.add('on')};c.append(b)}})}\n$('#wc').onclick=()=>shut('#wm');\nconst pl",
"usLbl=()=>{['cv','sv'].forEach(k=>{const n=lkv[k].slice(1).filter(x=>x.trim()).length;$('#",
"'+(k==='cv'?'ecp':'esp')).textContent='+'+(n?n:'')})};\nconst gl=k=>{lkv[k][0]=$('#e'+k).va",
"lue;return lkv[k]};\nfunction drawLk(){const a=lkv[LKT],b=$('#lkl');b.innerHTML='';\n  for(l",
"et i=1;i<a.length;i++){const inp=el('input');inp.placeholder='YouTube link '+(i+1);inp.val",
"ue=a[i];inp.maxLength=200;inp.style.cssText='width:100%;margin:6px 0';inp.oninput=()=>{a[i",
"]=inp.value;plusLbl()};b.append(inp)}\n  $('#lka').disabled=a.length>=10;$('#lkt').textCont",
"ent=(LKT==='cv'?'More completion links':'More showcase links')+' ('+a.length+'/10)'}\nconst",
" openLk=k=>{lkv[k][0]=$('#e'+k).value;LKT=k;drawLk();$('#lk').classList.add('on')};\n$('#ec",
"p').onclick=()=>openLk('cv');$('#esp').onclick=()=>openLk('sv');\n$('#lka').onclick=()=>{co",
"nst a=lkv[LKT];if(a.length<10){a.push('');drawLk();const i=$('#lkl').querySelectorAll('inp",
"ut');i[i.length-1].focus()}};\n$('#lkd').onclick=()=>{shut('#lk');plusLbl()};\nconst SIG={},",
"chg=(k,s)=>{const j=JSON.stringify(s);if(SIG[k]===j)return false;SIG[k]=j;return true};\nle",
"t ptb=false;\nasync function panelTick(){\n  if(ptb||!vis()||Date.now()-lastAct>300000||!(ro",
"le||visOK))return;ptb=true;\n  try{\n    const on=i=>$(i).classList.contains('on');\n    if(o",
"n('#sm')&&role){const s=await api('submissions');if(Array.isArray(s)&&chg('s',s))drawSubs(",
"s)}\n    if(on('#am')&&role==='owner'){const s=await api('approved');if(Array.isArray(s)&&c",
"hg('a',s))drawApproved(s)}\n    const um=on('#um'),mm=on('#mm'),tm=on('#tm')&&role==='owner",
"';\n    if(um||mm||tm){const s=await api('users');if(Array.isArray(s)&&chg('u',s)){\n      i",
"f(um&&![...document.querySelectorAll('#ulist input')].some(i=>i.offsetParent))drawUsers(s)",
";\n      if(mm)drawMods(s);\n      if(tm){TU=s;fillUsers();drawTimeouts(tact(s))}}}\n  }final",
"ly{ptb=false}}\nsetInterval(panelTick,30000);\ndocument.querySelectorAll('.md .c').forEach(c",
"=>{const w=el('div','xb'),b=el('button','','\\u2715 Close');b.type='button';b.onclick=()=>c",
".parentElement.classList.remove('on');w.append(b);c.prepend(w)});\n$('#ok').onclick=()=>$('",
"#ov').classList.remove('on');\nlet mode='login',rcCb=null;\nconst setMode=m=>{mode=m;const l",
"=m==='login';$('#gh').textContent=l?'Log in':'Sign up';$('#ab').textContent=l?'Log in':'Si",
"gn up';$('#at').textContent=l?'New here? Sign up':'Have an account? Log in';$('#ah').textC",
"ontent=l?'':\"Use the name you're widely known for. You'll get a recovery code in case you ",
"forget your password.\";$('#ae').textContent=''};\nsetMode('login');\n$('#at').onclick=e=>{e.",
"preventDefault();setMode(mode==='login'?'signup':'login')};\nconst newCode=()=>{const al='A",
"BCDEFGHJKLMNPQRSTUVWXYZ23456789',a=new Uint8Array(16);crypto.getRandomValues(a);return [0,",
"4,8,12].map(i=>[...a.slice(i,i+4)].map(x=>al[x%32]).join('')).join('-')};\nconst showCode=c",
"b=>{const c=newCode();$('#rcc').textContent=c;rcCb=()=>cb(c);$('#rc').classList.add('on')}",
";\n$('#rcp').onclick=async()=>{try{await navigator.clipboard.writeText($('#rcc').textConten",
"t);toast('Copied')}catch(e){toast('Select the code and copy it')}};\n$('#rcd').onclick=()=>",
"{shut('#rc');rcCb&&rcCb()};\nconst enter=async r=>{sess=r.token;try{localStorage.setItem('s",
"ess',sess)}catch(e){}await load();toast('Welcome, '+r.name)};\n$('#ab').onclick=async()=>{c",
"onst n=$('#an').value.trim(),p=$('#ap').value;$('#ae').textContent='';\n  if(!n||!p){$('#ae",
"').textContent='Enter your name and password';return}\n  if(mode==='login'){const r=await p",
"ost('vlogin',{name:n,password:p});if(r.ok)enter(r);else $('#ae').textContent=r.error||'Som",
"ething went wrong';return}\n  if(p.length<6){$('#ae').textContent='Password needs 6+ charac",
"ters';return}\n  showCode(async c=>{const r=await post('signup',{name:n,password:p,code:c})",
";if(r.ok)enter(r);else $('#ae').textContent=r.error||'Something went wrong'})};\n$('#ap').o",
"nkeydown=e=>{if(e.key==='Enter')$('#ab').click()};\n$('#af').onclick=e=>{e.preventDefault()",
";$('#re').textContent='';$('#rv').classList.add('on')};$('#rbk').onclick=e=>{e.preventDefa",
"ult();shut('#rv')};\n$('#rb').onclick=()=>{const n=$('#rn').value.trim(),k=$('#rk').value.t",
"rim(),p=$('#rp').value;$('#re').textContent='';\n  if(!n||!k||p.length<6){$('#re').textCont",
"ent='Fill everything in (password 6+ characters)';return}\n  showCode(async c=>{const r=awa",
"it post('recover',{name:n,code:k,newcode:c,password:p});if(r.ok){shut('#rv');enter(r)}else",
" $('#re').textContent=r.error||'Something went wrong'})};\n$('#gl').onclick=e=>{e.preventDe",
"fault();$('#lg').click()};\n(async()=>{if(pw){const r=await api('login',{method:'POST'});if",
"(r.ok)role=r.role;else{pw='';usr=''}}showAdmin();load();sched()})();\n\n</script></body></ht",
"ml>\n"
].join('');

const J=(d,s=200)=>new Response(JSON.stringify(d),{status:s,headers:{'content-type':'application/json'}});
const MAX=10000,LISTS=['decor','difficulty','layout'];
const cut=(v,n)=>String(v==null?'':v).slice(0,n);
const hex=async s=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(x=>x.toString(16).padStart(2,'0')).join('');
const kdf=async(s,salt)=>{const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(s),'PBKDF2',false,['deriveBits']);return [...new Uint8Array(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:10000},k,256))].map(x=>x.toString(16).padStart(2,'0')).join('')};
const BODY=new Map(),MC=new Map(),SC=new Map(),RL=new Map(),LT=30000,CT=5000,BT=15000,SCT=20000;
const hsh=s=>{let h=5381;for(let i=0;i<s.length;i++)h=(h*33^s.charCodeAt(i))>>>0;return h.toString(36)+'.'+s.length.toString(36)};
const lim=(k,ms,max=1)=>{const n=Date.now(),a=(RL.get(k)||[]).filter(t=>n-t<ms);if(a.length>=max){RL.set(k,a);return true}a.push(n);RL.set(k,a);if(RL.size>3000)RL.clear();return false};
const yt=u=>{u=String(u||'').trim();if(!u)return'';let x;try{x=new URL(/^https?:\/\//i.test(u)?u:'https://'+u)}catch(e){return null}
  const h=x.hostname.toLowerCase().replace(/^(www\.|m\.)/,''),t=x.searchParams.get('t');let id='',sh=0;
  if(h==='youtu.be')id=x.pathname.slice(1).split('/')[0];
  else if(h==='youtube.com'){const m=x.pathname.match(/^\/(shorts|live|embed)\/([\w-]{11})(\/|$)/);if(m){id=m[2];sh=m[1]==='shorts'}else if(x.pathname==='/watch')id=x.searchParams.get('v')||''}
  if(!/^[\w-]{11}$/.test(id))return null;
  return sh?'https://www.youtube.com/shorts/'+id:'https://youtu.be/'+id+(t&&/^\d{1,6}s?$/.test(t)?'?t='+t:'')};
const lk=v=>{if(v===undefined)return undefined;if(!Array.isArray(v))return null;const o=[];for(const s of v.slice(0,10)){const y=yt(cut(s,200));if(y===null)return null;if(y)o.push(y)}return o};
export default{async fetch(req,env){
  const p=new URL(req.url).pathname;
  if(!p.startsWith('/api/'))return new Response(HTML,{headers:{'content-type':'text/html;charset=utf-8','cache-control':'public, max-age=60'}});
  const kv=env.LISTS;
  if(!kv)return J({error:'KV binding LISTS is not set up'},500);
  const get=async(k,d='[]')=>JSON.parse(await kv.get(k)||d);
  const ttl=k=>k.startsWith('c:')?CT:LT;
  const rd=async k=>{const c=MC.get(k);if(c&&c.x>Date.now())return c;const raw=await kv.get(k)||'[]';const e={v:JSON.parse(raw),h:hsh(raw),x:Date.now()+ttl(k)};MC.set(k,e);if(MC.size>400){const n=Date.now();for(const[q,z]of MC)if(z.x<n)MC.delete(q);if(MC.size>400)MC.clear()}return e};
  const put=async(k,v)=>{const s=JSON.stringify(v);await kv.put(k,s);MC.set(k,{v,h:hsh(s),x:Date.now()+ttl(k)})};
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
  const listUsers=async()=>{const uc=MC.get('users');if(uc&&uc.x>Date.now())return uc.v;const out=[];let cursor;do{const r=await kv.list({prefix:'u:',cursor});for(const x of r.keys)if(x.metadata)out.push(x.metadata);cursor=r.list_complete?null:r.cursor}while(cursor&&out.length<5000);const uv=out.sort((a,b)=>(b.c||0)-(a.c||0));MC.set('users',{v:uv,x:Date.now()+20000});return uv};
  const inval=()=>{SC.clear();MC.delete('users')};
  const upd=(l,k,m)=>{l=l.filter(x=>x.d.toLowerCase()!==k);if(m)l.push(m);return l};
  const dropBox=pre=>MC.delete('box:'+pre);
  const listBox=async pre=>{const c=MC.get('box:'+pre);if(c&&c.x>Date.now())return c.v;const r=await kv.list({prefix:pre,limit:100});const v=(await Promise.all(r.keys.map(async x=>{let b=BODY.get(x.name);if(b===undefined){b=await kv.get(x.name,'json');if(b)BODY.set(x.name,b)}return b}))).filter(Boolean);if(BODY.size>600)BODY.clear();MC.set('box:'+pre,{v,x:Date.now()+BT});return v};
  let vname=null,vban=0,vmod=false;
  const stk=req.headers.get('x-sess')||'';
  if(stk.length>20){let c=SC.get(stk);if(!c||c.x<Date.now()){c=null;const sr=await kv.get('t:'+await hex(stk));if(sr){const ur=await kv.get('u:'+JSON.parse(sr).u);if(ur){const a=JSON.parse(ur);c={a:a.b||0,d:a.d,m:!!a.m,x:Date.now()+SCT};SC.set(stk,c);if(SC.size>1000)SC.clear()}}}
    if(c){if(c.a&&(c.a===-1||c.a>Date.now()))vban=c.a;else{vname=c.d;vmod=c.m}}}
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
      if(lim('su:'+(req.headers.get('cf-connecting-ip')||'x'),600000,10))return J({error:'Too many sign-ups from your network. Try again in a few minutes.'},429);
      const now=Date.now();await kv.put('u:'+k,JSON.stringify({d,c:now,s,h:await kdf(pwd,s),rs,r:await hex(rs+code)}),{metadata:{d,c:now,l:now}});MC.delete('users');
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
    const E=await Promise.all(LISTS.map(rd)),o={name:vname,mod:vmod,h:{}};LISTS.forEach((k,i)=>{o[k]=E[i].v;o.h[k]=E[i].h});
    return J(o);
  }
  if(p==='/api/sync'){
    if(!me&&!vname)return vban?J({error:'Timed out',until:vban},403):J({error:'Log in with a username first',auth:1},401);
    const sp=new URL(req.url).searchParams,l=sp.get('l');
    if(!LISTS.includes(l))return J({error:'bad list'},400);
    const e=await rd(l);
    return sp.get('h')===e.h?J({same:1,mod:vmod}):J({list:e.v,h:e.h,mod:vmod});
  }
  if(p==='/api/login')return me&&me.role==='owner'?J({ok:true,role:me.role,name:me.name}):J({error:'Wrong login'},401);
  if(p==='/api/submit'&&req.method==='POST'){
    if(!me&&!vname)return J({error:'Log in first'},401);
    let b;try{b=await req.json()}catch(e){return J({error:'bad'},400)}
    if(!(me&&me.role==='owner')&&lim('sb:'+(me?me.name:vname),30000))return J({error:'Slow down. Wait a few seconds.'},429);
    const list=cut(b.list,20);if(!LISTS.includes(list))return J({error:'bad list'},400);
    const t=Date.now(),id=String(9999999999999-t).padStart(13,'0')+'-'+crypto.randomUUID().slice(0,8);
    await kv.put('s:'+id,JSON.stringify({id,t,user:me?me.name:vname,list,q1:cut(b.q1,300),q2:cut(b.q2,300),q3:cut(b.q3,300),q4:cut(b.q4,200),q5:cut(b.q5,100)}));
    dropBox('s:');
    return J({ok:true});
  }
  if(p==='/api/comments'||p==='/api/comment'||p==='/api/cdel'){
    if(!me&&!vname)return J({error:'Log in first',auth:1},401);
    let b={};const sp=new URL(req.url).searchParams;
    if(req.method==='POST'){try{b=await req.json()}catch(e){return J({error:'bad'},400)}}
    const lst=cut(p==='/api/comments'?sp.get('list'):b.list,20),lid=cut(p==='/api/comments'?sp.get('id'):b.id,20).trim();
    if(!LISTS.includes(lst)||!lid)return J({error:'bad level'},400);
    const ck='c:'+lst+':'+lid;
    if(p==='/api/comments'){const E=await rd(ck);return sp.get('h')===E.h?J({same:1}):J({comments:E.v,h:E.h})}
    if(req.method!=='POST')return J({error:'bad'},400);
    let ca=await get(ck);
    if(p==='/api/cdel'){
      const x=ca.find(c=>c.i===cut(b.cid,60));
      if(!x)return J({comments:ca});
      if(!me&&x.u!==vname)return J({error:'Not allowed'},403);
      ca=ca.filter(c=>c!==x);await put(ck,ca);return J({comments:ca});
    }
    const text=cut(b.text,300).trim();if(!text)return J({error:'Write something first'},400);
    const who=me?me.name:vname;
    if(ca.some(c=>c.u===who&&Date.now()-c.t<10000))return J({error:'Slow down. Wait a few seconds.'},429);
    if(!(await rd(lst)).v.some(e=>e.id===lid))return J({error:'Level not found'},404);
    if(!(me&&me.role==='owner')&&lim('cm:'+who,15000))return J({error:'Slow down. Wait a few seconds.'},429);
    ca.unshift({i:Date.now()+'-'+crypto.randomUUID().slice(0,6),u:who,t:Date.now(),x:text,...(me?{r:me.role}:{})});
    ca=ca.slice(0,100);await put(ck,ca);return J({comments:ca});
  }
  if(!me)return J({error:'Not allowed'},401);
  if(p==='/api/submissions'){if(new URL(req.url).searchParams.get('f'))dropBox('s:');return J(await listBox('s:'))}
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
      await kv.delete('s:'+id);dropBox('s:');dropBox('a:');
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
      await kv.put('u:'+k,JSON.stringify(u),{metadata:{...metadata,b:u.b}});inval();
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
    await kv.put('u:'+k,JSON.stringify(u),{metadata:m});inval();
    const now=Date.now();
    return J({timeouts:upd(await listUsers(),k,m).filter(x=>x.b&&(x.b===-1||x.b>now))});
  }
  if(b.action==='resetuser'||b.action==='deluser'){
    const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
    const{value,metadata}=await kv.getWithMetadata('u:'+k);
    if(!value)return J({error:'No such member'},404);
    if(b.action==='deluser'){await kv.delete('u:'+k);inval();return J({users:upd(await listUsers(),k,null)})}
    const pwd=cut(b.password,100);if(pwd.length<6)return J({error:'Password needs 6+ characters'},400);
    const u=JSON.parse(value),s=crypto.randomUUID();
    await kv.put('u:'+k,JSON.stringify({...u,s,h:await kdf(pwd,s)}),{metadata});inval();
    await kv.delete('f:'+k);
    return J({ok:true});
  }
  if(b.action==='delsub'){const id=cut(b.id,60);await kv.delete('s:'+id);dropBox('s:');return J({removed:id})}
  if(b.action==='delapproved'){const id=cut(b.id,60);await kv.delete('a:'+id);dropBox('a:');return J({removedA:id})}
  if(b.action==='setmod'){
    const k=cut(b.name,20).trim().replace(/\s+/g,' ').toLowerCase();
    const{value,metadata}=await kv.getWithMetadata('u:'+k);
    if(!value)return J({error:'No such member'},404);
    const u=JSON.parse(value),m={...metadata};
    if(b.mod){u.m=1;m.m=1}else{delete u.m;delete m.m}
    await kv.put('u:'+k,JSON.stringify(u),{metadata:m});inval();
    return J({mods:upd(await listUsers(),k,m)});
  }

  if(!LISTS.includes(b.list))return J({error:'bad list'},400);
  let a=await get(b.list);
  const pos=Number(b.pos);
  if(b.action==='set'){
    if(!Number.isInteger(pos)||pos<1||pos>MAX)return J({error:'Slot must be 1-'+MAX},400);
    const cv=lk(b.cv),sv=lk(b.sv);if(cv===null||sv===null)return J({error:'Each link must be a YouTube video or Short link'},400);
    const old=a.find(e=>e.pos===pos)||{};
    a=a.filter(e=>e.pos!==pos);
    const ne={pos,id:cut(b.id,20),name:cut(b.name,80),creator:cut(b.creator,60)},c2=cv===undefined?old.cv:cv,s2=sv===undefined?old.sv:sv;
    if(c2&&c2.length)ne.cv=c2;if(s2&&s2.length)ne.sv=s2;
    a.push(ne);
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
  return J({list:a,h:MC.get(b.list).h});
}};