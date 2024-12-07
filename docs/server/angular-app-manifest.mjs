
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio-app/home"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-app/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-app/resume"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-app/contact"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio-app/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 5109, hash: 'c1da340335fa8ab364cb17e05625703c1421094d37e6b32b987fffdd455eb47f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1208, hash: '92af01755f3246224256a5ecefb70c90be6bfbb8bb547942b4435e3f505d5da0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['portfolio/index.html', {size: 22979, hash: '44ef9e679068dd749de3257c81f15d8e489bbc360c0ccddedd50b699f68ca924', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 14719, hash: '1ae5714a5b92da5dc38074a00dd1f50f7ad6fc4660a0fa23248f080bb2824a4f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['resume/index.html', {size: 26865, hash: '4657e6c64c3210816d2ecf639009066c4a23c6adbad98d9199e3e5f24dfd9360', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)}], 
['contact/index.html', {size: 14357, hash: 'cc9a1162de74cda3249b58ab5fc79d5e7a94a524a5fe0d895dac7e87b31ce166', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)}], 
['styles-LBBWLVEU.css', {size: 231774, hash: 'YHfbqciVT1I', text: () => import('./assets-chunks/styles-LBBWLVEU_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
