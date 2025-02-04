// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);

    let heights = []

    const iter = document.getElementById(targetId).parentNode.childNodes.values();
    let id;

    while (id !== targetId) {
      const el = iter.next().value;
      id = el.id;
      const tagName = el.tagName
      if (el.clientHeight && tagName === 'SECTION')
        heights.push(el.clientHeight)
    }
    heights.pop();

    scrollTo({
      top: heights.length ? heights.reduce((a, b) => a + b) - 60 : 0,
      behavior: 'smooth'
    });
  });
});