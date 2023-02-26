import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, e as empty, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, b as insert_hydration, H as append_hydration, C as noop, J as destroy_each, n as attr } from "../../chunks/index-9aa484bb.js";
const projectList = [
  {
    name: "Guess the Tune",
    description: "A wordle inspired game designed to help teach sheet music reading and basic music theory.",
    githubAddress: "https://github.com/mit1mit1/guess-the-tune",
    siteAddress: "https://mit1mit1.github.io/guess-the-tune",
    iconFilename: "guess-the-tune"
  },
  {
    name: "Software Dev Resources",
    description: `A collection of links to various resources I've found helpful as a software dev, plus notes on some of them, and a comic representation of some of the notes.`,
    githubAddress: "https://github.com/mit1mit1/software-dev-resources",
    siteAddress: "https://mit1mit1.github.io/software-dev-resources",
    iconFilename: "software-dev-resources"
  },
  {
    name: "Newtonian Dog Fighter 3000",
    description: "A game about flying small circles around bigger ones and running into each other.",
    githubAddress: "https://github.com/mit1mit1/newtonian-dog-fighter-3000",
    siteAddress: "https://mit1mit1.github.io/newtonian-dog-fighter-3000",
    iconFilename: "newtonian-dog-fighter-3000"
  },
  {
    name: "Explomandlebrot",
    description: "An audio-visual fractal experience. Slide around the Mandlebrot set while listing to music generated from it.",
    githubAddress: "https://github.com/mit1mit1/explomandlebrot",
    siteAddress: "https://mit1mit1.github.io/explomandlebrot",
    iconFilename: "explomandlebrot"
  },
  {
    name: "Top Ten Hundred",
    description: "A dictionary of the top one thousand words, defined using only the top one thousand words.",
    githubAddress: "https://github.com/mit1mit1/top-ten-hundred",
    siteAddress: "https://mit1mit1.github.io/top-ten-hundred",
    iconFilename: "top-ten-hundred"
  }
];
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_if_block_1(ctx) {
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
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, t_value);
      div_nodes.forEach(detach);
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
function create_if_block(ctx) {
  let div;
  let a;
  let t;
  return {
    c() {
      div = element("div");
      a = element("a");
      t = text("Site");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", { href: true });
      var a_nodes = children(a);
      t = claim_text(a_nodes, "Site");
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
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
      insert_hydration(target, div, anchor);
      append_hydration(div, a);
      append_hydration(a, t);
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
  let t0_value = (
    /*project*/
    ctx[0].name + ""
  );
  let t0;
  let t1;
  let t2;
  let div0;
  let a;
  let t3;
  let t4;
  let t5;
  let if_block0 = (
    /*project*/
    ctx[0].description && create_if_block_1(ctx)
  );
  let if_block1 = (
    /*project*/
    ctx[0].siteAddress && create_if_block(ctx)
  );
  return {
    c() {
      div1 = element("div");
      h2 = element("h2");
      t0 = text(t0_value);
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      div0 = element("div");
      a = element("a");
      t3 = text("GitHub");
      t4 = space();
      if (if_block1)
        if_block1.c();
      t5 = space();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, t0_value);
      h2_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (if_block0)
        if_block0.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "GitHub");
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      t5 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*project*/
        ctx[0].githubAddress
      );
      attr(div1, "class", "projectBox");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h2);
      append_hydration(h2, t0);
      append_hydration(div1, t1);
      if (if_block0)
        if_block0.m(div1, null);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, t3);
      append_hydration(div1, t4);
      if (if_block1)
        if_block1.m(div1, null);
      append_hydration(div1, t5);
    },
    p(ctx2, dirty) {
      if (
        /*project*/
        ctx2[0].description
      )
        if_block0.p(ctx2, dirty);
      if (
        /*project*/
        ctx2[0].siteAddress
      )
        if_block1.p(ctx2, dirty);
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let each_1_anchor;
  let each_value = projectList;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      h1 = element("h1");
      t0 = text("Projects by mit1mit1");
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Projects by mit1mit1");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*projectList*/
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
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
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
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
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
