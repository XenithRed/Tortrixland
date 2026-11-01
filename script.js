/**
 * TORTRIXLAND · Tienda
 * Todo el catálogo vive en CATALOG: para cambiar un precio, un objeto o
 * agregar un rango, edita los datos de abajo. El HTML se genera solo.
 */

const WA_NUMBER = '50248103741';
const DISCORD_URL = 'https://discord.gg/XsayGH6Sb';

/* ==========================================================
   ICONOS PIXEL (12x12). Cada letra es un color de la paleta,
   '.' es transparente.
   ========================================================== */
const SPRITES = {
    chest: {
        pal: { o: '#2b1a08', B: '#d39350', b: '#a8692b', d: '#5e3a14', l: '#e9e9e9' },
        rows: [
            '............',
            '.oooooooooo.',
            '.oBBBBBBBBo.',
            '.oBbbbbbbBo.',
            '.obbbbbbbbo.',
            '.odddlldddo.',
            '.obbblllbbo.',
            '.obbbbbbbbo.',
            '.obbbbbbbbo.',
            '.oddddddddo.',
            '.oooooooooo.',
            '............'
        ]
    },
    apple: {
        pal: { o: '#5a3d00', Y: '#fff3a8', y: '#ffd83d', d: '#d49a00', s: '#6b4a1e', l: '#57b947' },
        rows: [
            '.....ss.....',
            '.....s.ll...',
            '..oooooooo..',
            '.oYYyyyyyyo.',
            'oYYyyyyyyydo',
            'oYyyyyyyyydo',
            'oyyyyyyyyydo',
            'oyyyyyyyyddo',
            '.oyyyyyyddo.',
            '..oyyyyddo..',
            '...oooooo...',
            '............'
        ]
    },
    totem: {
        pal: { o: '#4a3300', G: '#ffe58a', g: '#f2c230', d: '#b07d10', e: '#2ecc71' },
        rows: [
            '...oooooo...',
            '...oGGggo...',
            '...oeggeo...',
            '...oggggo...',
            '...oddddo...',
            'oooogGggoooo',
            'oGggggggggdo',
            'ooooggggoooo',
            '...oeggeo...',
            '...oggddo...',
            '....oddo....',
            '....oooo....'
        ]
    },
    rocket: {
        pal: { o: '#3a1a10', R: '#ff8a7a', r: '#e0403a', p: '#f3ead6', s: '#8a6a3a', f: '#ffd23d' },
        rows: [
            '.....oo.....',
            '....oRRo....',
            '...oRrrro...',
            '...opppro...',
            '...oRrrro...',
            '...opppro...',
            '...oRrrro...',
            '....osso....',
            '.....ss.....',
            '.....ss.....',
            '....f..f....',
            '...f.ff.f...'
        ]
    },
    web: {
        pal: { w: '#eeeeee', W: '#a9a9b8' },
        rows: [
            'w....ww....w',
            '.w...ww...w.',
            '..wWWwwWWw..',
            '..W.w..w.W..',
            '.W..wWWw..W.',
            'wwwww..wwwww',
            'wwwww..wwwww',
            '.W..wWWw..W.',
            '..W.w..w.W..',
            '..wWWwwWWw..',
            '.w...ww...w.',
            'w....ww....w'
        ]
    },
    wool: {
        pal: { o: '#4a4a55', a: '#fafafa', b: '#dcdce4', c: '#bcbcc8' },
        rows: [
            '............',
            '.oooooooooo.',
            '.oaabaaabao.',
            '.oabaacaabo.',
            '.obaaabaaco.',
            '.oaacaaabao.',
            '.oabaabaaco.',
            '.ocaabaacao.',
            '.oaabacaabo.',
            '.obcbbcbbco.',
            '.oooooooooo.',
            '............'
        ]
    },
    shears: {
        pal: { o: '#2a2a2a', s: '#e2e2e8', S: '#8a8a96', h: '#d0453a' },
        rows: [
            '..o......o..',
            '..so....os..',
            '...so..os...',
            '....soos....',
            '.....ss.....',
            '.....SS.....',
            '....hSSh....',
            '..hhh..hhh..',
            '.h...hh...h.',
            '.h...hh...h.',
            '..hhh..hhh..',
            '............'
        ]
    },
    potion: {
        pal: { o: '#2a2a40', c: '#9a7444', g: '#d6ecff', p: '#a8323a', P: '#e86a6a' },
        rows: [
            '....cccc....',
            '....oggo....',
            '....oggo....',
            '....oggo....',
            '...oggggo...',
            '..oggggggo..',
            '.opPppppppo.',
            '.oPppppppppo',
            '.oppppppppo.',
            '.oppppppppo.',
            '..oppppppo..',
            '...oooooo...'
        ]
    },
    book: {
        pal: { o: '#2a1840', C: '#a07ae0', c: '#6b3fa0', p: '#f3ead6', g: '#ffd23d' },
        rows: [
            '............',
            '..ooooooooo.',
            '..oCCCCCCop.',
            '..oCccccCop.',
            '..oCcggcCop.',
            '..oCcggcCop.',
            '..oCccccCop.',
            '..oCCCCCCop.',
            '..oCCCCCCop.',
            '..ooooooooo.',
            '............',
            '............'
        ]
    },
    coin: {
        pal: { o: '#5a3d00', Y: '#fff3a8', y: '#ffd23d', d: '#c48a00' },
        rows: [
            '............',
            '............',
            '....oooo....',
            '...oYyyyo...',
            '..oYyddyydo.',
            '..oyydyyydo.',
            '..oyydyyydo.',
            '..oyyddyydo.',
            '...oyyydo...',
            '....oooo....',
            '............',
            '............'
        ]
    },
    key: {
        pal: { o: '#1e1e28', K: '#cfcfd8', k: '#8a8a96' },
        rows: [
            '............',
            '............',
            '............',
            '.oooo.......',
            'oKKKKo......',
            'oK..Ko......',
            'oK..Kooooooo',
            'oKKKKKKKKKKo',
            '.oooooKKoKKo',
            '......oo.oo.',
            '............',
            '............'
        ]
    },
    gem: {
        pal: { o: '#0e3a52', W: '#e8ffff', w: '#6fe6ff', b: '#2aa6d6' },
        rows: [
            '............',
            '............',
            '...oooooo...',
            '..oWwwwwbo..',
            '.oWwwwwwwbbo',
            '..obwwwwbbo.',
            '...obwwbbo..',
            '....obbbo...',
            '.....obo....',
            '......o.....',
            '............',
            '............'
        ]
    },
    giftcard: {
        pal: { o: '#12331f', G: '#8fe89a', g: '#3fb950', r: '#ffd23d' },
        rows: [
            '............',
            '............',
            'oooooooooooo',
            'oGGGGrGGGGGo',
            'oGgggrggggGo',
            'orrrrrrrrrro',
            'oGgggrggggGo',
            'oGgggrggggGo',
            'oGGGGrGGGGGo',
            'oooooooooooo',
            '............',
            '............'
        ]
    },
    wallet: {
        pal: { o: '#0b1d4a', B: '#6a9cff', b: '#2f5fd0', y: '#ffd23d' },
        rows: [
            '............',
            '............',
            '..oooooooo..',
            '.obbbbbbbbo.',
            'oBBBBBBBBBBo',
            'oBbbbbbboooo',
            'oBbbbbbboyBo',
            'oBbbbbbboooo',
            'oBbbbbbbbbbo',
            'oooooooooooo',
            '............',
            '............'
        ]
    },
    chat: {
        pal: { o: '#1d1f4f', p: '#7b7fff', w: '#ffffff' },
        rows: [
            '............',
            '.oooooooooo.',
            'oppppppppppo',
            'oppwwppwwppo',
            'oppwwppwwppo',
            'oppppppppppo',
            'oppwppppwppo',
            'opppwwwwpppo',
            'oppppppppppo',
            '.oooppooooo.',
            '....po......',
            '....o.......'
        ]
    }
};

function spriteSVG(name, palOverride) {
    const sp = SPRITES[name];
    const pal = Object.assign({}, sp.pal, palOverride || {});
    const byColor = {};
    sp.rows.forEach((row, y) => {
        let x = 0;
        while (x < row.length) {
            const ch = row[x];
            if (ch === '.') { x++; continue; }
            let len = 1;
            while (row[x + len] === ch) len++;
            (byColor[ch] = byColor[ch] || []).push(`M${x} ${y}h${len}v1h-${len}z`);
            x += len;
        }
    });
    const paths = Object.keys(byColor)
        .map(ch => `<path fill="${pal[ch]}" d="${byColor[ch].join('')}"/>`)
        .join('');
    return `<svg viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true" focusable="false">${paths}</svg>`;
}

/* ==========================================================
   OBJETOS
   ========================================================== */
const KEY_TYPES = {
    comun:      { label: 'Común',      K: '#cfcfd8', k: '#8a8a96', color: '#c8c8c8' },
    op:         { label: 'OP',         K: '#ff6b6b', k: '#b02a2a', color: '#ff5555' },
    legendaria: { label: 'Legendaria', K: '#ffd23d', k: '#c48a00', color: '#ffaa00' },
    kits:       { label: 'Kits',       K: '#6fe6ff', k: '#2aa6d6', color: '#55ffff' },
    tortrix:    { label: 'Tortrix',    K: '#d58cff', k: '#8a3fc0', color: '#ff55ff' }
};

const ITEMS = {
    kit:      { sprite: 'chest',  name: v => `Kit ${v}` },
    gapple:   { sprite: 'apple',  name: () => 'Manzana dorada' },
    notch:    { sprite: 'apple',  name: () => 'Nocht', note: 'Manzana dorada encantada', glint: true },
    totem:    { sprite: 'totem',  name: () => 'Tótem' },
    rocket:   { sprite: 'rocket', name: () => 'Cohete' },
    web:      { sprite: 'web',    name: () => 'Telaraña' },
    telas:    { sprite: 'web',    name: () => 'Telas' },
    wool:     { sprite: 'wool',   name: () => 'Lana' },
    shears:   { sprite: 'shears', name: () => 'Tijera' },
    strength: { sprite: 'potion', name: () => 'Fuerza I' },
    punch:    { sprite: 'book',   name: () => 'Empuje', glint: true },
    coin:     { sprite: 'coin',   name: () => 'Coins III' },
    key:      { sprite: 'key',    name: v => `Llave ${KEY_TYPES[v].label}`, pal: v => KEY_TYPES[v], color: v => KEY_TYPES[v].color }
};

// it(objeto, cantidad, stacks, variante)
const it = (id, qty = 1, stacks = 1, v) => ({ id, qty, stacks, v });
const PVP_BASE = [it('web', 64), it('wool', 64), it('shears')];
const FARM_BASE = [it('telas', 64), it('shears')];

/* ==========================================================
   CATÁLOGO
   ========================================================== */
const CATALOG = [
    {
        id: 'rangos',
        label: 'Rangos',
        desc: 'Rangos con kit propio y recompensas que reclamas cada cierto tiempo.',
        products: [
            { name: 'Rango Hero', color: '#55ffff', price: 1.31, every: 1,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/rrcgy11n0eq.jpg',
              items: [it('kit', 1, 1, 'Honduras'), it('gapple', 64, 4), it('notch', 2), it('totem'), it('key', 1, 1, 'comun'), it('rocket', 64, 4), ...PVP_BASE] },
            { name: 'Rango GG', color: '#55ff55', price: 2.63, every: 1,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/d82ytki534k.jpg',
              items: [it('kit', 1, 1, 'El Salvador'), it('gapple', 64, 2), it('notch', 2), it('totem'), it('key', 1, 1, 'comun'), it('rocket', 64, 4), ...PVP_BASE] },
            { name: 'Rango VIP', color: '#ffff55', price: 3.94, every: 2,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/il5uinigf6c.jpg',
              items: [it('kit', 1, 1, 'Canadá'), it('gapple', 64), it('notch', 4), it('totem', 4), it('strength'), it('rocket', 64, 4), ...PVP_BASE] },
            { name: 'Rango VIP+', color: '#ffaa00', price: 6.56, every: 3,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/8eam9f2k16y.jpg',
              items: [it('kit', 1, 1, 'México'), it('gapple', 64, 4), it('notch', 8), it('totem', 4), it('strength'), it('punch'), it('rocket', 64, 3), ...PVP_BASE] },
            { name: 'Rango Tortrix', color: '#ff5555', price: 10.49, every: 6,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/gs7jxunfmc7.jpg',
              items: [it('kit', 1, 1, 'EE. UU.'), it('notch', 8), it('totem', 4), it('strength', 2), it('coin', 32), it('rocket', 64, 3), ...PVP_BASE] },
            { name: 'Rango Tortrix+', color: '#ff55ff', price: 14.43, every: 0, top: true,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/fomg26ezbi7.jpg',
              items: [it('kit', 1, 1, 'Mundo (exclusivo)'), it('notch', 16), it('totem', 4), it('strength', 2), it('rocket', 64, 2), it('key', 1, 1, 'legendaria'), it('key', 1, 1, 'kits'), ...PVP_BASE] }
        ]
    },
    {
        id: 'farmbox',
        label: 'Farmbox',
        desc: 'Kits para la modalidad Farmbox.',
        products: [
            { name: 'Rango Hero', color: '#55ffff', price: 1.31, every: 1,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/gszq015z9mi.jpeg',
              items: [it('kit', 1, 1, 'Creeper'), it('gapple', 64, 2), it('rocket', 64, 7), it('totem'), ...FARM_BASE] },
            { name: 'Rango GG', color: '#55ff55', price: 2.63, every: 2,
              img: 'https://pub-fffdd8547a89437d9a746ee061fbdee5.r2.dev/1788273380904-8a15cb95322bd1be2c78cb05c78c9843.jpeg',
              items: [it('kit', 1, 1, 'Zombie'), it('gapple', 64, 2), it('rocket', 64, 4), it('totem'), ...FARM_BASE] },
            { name: 'Rango VIP', color: '#ffff55', price: 3.94, every: 5,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/xfmjvqonw4e.jpeg',
              items: [it('kit', 1, 1, 'Esqueleto'), it('gapple', 64, 4), it('notch', 4), it('totem'), it('rocket', 64, 4), ...FARM_BASE] }
        ]
    },
    {
        id: 'landbox',
        label: 'Landbox',
        desc: 'Kits para la modalidad Landbox.',
        products: [
            { name: 'Rango VIP+', color: '#ffaa00', price: 7.88, every: 6,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/u1vhg537bl.jpeg',
              items: [it('kit', 1, 1, 'Wither'), it('gapple', 64, 4), it('notch', 2), it('totem', 4), it('rocket', 64, 5), ...FARM_BASE] },
            { name: 'Rango Tortrix+', color: '#ff55ff', price: 13.13, every: 6, top: true,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/cvrzas9u72w.jpeg',
              items: [it('kit', 1, 1, 'Dragón'), it('gapple', 64, 4), it('notch', 4), it('totem', 4), it('rocket', 64, 9), ...FARM_BASE] },
            { name: 'Rango Granjero', color: '#55ff55', price: 14.43, every: 8,
              img: 'https://rogddqelmxyuvhpjvxbf.supabase.co/storage/v1/object/public/files/tdncsz9a5pi.jpeg',
              items: [it('kit', 1, 1, 'Granjero'), it('gapple', 64, 4), it('notch', 6), it('totem', 4), it('rocket', 64, 7), ...FARM_BASE] }
        ]
    },
    {
        id: 'llaves',
        label: 'Llaves',
        desc: 'Paquetes de llaves. Pago único, sin tiempo de espera.',
        products: [
            { name: 'Llave Común', color: KEY_TYPES.comun.color, price: 1.31, once: true,
              img: 'https://pub-4228373e21b247deae05b2fb3bbe6ebc.r2.dev/a5eaa6b1-8b71-4b76-b096-882690674a21.jpg',
              items: [it('key', 20, 1, 'comun')] },
            { name: 'Llave OP', color: KEY_TYPES.op.color, price: 1.31, once: true,
              img: 'https://pub-4228373e21b247deae05b2fb3bbe6ebc.r2.dev/aec4f73c-b953-4d2f-b100-f58f00a8454c.jpg',
              items: [it('key', 5, 1, 'op')] },
            { name: 'Llave Legendaria', color: KEY_TYPES.legendaria.color, price: 1.31, once: true,
              img: 'https://pub-4228373e21b247deae05b2fb3bbe6ebc.r2.dev/7e2a8ea0-566b-47cd-81ba-ee0bd4442907.jpg',
              items: [it('key', 3, 1, 'legendaria')] },
            { name: 'Llave Kits', color: KEY_TYPES.kits.color, price: 1.31, once: true,
              img: 'https://pub-4228373e21b247deae05b2fb3bbe6ebc.r2.dev/2d3247ee-f7f1-4f63-b647-bb2edb39410d.jpg',
              items: [it('key', 3, 1, 'kits')] },
            { name: 'Llave Tortrix', color: KEY_TYPES.tortrix.color, price: 3.94, once: true, top: true,
              img: 'https://pub-4228373e21b247deae05b2fb3bbe6ebc.r2.dev/WhatsApp%20Image%202026-06-14%20at%205.09.09%20PM.jpeg',
              items: [it('key', 1, 1, 'tortrix')] }
        ]
    }
];

const PAYMENTS = [
    { sprite: 'gem',      name: 'Diamantes de Free Fire', desc: 'Recarga de diamantes a la cuenta que te digamos.' },
    { sprite: 'giftcard', name: 'Google Play',            desc: 'Tarjetas de regalo de Google Play.' },
    { sprite: 'wallet',   name: 'PayPal',                 desc: 'Pago directo por PayPal.' },
    { sprite: 'chat',     name: 'Otra forma',             desc: 'Escríbenos en Discord y lo acordamos.', href: DISCORD_URL, cta: 'Abrir Discord' }
];

/* ==========================================================
   HELPERS
   ========================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => n.toFixed(2);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function waLink(text) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function buyMessage(product, cat) {
    const mode = cat.id === 'rangos' || cat.id === 'llaves' ? '' : ` (${cat.label})`;
    return `Hola, quiero comprar ${product.name}${mode} de TORTRIXLAND por $${money(product.price)}.`;
}

function whenText(p) {
    if (p.once) return 'Pago único';
    if (p.every === 0) return 'Lo reclamas una vez';
    if (p.every === 1) return 'Lo reclamas cada día';
    return `Lo reclamas cada ${p.every} días`;
}

function itemInfo(entry) {
    const def = ITEMS[entry.id];
    return {
        name: def.name(entry.v),
        note: def.note || '',
        glint: !!def.glint,
        color: def.color ? def.color(entry.v) : null,
        svg: spriteSVG(def.sprite, def.pal ? def.pal(entry.v) : null)
    };
}

function amountText(entry) {
    if (entry.stacks > 1) return `${entry.stacks} stacks de ${entry.qty} (${entry.qty * entry.stacks} en total)`;
    return `Cantidad: ${entry.qty}`;
}

function slotHTML(entry, opts = {}) {
    const info = itemInfo(entry);
    const label = `${info.name}. ${amountText(entry)}`;
    const qty = entry.qty > 1 ? `<span class="qty">${entry.qty}</span>` : '';
    const stk = !opts.flat && entry.stacks > 1 ? `<span class="stk">×${entry.stacks}</span>` : '';
    return `<li><button type="button" class="slot${info.glint ? ' glint' : ''}"
        aria-label="${esc(label)}"
        data-name="${esc(info.name)}" data-note="${esc(info.note)}"
        data-amount="${esc(amountText(entry))}" ${info.color ? `data-color="${info.color}"` : ''}>
        ${info.svg}${qty}${stk}</button></li>`;
}

/* ==========================================================
   TIENDA (pestañas + tarjetas)
   ========================================================== */
function cardHTML(p, cat) {
    const first = p.items[0];
    const fallback = spriteSVG(ITEMS[first.id].sprite, ITEMS[first.id].pal ? ITEMS[first.id].pal(first.v) : null);
    return `
    <article class="card${p.top ? ' card-top' : ''}" style="--tier:${p.color}">
        <div class="card-art">
            <div class="card-art-fallback" aria-hidden="true">${fallback}</div>
            <img src="${p.img}" alt="" loading="lazy" onerror="this.remove()">
        </div>
        <div class="card-body">
            <h3 class="card-name">${esc(p.name)}</h3>
            <p class="card-when">${whenText(p)}</p>
            <ul class="inv${p.items.length === 1 ? ' inv-single' : ''}" aria-label="Qué incluye ${esc(p.name)}">
                ${p.items.map(e => slotHTML(e)).join('')}
            </ul>
        </div>
        <div class="card-foot">
            <p class="price"><span class="cur">$</span>${money(p.price)} <span class="usd">USD</span></p>
            <a class="btn btn-gold" href="${waLink(buyMessage(p, cat))}" target="_blank" rel="noopener"
               aria-label="Comprar ${esc(p.name)} por ${money(p.price)} dólares">Comprar</a>
        </div>
    </article>`;
}

let currentTab = 'rangos';

function renderTabs() {
    $('#tabs').innerHTML = CATALOG.map(cat => `
        <button type="button" role="tab" class="tab" id="tab-${cat.id}" data-tab="${cat.id}"
            aria-controls="tab-panel" aria-selected="false" tabindex="-1">
            <span class="tab-icon">${spriteSVG(cat.id === 'llaves' ? 'key' : cat.id === 'rangos' ? 'totem' : cat.id === 'farmbox' ? 'apple' : 'chest',
                cat.id === 'llaves' ? KEY_TYPES.legendaria : null)}</span>
            ${cat.label}
            <span class="tab-count">${cat.products.length}</span>
        </button>`).join('');

    $('#tabs').addEventListener('click', e => {
        const btn = e.target.closest('[data-tab]');
        if (btn) selectTab(btn.dataset.tab, { push: true });
    });

    $('#tabs').addEventListener('keydown', e => {
        const tabs = [...document.querySelectorAll('.tab')];
        const i = tabs.indexOf(document.activeElement);
        if (i < 0) return;
        let next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
            e.preventDefault();
            next.focus();
            selectTab(next.dataset.tab, { push: true });
        }
    });
}

function selectTab(id, { push = false, scroll = false } = {}) {
    const cat = CATALOG.find(c => c.id === id) || CATALOG[0];
    currentTab = cat.id;

    document.querySelectorAll('.tab').forEach(t => {
        const on = t.dataset.tab === cat.id;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
    });
    document.querySelectorAll('[data-tab-link]').forEach(a => {
        a.classList.toggle('active', a.dataset.tabLink === cat.id);
    });

    $('#tab-panel').setAttribute('aria-labelledby', `tab-${cat.id}`);
    $('#tab-desc').textContent = cat.desc;
    $('#grid').innerHTML = cat.products.map(p => cardHTML(p, cat)).join('');
    $('#grid').dataset.count = cat.products.length;

    if (push && location.hash !== `#${cat.id}`) {
        try { history.replaceState(null, '', `#${cat.id}`); } catch (_) { /* sandbox */ }
    }
    if (scroll) {
        $('#tienda').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }
}

/* ==========================================================
   HERO: cofre interactivo
   ========================================================== */
const CHEST_SLOTS = 27;
let chestTimers = [];

function expandStacks(items) {
    const out = [];
    items.forEach(e => {
        for (let s = 0; s < e.stacks; s++) out.push({ ...e, stacks: 1, _total: e.stacks, _orig: e });
    });
    return out;
}

function fillChest(product, cat, animate) {
    chestTimers.forEach(clearTimeout);
    chestTimers = [];

    const grid = $('#chest-grid');
    const slots = expandStacks(product.items).slice(0, CHEST_SLOTS);
    let html = '';
    for (let i = 0; i < CHEST_SLOTS; i++) {
        if (slots[i]) {
            const s = slots[i];
            html += slotHTML({ ...s._orig }, { flat: true }).replace('class="slot', `style="--i:${i}" class="slot`);
        } else {
            html += '<li><span class="slot slot-empty" aria-hidden="true"></span></li>';
        }
    }
    grid.innerHTML = html;
    // en el cofre cada stack ocupa su propio espacio: mostrar 64 en cada uno
    grid.querySelectorAll('.slot:not(.slot-empty)').forEach((el, i) => {
        if (!animate) return;
        el.classList.add('pending');
        chestTimers.push(setTimeout(() => {
            el.classList.remove('pending');
            el.classList.add('pop');
        }, 140 + i * 55));
    });

    $('#chest-title').innerHTML = `Cofre del <span style="color:${product.color}">${esc(product.name)}</span>`;
    $('#chest-meta').innerHTML = `<strong>$${money(product.price)}</strong> · ${whenText(product).toLowerCase()}`;
    $('#chest-buy').href = waLink(buyMessage(product, cat));
    $('#chest-buy').setAttribute('aria-label', `Comprar ${product.name} por ${money(product.price)} dólares`);

    document.querySelectorAll('.rank-chip').forEach(c => {
        c.setAttribute('aria-pressed', c.dataset.name === product.name);
    });
}

function renderHero() {
    const cat = CATALOG[0];
    $('#rank-picker').innerHTML = cat.products.map(p => `
        <button type="button" class="rank-chip" style="--tier:${p.color}" data-name="${esc(p.name)}" aria-pressed="false">
            ${esc(p.name.replace('Rango ', ''))}
        </button>`).join('');

    $('#rank-picker').addEventListener('click', e => {
        const b = e.target.closest('.rank-chip');
        if (!b) return;
        const p = cat.products.find(x => x.name === b.dataset.name);
        fillChest(p, cat, !reduceMotion);
    });

    const top = cat.products.find(p => p.top) || cat.products[cat.products.length - 1];
    fillChest(top, cat, !reduceMotion);
}

/* ==========================================================
   PAGOS
   ========================================================== */
function renderPayments() {
    $('#pay-grid').innerHTML = PAYMENTS.map(p => `
        <li class="pay">
            <span class="pay-icon">${spriteSVG(p.sprite)}</span>
            <div>
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.desc)}</p>
                ${p.href ? `<a class="pay-link" href="${p.href}" target="_blank" rel="noopener">${esc(p.cta)}</a>` : ''}
            </div>
        </li>`).join('');
}

/* ==========================================================
   TOOLTIP estilo Minecraft
   ========================================================== */
function initTooltip() {
    const tip = $('#tip');
    let anchor = null;

    function show(el) {
        anchor = el;
        const color = el.dataset.color;
        tip.innerHTML = `
            <p class="tip-name${el.classList.contains('glint') ? ' tip-ench' : ''}"${color ? ` style="color:${color}"` : ''}>${esc(el.dataset.name)}</p>
            ${el.dataset.note ? `<p class="tip-note">${esc(el.dataset.note)}</p>` : ''}
            <p class="tip-amt">${esc(el.dataset.amount)}</p>`;
        tip.hidden = false;
        place();
    }

    function place() {
        if (!anchor) return;
        const r = anchor.getBoundingClientRect();
        const t = tip.getBoundingClientRect();
        let x = r.right + 8;
        let y = r.top - 6;
        if (x + t.width > window.innerWidth - 8) x = r.left - t.width - 8;
        if (x < 8) x = Math.max(8, r.left + r.width / 2 - t.width / 2);
        if (x < 8 || x + t.width > window.innerWidth - 8) x = 8;
        if (y + t.height > window.innerHeight - 8) y = window.innerHeight - t.height - 8;
        if (y < 8) y = r.bottom + 8;
        tip.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    }

    function hide() {
        anchor = null;
        tip.hidden = true;
    }

    const isSlot = el => el && el.classList && el.classList.contains('slot') && el.dataset.name;

    document.addEventListener('pointerover', e => {
        const el = e.target.closest('.slot');
        if (isSlot(el) && e.pointerType === 'mouse') show(el);
    });
    document.addEventListener('pointerout', e => {
        const el = e.target.closest('.slot');
        if (el && el === anchor && !el.contains(e.relatedTarget) && document.activeElement !== el) hide();
    });
    document.addEventListener('focusin', e => { if (isSlot(e.target)) show(e.target); });
    document.addEventListener('focusout', e => { if (e.target === anchor) hide(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
    window.addEventListener('scroll', () => { if (anchor) place(); }, { passive: true });
    window.addEventListener('resize', hide);
}

/* ==========================================================
   ESCENARIO: estrellas y terreno pixel
   ========================================================== */
function seeded(seed) {
    return () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
    };
}

function drawSky() {
    const rnd = seeded(7);
    const stars = $('#stars');
    stars.setAttribute('viewBox', '0 0 400 200');
    stars.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    let s = '';
    for (let i = 0; i < 70; i++) {
        const x = Math.floor(rnd() * 400);
        const y = Math.floor(rnd() * 150);
        const size = rnd() > 0.85 ? 2 : 1;
        s += `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#f3efd8" opacity="${(0.25 + rnd() * 0.6).toFixed(2)}"/>`;
    }
    stars.innerHTML = s;

    const terrain = $('#terrain');
    const COLS = 120, B = 8, H = 18;
    terrain.setAttribute('viewBox', `0 0 ${COLS * B} ${H * B}`);
    terrain.setAttribute('preserveAspectRatio', 'xMidYMax slice');
    const r2 = seeded(42);
    const heights = [];
    for (let i = 0; i < COLS; i++) {
        const h = 4 + Math.sin(i * 0.21) * 1.6 + Math.sin(i * 0.071 + 2) * 2.2 + r2() * 0.9;
        heights.push(Math.max(2, Math.round(h)));
    }
    let g = '';
    heights.forEach((h, i) => {
        const x = i * B;
        const top = (H - h) * B;
        g += `<rect x="${x}" y="${top}" width="${B}" height="${B}" fill="#2c5a3b"/>`;
        g += `<rect x="${x}" y="${top}" width="${B}" height="2" fill="#3c7550"/>`;
        g += `<rect x="${x}" y="${top + B}" width="${B}" height="${B * 2}" fill="#3a2b22"/>`;
        g += `<rect x="${x}" y="${top + B * 3}" width="${B}" height="${H * B}" fill="#10142b"/>`;
        if (r2() > 0.82) g += `<rect x="${x + 2}" y="${top + B * 4 + 2}" width="2" height="2" fill="#1c2244"/>`;
    });
    // árboles
    [9, 31, 58, 77, 101].forEach(c => {
        const top = (H - heights[c]) * B;
        const trunkH = 3;
        const leaf = '#1f4430', leafHi = '#29573d';
        g += `<rect x="${c * B}" y="${top - trunkH * B}" width="${B}" height="${trunkH * B}" fill="#4a3424"/>`;
        g += `<rect x="${(c - 2) * B}" y="${top - (trunkH + 2) * B}" width="${B * 5}" height="${B * 2}" fill="${leaf}"/>`;
        g += `<rect x="${(c - 1) * B}" y="${top - (trunkH + 4) * B}" width="${B * 3}" height="${B * 2}" fill="${leaf}"/>`;
        g += `<rect x="${(c - 1) * B}" y="${top - (trunkH + 4) * B}" width="${B * 2}" height="${B}" fill="${leafHi}"/>`;
    });
    terrain.innerHTML = g;
}

/* ==========================================================
   NAV
   ========================================================== */
function initNav() {
    const btn = $('.menu-btn');
    const nav = $('#nav');
    btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', open);
        btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        nav.classList.toggle('open', open);
    });

    document.addEventListener('click', e => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href').slice(1);
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');

        if (a.dataset.tabLink) {
            e.preventDefault();
            selectTab(a.dataset.tabLink, { push: true, scroll: true });
            return;
        }
        const target = document.getElementById(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
            try { history.replaceState(null, '', `#${id}`); } catch (_) { /* sandbox */ }
        }
    });

    const bar = $('.topbar');
    const onScroll = () => bar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function routeFromHash() {
    const h = location.hash.replace('#', '');
    const alias = { productos: 'rangos' };
    const id = alias[h] || h;
    if (CATALOG.some(c => c.id === id)) {
        selectTab(id, { scroll: true });
        return true;
    }
    return false;
}

/* ==========================================================
   INICIO
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-wa]').forEach(a => {
        a.href = waLink('Hola, tengo una pregunta sobre la tienda de TORTRIXLAND.');
    });
    $('#year').textContent = `© ${new Date().getFullYear()}`;

    drawSky();
    renderTabs();
    selectTab('rangos');
    renderHero();
    renderPayments();
    initTooltip();
    initNav();

    routeFromHash();
    window.addEventListener('hashchange', routeFromHash);
});
