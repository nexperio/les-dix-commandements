const { chromium } = require('playwright');
(async () => {
  const args = process.argv.slice(2);
  const b = await chromium.launch({ args: ['--use-gl=swiftshader','--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: +(process.env.W||1600), height: +(process.env.H||1000) }, deviceScaleFactor: +(process.env.DPR||1) });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type()==='error'||m.type()==='warning') errs.push(m.text()); });
  const reqs = []; p.on('request', r => reqs.push(r.url()));
  await p.goto('file://' + require('path').resolve(process.env.F || 'ancien-testament.html'));
  for (const a of args) {
    if (a.startsWith('wait:')) await p.waitForTimeout(+a.slice(5));
    else if (a.startsWith('js:')) console.log(await p.evaluate(a.slice(3)));
    else if (a.startsWith('scene:')) { const [_, i, zf, dx, dy] = a.split(':'); await p.evaluate(`(function(){fly=null;tour.mode='user';userT=1e12;const v=sceneView(${i});cam.x=v.x+(${dx||0});cam.y=v.y+(${dy||0});cam.z=v.z*${zf||1};})()`); }
    else if (a.startsWith('char:')) { const [_, i, j, zf] = a.split(':'); await p.evaluate(`(function(){fly=null;tour.mode='user';userT=1e12;const sc=SC[${i}],c=sc.d.chars[${j}];const v=sceneView(${i});cam.z=v.z*${zf||3};const [x,y]=cellPos(${i});if(c.out){cam.x=x+c.out.head[0];cam.y=y+c.out.head[1]+c.h*0.4;}else{const st=charState(c,5);const P={I:(a,b,z)=>[500+(a-b)*0.866,360+(a+b)*0.5-z]};const q=P.I(st.x,st.y,st.z);cam.x=x+q[0];cam.y=y+q[1]-c.h*0.4;}})()`); }
    else if (a === 'over') await p.evaluate(`(function(){tour.mode='user';userT=1e12;fly=null;Object.assign(cam,typeof overView==='function'?overView():{x:SW/2,y:SH/2,z:fitZ()});})()`);
    else if (a.startsWith('shot:')) await p.screenshot({ path: a.slice(5) });
  }
  console.log('errors:', errs.slice(0,10).join('\n'));
  console.log('requests:', reqs.length, reqs.slice(0,3).join(' '));
  await b.close();
})();
