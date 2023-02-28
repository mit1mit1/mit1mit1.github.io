import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, J as src_url_equal, b as insert_hydration, H as append_hydration, C as noop, K as destroy_each, L as listen, u as set_data } from "../../chunks/index-12eca41c.js";
import { b as base } from "../../chunks/paths-0de5170f.js";
const iconList = [
  {
    name: "Guess the Tune",
    description: "A wordle inspired game designed to help teach sheet music reading and basic music theory.",
    iconName: "musicle.ico",
    xPercent: 20,
    yPercent: 20
  },
  {
    name: "Newtonian Dog Fighter 3000",
    description: "Flying small circles around bigger ones and run into each other.",
    iconName: "newtonian.png",
    xPercent: 40,
    yPercent: 40
  },
  {
    name: "Software Dev Resources",
    description: `A collection of links to various resources I've found helpful as a software dev, plus notes on some of them, and a comic representation of some of the notes.`,
    iconName: "beanie.ico",
    xPercent: 60,
    yPercent: 60
  },
  {
    name: "Explomandlebrot",
    description: "An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",
    iconName: "mandlebrot.ico",
    xPercent: 80,
    yPercent: 80
  }
];
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let t_value = (
    /*selectedIcon*/
    ctx[0].description + ""
  );
  let t;
  return {
    c() {
      div = element("div");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "popover svelte-9cu0ee");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*selectedIcon*/
      1 && t_value !== (t_value = /*selectedIcon*/
      ctx2[0].description + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let t;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[3](
        /*icon*/
        ctx[4]
      )
    );
  }
  let if_block = (
    /*selectedIcon*/
    ctx[0] && /*selectedIcon*/
    ctx[0].name === /*icon*/
    ctx[4].name && create_if_block(ctx)
  );
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      button_nodes.forEach(detach);
      t = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "mapIcon svelte-9cu0ee");
      if (!src_url_equal(img.src, img_src_value = `${base}/images/${/*icon*/
      ctx[4].iconName}`))
        attr(img, "src", img_src_value);
      attr(img, "alt", `Icon for ${/*icon*/
      ctx[4].name}`);
      attr(button, "class", "iconButton svelte-9cu0ee");
      attr(div, "style", `--xPos: ${/*mapPixels*/
      ctx[2].x * /*icon*/
      ctx[4].xPercent / 100}px; --yPos: ${/*mapPixels*/
      ctx[2].y * /*icon*/
      ctx[4].yPercent / 100}px; --width: ${zoom * 50}px;; --height: ${zoom * 50}px;`);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      append_hydration(div, t);
      if (if_block)
        if_block.m(div, null);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (
        /*selectedIcon*/
        ctx[0] && /*selectedIcon*/
        ctx[0].name === /*icon*/
        ctx[4].name
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let div;
  let t2;
  let img;
  let img_src_value;
  let each_value = iconList;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      h1 = element("h1");
      t0 = text("Everlee");
      t1 = space();
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      img = element("img");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Everlee");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      t2 = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", { class: true, src: true, alt: true });
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-9cu0ee");
      attr(img, "class", "redfernMap svelte-9cu0ee");
      if (!src_url_equal(img.src, img_src_value = `${base}/images/map.jpg`))
        attr(img, "src", img_src_value);
      attr(img, "alt", `Map of redfern`);
      attr(div, "class", "mapContainer svelte-9cu0ee");
      attr(div, "style", `--mapX: ${/*mapPixels*/
      ctx[2].x}px; --mapY: ${/*mapPixels*/
      ctx[2].y};`);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
      append_hydration(div, t2);
      append_hydration(div, img);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*mapPixels, iconList, zoom, selectedIcon, selectIcon, base*/
      7) {
        each_value = iconList;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, t2);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
const zoom = 0.7;
function instance($$self, $$props, $$invalidate) {
  let selectedIcon = void 0;
  const selectIcon = (icon) => {
    $$invalidate(0, selectedIcon = icon);
  };
  const mapPixels = { x: 1281 * zoom, y: 757 * zoom };
  const click_handler = (icon) => selectIcon(icon);
  return [selectedIcon, selectIcon, mapPixels, click_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
