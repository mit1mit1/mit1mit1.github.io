import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, e as empty, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop, J as destroy_each, K as src_url_equal, L as svg_element, M as claim_svg_element, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, p as set_style, d as check_outros, N as null_to_empty, O as listen, g as group_outros } from "../../chunks/index-65ec6c55.js";
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
    name: "Newtonian Dog Fighter 3000",
    description: "Flying small circles around bigger ones and run into each other.",
    githubAddress: "https://github.com/mit1mit1/newtonian-dog-fighter-3000",
    siteAddress: "https://mit1mit1.github.io/newtonian-dog-fighter-3000",
    iconName: "newtonian.png"
  },
  {
    name: "Software Dev Resources",
    description: `A collection of links to various resources I've found helpful as a software dev, plus notes on some of them, and a comic representation of some of the notes.`,
    githubAddress: "https://github.com/mit1mit1/software-dev-resources",
    siteAddress: "https://mit1mit1.github.io/software-dev-resources",
    iconName: "beanie.ico"
  },
  {
    name: "Explomandlebrot",
    description: "An audio-visual fractal experience. Slide around the Mandlebrot set while listening to music generated from it.",
    githubAddress: "https://github.com/mit1mit1/explomandlebrot",
    siteAddress: "https://mit1mit1.github.io/explomandlebrot",
    iconName: "mandlebrot.ico"
  },
  {
    name: "Napoleonic Chess Simulator 3000",
    description: "A game about learning French, playing chess, and failing history class.",
    githubAddress: "https://github.com/mit1mit1/napoleonic-chess-simulator-3000",
    siteAddress: "https://mit1mit1.github.io/napoleonic-chess-simulator-3000",
    iconName: "Napoleon.svg"
  }
];
const prettifyAddress = (address) => {
  var _a, _b;
  return (_b = (_a = address.split("https://").at(-1)) == null ? void 0 : _a.split("http://").at(-1)) == null ? void 0 : _b.split("www.").at(-1);
};
const Projects_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_if_block_2$1(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*project*/
      ctx2[0].siteAddress
    )
      return create_if_block_3$1;
    return create_else_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if_block.p(ctx2, dirty);
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block_1(ctx) {
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
      attr(img, "class", "boxIcon svelte-zc2t6y");
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
function create_if_block_3$1(ctx) {
  let a;
  let img;
  let img_src_value;
  return {
    c() {
      a = element("a");
      img = element("img");
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", { class: true, src: true, alt: true });
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "boxIcon svelte-zc2t6y");
      if (!src_url_equal(img.src, img_src_value = `${base}/images/${/*project*/
      ctx[0].iconName}`))
        attr(img, "src", img_src_value);
      attr(img, "alt", `Picture of ${/*project*/
      ctx[0].name}`);
      attr(
        a,
        "href",
        /*project*/
        ctx[0].siteAddress
      );
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
      attr(a, "class", "svelte-zc2t6y");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, img);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(a);
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
function create_if_block_1$1(ctx) {
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
      a = claim_element(nodes, "A", {
        href: true,
        target: true,
        rel: true,
        class: true
      });
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
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
      attr(a, "class", "svelte-zc2t6y");
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
function create_if_block$1(ctx) {
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
      attr(div, "class", "svelte-zc2t6y");
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
function create_each_block$1(ctx) {
  let div2;
  let h2;
  let t0;
  let t1;
  let div1;
  let div0;
  let t2;
  let a;
  let t3_value = prettifyAddress(
    /*project*/
    ctx[0].githubAddress
  ) + "";
  let t3;
  let t4;
  let t5;
  let if_block0 = (
    /*project*/
    ctx[0].iconName && create_if_block_2$1(ctx)
  );
  function select_block_type_1(ctx2, dirty) {
    if (
      /*project*/
      ctx2[0].siteAddress
    )
      return create_if_block_1$1;
    return create_else_block;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block1 = current_block_type(ctx);
  let if_block2 = (
    /*project*/
    ctx[0].description && create_if_block$1(ctx)
  );
  return {
    c() {
      div2 = element("div");
      h2 = element("h2");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if_block1.c();
      t1 = space();
      div1 = element("div");
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
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h2 = claim_element(div2_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      if (if_block0)
        if_block0.l(h2_nodes);
      t0 = claim_space(h2_nodes);
      if_block1.l(h2_nodes);
      h2_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "Github: ");
      a = claim_element(div0_nodes, "A", { href: true, target: true, rel: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, t3_value);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      if (if_block2)
        if_block2.l(div1_nodes);
      div1_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "projectTitle svelte-zc2t6y");
      attr(
        a,
        "href",
        /*project*/
        ctx[0].githubAddress
      );
      attr(a, "target", "_blank");
      attr(a, "rel", "noreferrer");
      attr(div0, "class", "svelte-zc2t6y");
      attr(div1, "class", "detailsBox svelte-zc2t6y");
      attr(div2, "class", "projectBox svelte-zc2t6y");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h2);
      if (if_block0)
        if_block0.m(h2, null);
      append_hydration(h2, t0);
      if_block1.m(h2, null);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      append_hydration(div0, t2);
      append_hydration(div0, a);
      append_hydration(a, t3);
      append_hydration(div1, t4);
      if (if_block2)
        if_block2.m(div1, null);
      append_hydration(div2, t5);
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
        detach(div2);
      if (if_block0)
        if_block0.d();
      if_block1.d();
      if (if_block2)
        if_block2.d();
    }
  };
}
function create_fragment$5(ctx) {
  let h1;
  let t0;
  let t1;
  let div;
  let t2;
  let t3;
  let each_1_anchor;
  let each_value = projectList;
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  return {
    c() {
      h1 = element("h1");
      t0 = text("Projects");
      t1 = space();
      div = element("div");
      t2 = text("In decreasing order of polish");
      t3 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Projects");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t2 = claim_text(div_nodes, "In decreasing order of polish");
      div_nodes.forEach(detach);
      t3 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-zc2t6y");
      attr(div, "class", "subheading svelte-zc2t6y");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, t2);
      insert_hydration(target, t3, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*projectList, prettifyAddress, base*/
      0) {
        each_value = projectList;
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
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
      if (detaching)
        detach(div);
      if (detaching)
        detach(t3);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
class Projects extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$5, safe_not_equal, {});
  }
}
const SupportUs_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let h1;
  let t0;
  let t1;
  let div2;
  let div0;
  let t2;
  let ul;
  let li0;
  let a0;
  let t3;
  let t4;
  let t5;
  let li1;
  let a1;
  let t6;
  let t7;
  let t8;
  let li2;
  let t9;
  let t10;
  let div1;
  let t11;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Support us");
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      t2 = text("If you enjoy my work and reckon it's worth a few bucks, please consider donating to:\n        ");
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t3 = text("givedirectly.org");
      t4 = text(";");
      t5 = space();
      li1 = element("li");
      a1 = element("a");
      t6 = text("againstmalaria.com");
      t7 = text(";");
      t8 = space();
      li2 = element("li");
      t9 = text("any other charity you know is doing good work.");
      t10 = space();
      div1 = element("div");
      t11 = text("Feel free to let me know and I'll consider it game-development income.");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Support us");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "If you enjoy my work and reckon it's worth a few bucks, please consider donating to:\n        ");
      ul = claim_element(div0_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { href: true, target: true, rel: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "givedirectly.org");
      a0_nodes.forEach(detach);
      t4 = claim_text(li0_nodes, ";");
      li0_nodes.forEach(detach);
      t5 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "againstmalaria.com");
      a1_nodes.forEach(detach);
      t7 = claim_text(li1_nodes, ";");
      li1_nodes.forEach(detach);
      t8 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t9 = claim_text(li2_nodes, "any other charity you know is doing good work.");
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t10 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t11 = claim_text(div1_nodes, "Feel free to let me know and I'll consider it game-development income.");
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1gfqryh");
      attr(a0, "href", "https://www.givedirectly.org");
      attr(a0, "target", "_blank");
      attr(a0, "rel", "noreferrer");
      attr(a1, "href", "https://www.againstmalaria.com");
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noreferrer");
      attr(div0, "class", "svelte-1gfqryh");
      attr(div1, "class", "svelte-1gfqryh");
      attr(div2, "class", "supportUsBox svelte-1gfqryh");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t2);
      append_hydration(div0, ul);
      append_hydration(ul, li0);
      append_hydration(li0, a0);
      append_hydration(a0, t3);
      append_hydration(li0, t4);
      append_hydration(ul, t5);
      append_hydration(ul, li1);
      append_hydration(li1, a1);
      append_hydration(a1, t6);
      append_hydration(li1, t7);
      append_hydration(ul, t8);
      append_hydration(ul, li2);
      append_hydration(li2, t9);
      append_hydration(div2, t10);
      append_hydration(div2, div1);
      append_hydration(div1, t11);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div2);
    }
  };
}
class SupportUs extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const WavingMe_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let svg;
  let rect0;
  let line0;
  let line1;
  let line2;
  let line3;
  let line4;
  let line5;
  let line6;
  let line7;
  let line8;
  let line9;
  let line10;
  let rect1;
  let ellipse;
  let rect2;
  let rect3;
  return {
    c() {
      svg = svg_element("svg");
      rect0 = svg_element("rect");
      line0 = svg_element("line");
      line1 = svg_element("line");
      line2 = svg_element("line");
      line3 = svg_element("line");
      line4 = svg_element("line");
      line5 = svg_element("line");
      line6 = svg_element("line");
      line7 = svg_element("line");
      line8 = svg_element("line");
      line9 = svg_element("line");
      line10 = svg_element("line");
      rect1 = svg_element("rect");
      ellipse = svg_element("ellipse");
      rect2 = svg_element("rect");
      rect3 = svg_element("rect");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      rect0 = claim_svg_element(svg_nodes, "rect", {
        class: true,
        x: true,
        y: true,
        stroke: true,
        height: true,
        width: true,
        rx: true,
        "stroke-width": true,
        fill: true
      });
      children(rect0).forEach(detach);
      line0 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line0).forEach(detach);
      line1 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line1).forEach(detach);
      line2 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line2).forEach(detach);
      line3 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line3).forEach(detach);
      line4 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line4).forEach(detach);
      line5 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line5).forEach(detach);
      line6 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line6).forEach(detach);
      line7 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line7).forEach(detach);
      line8 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line8).forEach(detach);
      line9 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line9).forEach(detach);
      line10 = claim_svg_element(svg_nodes, "line", {
        "stroke-linejoin": true,
        class: true,
        x1: true,
        y1: true,
        x2: true,
        y2: true,
        "stroke-width": true,
        stroke: true
      });
      children(line10).forEach(detach);
      rect1 = claim_svg_element(svg_nodes, "rect", {
        class: true,
        x: true,
        y: true,
        height: true,
        width: true,
        rx: true,
        fill: true
      });
      children(rect1).forEach(detach);
      ellipse = claim_svg_element(svg_nodes, "ellipse", {
        class: true,
        cx: true,
        cy: true,
        rx: true,
        ry: true,
        fill: true
      });
      children(ellipse).forEach(detach);
      rect2 = claim_svg_element(svg_nodes, "rect", {
        class: true,
        x: true,
        y: true,
        height: true,
        width: true,
        rx: true,
        fill: true
      });
      children(rect2).forEach(detach);
      rect3 = claim_svg_element(svg_nodes, "rect", {
        class: true,
        x: true,
        y: true,
        height: true,
        width: true,
        rx: true,
        fill: true
      });
      children(rect3).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(rect0, "class", "stick-head");
      attr(rect0, "x", "80");
      attr(rect0, "y", "130");
      attr(rect0, "stroke", "black");
      attr(rect0, "height", "80");
      attr(rect0, "width", "80");
      attr(rect0, "rx", "22.857142857142858");
      attr(rect0, "stroke-width", "2");
      attr(rect0, "fill", "transparent");
      attr(line0, "stroke-linejoin", "round");
      attr(line0, "class", "stick-torso");
      attr(line0, "x1", "120");
      attr(line0, "y1", "210");
      attr(line0, "x2", "120");
      attr(line0, "y2", "330");
      attr(line0, "stroke-width", "2");
      attr(line0, "stroke", "black");
      attr(line1, "stroke-linejoin", "round");
      attr(line1, "class", "stick-upper-arm-right");
      attr(line1, "x1", "120");
      attr(line1, "y1", "241.2");
      attr(line1, "x2", "147.54");
      attr(line1, "y2", "295.85334756444473");
      attr(line1, "stroke-width", "2");
      attr(line1, "stroke", "black");
      attr(line2, "stroke-linejoin", "round");
      attr(line2, "class", "stick-upper-arm-left");
      attr(line2, "x1", "120");
      attr(line2, "y1", "241.2");
      attr(line2, "x2", "64.91999999999999");
      attr(line2, "y2", "214.52353846553106");
      attr(line2, "stroke-width", "2");
      attr(line2, "stroke", "black");
      attr(line3, "stroke-linejoin", "round");
      attr(line3, "class", "stick-lower-arm-right");
      attr(line3, "x1", "147.54");
      attr(line3, "y1", "295.85334756444473");
      attr(line3, "x2", "162.84");
      attr(line3, "y2", "355.1099927614182");
      attr(line3, "stroke-width", "2");
      attr(line3, "stroke", "black");
      attr(line4, "stroke-linejoin", "round");
      attr(line4, "class", "stick-lower-arm-left");
      attr(line4, "x1", "64.91999999999999");
      attr(line4, "y1", "214.52353846553106");
      attr(line4, "x2", "46.55999999999999");
      attr(line4, "y2", "156.14245933881398");
      attr(line4, "stroke-width", "2");
      attr(line4, "stroke", "black");
      attr(line5, "stroke-linejoin", "round");
      attr(line5, "class", "stick-hand-right");
      attr(line5, "x1", "162.84");
      attr(line5, "y1", "355.1099927614182");
      attr(line5, "x2", "166.20000000000002");
      attr(line5, "y2", "371.57056383292115");
      attr(line5, "stroke-width", "2");
      attr(line5, "stroke", "black");
      attr(line6, "stroke-linejoin", "round");
      attr(line6, "class", "stick-hand-left");
      attr(line6, "x1", "46.55999999999999");
      attr(line6, "y1", "156.14245933881398");
      attr(line6, "x2", "45.719999999999985");
      attr(line6, "y2", "139.36347248024592");
      attr(line6, "stroke-width", "2");
      attr(line6, "stroke", "black");
      attr(line7, "stroke-linejoin", "round");
      attr(line7, "class", "stick-upper-leg-right");
      attr(line7, "x1", "120");
      attr(line7, "y1", "330");
      attr(line7, "x2", "140.88");
      attr(line7, "y2", "396.3941684186194");
      attr(line7, "stroke-width", "2");
      attr(line7, "stroke", "black");
      attr(line8, "stroke-linejoin", "round");
      attr(line8, "class", "stick-upper-leg-left");
      attr(line8, "x1", "120");
      attr(line8, "y1", "330");
      attr(line8, "x2", "99.12");
      attr(line8, "y2", "396.3941684186194");
      attr(line8, "stroke-width", "2");
      attr(line8, "stroke", "black");
      attr(line9, "stroke-linejoin", "round");
      attr(line9, "class", "stick-lower-leg-right");
      attr(line9, "x1", "140.88");
      attr(line9, "y1", "396.3941684186194");
      attr(line9, "x2", "154.79999999999998");
      attr(line9, "y2", "464.5879628577031");
      attr(line9, "stroke-width", "2");
      attr(line9, "stroke", "black");
      attr(line10, "stroke-linejoin", "round");
      attr(line10, "class", "stick-lower-leg-left");
      attr(line10, "x1", "99.12");
      attr(line10, "y1", "396.3941684186194");
      attr(line10, "x2", "85.2");
      attr(line10, "y2", "464.5879628577031");
      attr(line10, "stroke-width", "2");
      attr(line10, "stroke", "black");
      attr(rect1, "class", "beanie-fold");
      attr(rect1, "x", "72.5");
      attr(rect1, "y", "130");
      attr(rect1, "height", "26.666666666666668");
      attr(rect1, "width", "95");
      attr(rect1, "rx", "8");
      attr(rect1, "fill", "yellow");
      attr(ellipse, "class", "beanie-ellipse");
      attr(ellipse, "cx", "120");
      attr(ellipse, "cy", "132.66666666666666");
      attr(ellipse, "rx", "40");
      attr(ellipse, "ry", "16");
      attr(ellipse, "fill", "yellow");
      attr(rect2, "class", "beanie-stripe");
      attr(rect2, "x", "72.5");
      attr(rect2, "y", "135.33333333333334");
      attr(rect2, "height", "5.333333333333334");
      attr(rect2, "width", "95");
      attr(rect2, "rx", "2");
      attr(rect2, "fill", "black");
      attr(rect3, "class", "beanie=stripe");
      attr(rect3, "x", "72.5");
      attr(rect3, "y", "146");
      attr(rect3, "height", "5.333333333333334");
      attr(rect3, "width", "95");
      attr(rect3, "rx", "2");
      attr(rect3, "fill", "black");
      attr(svg, "width", "150");
      attr(svg, "height", "250");
      attr(svg, "viewBox", "0 0 270 500");
      attr(svg, "class", "wavingMeSVG svelte-1e1g29e");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, rect0);
      append_hydration(svg, line0);
      append_hydration(svg, line1);
      append_hydration(svg, line2);
      append_hydration(svg, line3);
      append_hydration(svg, line4);
      append_hydration(svg, line5);
      append_hydration(svg, line6);
      append_hydration(svg, line7);
      append_hydration(svg, line8);
      append_hydration(svg, line9);
      append_hydration(svg, line10);
      append_hydration(svg, rect1);
      append_hydration(svg, ellipse);
      append_hydration(svg, rect2);
      append_hydration(svg, rect3);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
class WavingMe extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$3, safe_not_equal, {});
  }
}
const AboutMe_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let h1;
  let t0;
  let t1;
  let div6;
  let wavingme;
  let t2;
  let div5;
  let div0;
  let t3;
  let t4;
  let div1;
  let t5;
  let t6;
  let div2;
  let t7;
  let t8;
  let div3;
  let t9;
  let t10;
  let div4;
  let current;
  wavingme = new WavingMe({});
  return {
    c() {
      h1 = element("h1");
      t0 = text("About me");
      t1 = space();
      div6 = element("div");
      create_component(wavingme.$$.fragment);
      t2 = space();
      div5 = element("div");
      div0 = element("div");
      t3 = text("This - is, me.");
      t4 = space();
      div1 = element("div");
      t5 = text("I'm an advanced mathematics major with a thesis in philosophy. I have 6 years of software\n			engineering experience, starting with php and jQuery, and (thankfully) continuing with Python,\n			NodeJS and React.");
      t6 = space();
      div2 = element("div");
      t7 = text("When I'm not working with those, I dabble in game design as an excuse to use Vue, Svelte, C and a touch of Rust.");
      t8 = space();
      div3 = element("div");
      t9 = text("I think it's apparent I need to rethink my life a little bit.");
      t10 = space();
      div4 = element("div");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "About me");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      claim_component(wavingme.$$.fragment, div6_nodes);
      t2 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "This - is, me.");
      div0_nodes.forEach(detach);
      t4 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t5 = claim_text(div1_nodes, "I'm an advanced mathematics major with a thesis in philosophy. I have 6 years of software\n			engineering experience, starting with php and jQuery, and (thankfully) continuing with Python,\n			NodeJS and React.");
      div1_nodes.forEach(detach);
      t6 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t7 = claim_text(div2_nodes, "When I'm not working with those, I dabble in game design as an excuse to use Vue, Svelte, C and a touch of Rust.");
      div2_nodes.forEach(detach);
      t8 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t9 = claim_text(div3_nodes, "I think it's apparent I need to rethink my life a little bit.");
      div3_nodes.forEach(detach);
      t10 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      children(div4).forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-11fvzo3");
      attr(div0, "class", "svelte-11fvzo3");
      attr(div1, "class", "svelte-11fvzo3");
      attr(div2, "class", "svelte-11fvzo3");
      attr(div3, "class", "svelte-11fvzo3");
      attr(div4, "class", "svelte-11fvzo3");
      attr(div5, "class", "aboutMeText svelte-11fvzo3");
      attr(div6, "class", "aboutMeBox svelte-11fvzo3");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div6, anchor);
      mount_component(wavingme, div6, null);
      append_hydration(div6, t2);
      append_hydration(div6, div5);
      append_hydration(div5, div0);
      append_hydration(div0, t3);
      append_hydration(div5, t4);
      append_hydration(div5, div1);
      append_hydration(div1, t5);
      append_hydration(div5, t6);
      append_hydration(div5, div2);
      append_hydration(div2, t7);
      append_hydration(div5, t8);
      append_hydration(div5, div3);
      append_hydration(div3, t9);
      append_hydration(div5, t10);
      append_hydration(div5, div4);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(wavingme.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(wavingme.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div6);
      destroy_component(wavingme);
    }
  };
}
class AboutMe extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
const Contact_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let h1;
  let t0;
  let t1;
  let div3;
  let div0;
  let t2;
  let a0;
  let t3;
  let t4;
  let div1;
  let t5;
  let a1;
  let t6;
  let t7;
  let div2;
  let t8;
  let a2;
  let t9;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Contact");
      t1 = space();
      div3 = element("div");
      div0 = element("div");
      t2 = text("Gmail: ");
      a0 = element("a");
      t3 = text("guessthetunegame@gmail.com");
      t4 = space();
      div1 = element("div");
      t5 = text("GitHub: ");
      a1 = element("a");
      t6 = text("github.com/mit1mit1/");
      t7 = space();
      div2 = element("div");
      t8 = text("LinkedIn: ");
      a2 = element("a");
      t9 = text("linkedin.com/in/midly/");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Contact");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, "Gmail: ");
      a0 = claim_element(div0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "guessthetunegame@gmail.com");
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t5 = claim_text(div1_nodes, "GitHub: ");
      a1 = claim_element(div1_nodes, "A", { href: true, target: true, rel: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "github.com/mit1mit1/");
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t7 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t8 = claim_text(div2_nodes, "LinkedIn: ");
      a2 = claim_element(div2_nodes, "A", { href: true, target: true, rel: true });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "linkedin.com/in/midly/");
      a2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1st5ae3");
      attr(a0, "href", "mailto:guessthetunegame@gmail.com");
      attr(div0, "class", "svelte-1st5ae3");
      attr(a1, "href", "https://github.com/mit1mit1/");
      attr(a1, "target", "_blank");
      attr(a1, "rel", "noreferrer");
      attr(div1, "class", "svelte-1st5ae3");
      attr(a2, "href", "https://www.linkedin.com/in/midly/");
      attr(a2, "target", "_blank");
      attr(a2, "rel", "noreferrer");
      attr(div2, "class", "svelte-1st5ae3");
      attr(div3, "class", "contactBox svelte-1st5ae3");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, t2);
      append_hydration(div0, a0);
      append_hydration(a0, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      append_hydration(div1, t5);
      append_hydration(div1, a1);
      append_hydration(a1, t6);
      append_hydration(div3, t7);
      append_hydration(div3, div2);
      append_hydration(div2, t8);
      append_hydration(div2, a2);
      append_hydration(a2, t9);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div3);
    }
  };
}
class Contact extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let button;
  let t_value = (
    /*tab*/
    ctx[4] + ""
  );
  let t;
  let button_class_value;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[3](
        /*tab*/
        ctx[4]
      )
    );
  }
  return {
    c() {
      button = element("button");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, t_value);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", button_class_value = null_to_empty(
        /*tab*/
        ctx[4] === /*selectedTab*/
        ctx[0] ? "selectedTab" : ""
      ) + " svelte-11th3ln");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*selectedTab*/
      1 && button_class_value !== (button_class_value = null_to_empty(
        /*tab*/
        ctx[4] === /*selectedTab*/
        ctx[0] ? "selectedTab" : ""
      ) + " svelte-11th3ln")) {
        attr(button, "class", button_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let contact;
  let current;
  contact = new Contact({});
  return {
    c() {
      create_component(contact.$$.fragment);
    },
    l(nodes) {
      claim_component(contact.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(contact, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(contact.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contact.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(contact, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let supportus;
  let current;
  supportus = new SupportUs({});
  return {
    c() {
      create_component(supportus.$$.fragment);
    },
    l(nodes) {
      claim_component(supportus.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(supportus, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(supportus.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(supportus.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(supportus, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let projects;
  let current;
  projects = new Projects({});
  return {
    c() {
      create_component(projects.$$.fragment);
    },
    l(nodes) {
      claim_component(projects.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(projects, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(projects.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projects.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(projects, detaching);
    }
  };
}
function create_if_block(ctx) {
  let aboutme;
  let current;
  aboutme = new AboutMe({});
  return {
    c() {
      create_component(aboutme.$$.fragment);
    },
    l(nodes) {
      claim_component(aboutme.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(aboutme, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(aboutme.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(aboutme.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(aboutme, detaching);
    }
  };
}
function create_fragment(ctx) {
  let body;
  let div1;
  let div0;
  let ul;
  let t;
  let current_block_type_index;
  let if_block;
  let current;
  let each_value = (
    /*tabs*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_if_block_3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*selectedTab*/
      ctx2[0] === "About me"
    )
      return 0;
    if (
      /*selectedTab*/
      ctx2[0] === "Projects"
    )
      return 1;
    if (
      /*selectedTab*/
      ctx2[0] === "Support us"
    )
      return 2;
    if (
      /*selectedTab*/
      ctx2[0] === "Contact"
    )
      return 3;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      body = element("body");
      div1 = element("div");
      div0 = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      body = claim_element(nodes, "BODY", {
        class: true,
        "data-sveltekit-preload-data": true
      });
      var body_nodes = children(body);
      div1 = claim_element(body_nodes, "DIV", { style: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      ul = claim_element(div0_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      t = claim_space(div0_nodes);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      body_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "navContainer svelte-11th3ln");
      attr(div0, "class", "pageContainer svelte-11th3ln");
      set_style(div1, "display", "contents");
      attr(body, "class", "app svelte-11th3ln");
      attr(body, "data-sveltekit-preload-data", "hover");
    },
    m(target, anchor) {
      insert_hydration(target, body, anchor);
      append_hydration(body, div1);
      append_hydration(div1, div0);
      append_hydration(div0, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      append_hydration(div0, t);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(div0, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*tabs, selectedTab, selectTab*/
      7) {
        each_value = /*tabs*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          }
          transition_in(if_block, 1);
          if_block.m(div0, null);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(body);
      destroy_each(each_blocks, detaching);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d();
      }
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const tabs = ["About me", "Projects", "Contact", "Support us"];
  let selectedTab = "About me";
  const selectTab = (tab) => {
    $$invalidate(0, selectedTab = tab);
  };
  const click_handler = (tab) => selectTab(tab);
  return [selectedTab, tabs, selectTab, click_handler];
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
