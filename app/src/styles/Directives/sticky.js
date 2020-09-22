export default {
    bind(el, binding, vnode) {
        if (binding.arg == 'bottom') {
            el.style.position = "fixed"
            el.style.top = "0px";
            el.style.width = "100%"
        } else {
            el.style.position = "sticky"
            el.style.top = "0px"
        }
        if (binding.modifiers.light) {
            el.style.background = "#CCC"
        }
    }
}