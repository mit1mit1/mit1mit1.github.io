import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop, J as destroy_each, K as src_url_equal } from "../../chunks/index-bda98a9a.js";
import { b as base } from "../../chunks/paths-0de5170f.js";
const projectList = [
  {
    name: "Guess the Tune",
    description: "A wordle inspired game designed to help teach sheet music reading and basic music theory.",
    githubAddress: "https://github.com/mit1mit1/guess-the-tune",
    siteAddress: "https://mit1mit1.github.io/guess-the-tune",
    iconName: "musicle.ico"
  },
  {
    name: "Software Dev Resources",
    description: `A collection of links to various resources I've found helpful as a software dev, plus notes on some of them, and a comic representation of some of the notes.`,
    githubAddress: "https://github.com/mit1mit1/software-dev-resources",
    siteAddress: "https://mit1mit1.github.io/software-dev-resources",
    iconName: "beanie.ico"
  },
  {
    name: "Newtonian Dog Fighter 3000",
    description: "A game about flying small circles around bigger ones and running into each other.",
    githubAddress: "https://github.com/mit1mit1/newtonian-dog-fighter-3000",
    siteAddress: "https://mit1mit1.github.io/newtonian-dog-fighter-3000",
    iconName: "newtonian.png"
  },
  {
    name: "Explomandlebrot",
    description: "An audio-visual fractal experience. Slide around the Mandlebrot set while listing to music generated from it.",
    githubAddress: "https://github.com/mit1mit1/explomandlebrot",
    siteAddress: "https://mit1mit1.github.io/explomandlebrot",
    iconName: "mandlebrot.ico"
  },
  {
    name: "Napoleonic Chess Simulator 3000",
    description: "A game about learning chess, playing chess, and failing history class.",
    githubAddress: "https://github.com/mit1mit1/napoleonic-chess-simulator-3000",
    siteAddress: "https://mit1mit1.github.io/napoleonic-chess-simulator-3000",
    iconName: "Napoleon.svg"
  }
];
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_if_block_2(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
      this.h();
    },
    h() {
      attr(img, "class", "boxIcon svelte-1motezc");
      if (!src_url_equal(img.src, img_src_value = `${base}/images/${/*project*/
      ctx[0].iconName}`))
        attr(img, "src", img_src_value);
      attr(img, "alt", `Picture of ${/*project*/
      ctx[0].name}`);
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(img);
    }
  };
}
function create_else_block(ctx) {
  let t_value = (
    /*project*/
    ctx[0].name + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let a;
  let t_value = (
    /*project*/
    ctx[0].name + ""
  );
  let t;
  return {
    c() {
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*project*/
        ctx[0].siteAddress
      );
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let t_value = (
    /*project*/
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
      attr(div, "class", "svelte-1motezc");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_each_block(ctx) {
  let div1;
  let h2;
  let t0;
  let t1;
  let div0;
  let t2;
  let a;
  let t3_value = (
    /*project*/
    ctx[0].githubAddress + ""
  );
  let t3;
  let t4;
  let t5;
  let if_block0 = (
    /*project*/
    ctx[0].iconName && create_if_block_2(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*project*/
      ctx2[0].siteAddress
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  let if_block2 = (
    /*project*/
    ctx[0].description && create_if_block(ctx)
  );
  return {
    c() {
      div1 = element("div");
      h2 = element("h2");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      div0 = element("div");
      t2 = text("Github: ");
      a = element("a");
      t3 = text(t3_value);
      t4 = space();
      if (if_block2)
        if_block2.c();
      t5 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      if (if_block0)
        if_block0.l(h2_nodes);
      t0 = claim_space(h2_nodes);
      if_block1.l(h2_nodes);
      h2_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "Github: ");
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, t3_value);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      if (if_block2)
        if_block2.l(div1_nodes);
      t5 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "svelte-1motezc");
      attr(
        a,
        "href",
        /*project*/
        ctx[0].githubAddress
      );
      attr(div0, "class", "svelte-1motezc");
      attr(div1, "class", "projectBox svelte-1motezc");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h2);
      if (if_block0)
        if_block0.m(h2, null);
      append_hydration(h2, t0);
      if_block1.m(h2, null);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, t2);
      append_hydration(div0, a);
      append_hydration(a, t3);
      append_hydration(div1, t4);
      if (if_block2)
        if_block2.m(div1, null);
      append_hydration(div1, t5);
    },
    p(ctx2, dirty) {
      if (
        /*project*/
        ctx2[0].iconName
      )
        if_block0.p(ctx2, dirty);
      if_block1.p(ctx2, dirty);
      if (
        /*project*/
        ctx2[0].description
      )
        if_block2.p(ctx2, dirty);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
function create_fragment(ctx) {
  let div;
  let h1;
  let t0;
  let t1;
  let each_value = projectList;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Projects by mit1mit1");
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Projects by mit1mit1");
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1motezc");
      attr(div, "class", "pageContainer svelte-1motezc");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*projectList, base*/
      0) {
        each_value = projectList;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
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
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
